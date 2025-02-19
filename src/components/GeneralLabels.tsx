import type React from "react"
import { useEffect, useState } from "react"
import Spinner from "./Spinner"
import LogoFb from "../assets/FbLogo.svg"
import LogoInsta from "../assets/InstaLogo.svg"
import MetaGeneral from "./MetaGeneral"
import CarouselGeneral from "./CarouselGeneral"
import axios from "axios"

const GeneralLabels: React.FC = () => {
  const URL = "https://mf-api-71095185658.us-central1.run.app/"
  const [generalLabels, setGeneralLabels] = useState<{ title: string, value: string }[]>([])
  const [facebookData, setFacebookData] = useState<string>("")
  const [instaData, setInstagramData] = useState<string>("")
  const [loading, setLoading] = useState(true)

  const finalTexts = [
    "Este es un resumen de los KPI's principales y se actualiza cada 12 horas de manera automática.",
    "Las fotografías en solitario se pautan por el objetivo de interacción.",
    " Los videos únicamente se pueden pautar por el objetivo de reproducciones.",
    "El costo por reacción varía según el contenido del que se trate.",
    "No hay costos fijos en redes.",
    "Esta herramienta es limitada a dicha información, mientras que detalles como el rendimiento y análisis se realizarán en cada reporte mensual."
  ]

  // Set loading, fetch Data or throw an error
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${URL}scrape/`)
        console.log(data)
        setGeneralLabels(data.generalLabels)
        setFacebookData(data.facebookData)
        setInstagramData(data.instagramData)
      } catch (error) {
        console.log("Error", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])
  return (
    <div className="max-w-[700px] mx-auto p-4 mt-10">
      <h2 className="text-2xl max-[425px]:text-xl mb-5">Resultados acumulados</h2>
      {
        loading ? (
          <Spinner />
        )
          :
          <MetaGeneral generalLabels={generalLabels} />
      }
      {
        loading ? (
          <Spinner />
        ) :
          <CarouselGeneral facebookData={instaData} srcImage={LogoInsta} />
      }
      {
        loading ? (
          <Spinner />
        ) :
          <CarouselGeneral facebookData={facebookData} srcImage={LogoFb} />
      }
      <div className="bg-white w-full p-10 rounded-2xl">
        <ul className="bg-transparent">
          {
            finalTexts.map((text) => (
              <li className="list-disc list-inside marker:text-blue-600 bg-transparent font-light text-md">{text}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default GeneralLabels
