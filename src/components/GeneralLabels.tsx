import type React from "react"
import { useEffect, useState } from "react"
import Spinner from "./Spinner"
import LogoFb from "../assets/FbLogo.svg"
import LogoInsta from "../assets/InstaLogo.svg"
import MetaGeneral from "./MetaGeneral"
import CarouselGeneral from "./CarouselGeneral"
import YoutubeGeneralLabels from "./YoutubeGeneralLabels.tsx"
import axios from "axios"

const GeneralLabels: React.FC = () => {
  const URL = "http://localhost:3001/"
  const [generalLabels, setGeneralLabels] = useState<{ title: string, value: string }[]>([])
  const [facebookData, setFacebookData] = useState<string>("")
  const [instaData, setInstagramData] = useState<string>("")
  const [youtubeDataLabels, setYoutubeLabels] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [loadingYt, setLoadingYt] = useState(true)



  // Set loading, fetch Data or throw an error
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${URL}scrape/`, {
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
        })
        setGeneralLabels(data.generalLabels)
        setFacebookData(data.facebookData)
        setInstagramData(data.instagramData)
      } catch (error) {
        console.log("Error", error)
      } finally {
        setLoading(false)
      }
    }

    const fetchDataYt = async () => {
      try {
        const { data } = await axios.get(`${URL}scrape-yt/`, {
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
        })
        console.log(data)
        setYoutubeLabels(data.generalLabels)
      } catch (error) {
        console.log("Error", error)
      } finally {
        setLoadingYt(false)
      }
    }
    fetchData()
    fetchDataYt()
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
    </div>
  )
}

export default GeneralLabels
