import type React from "react"
import { useEffect, useState } from "react"
import Spinner from "./Spinner"
import YoutubeLogo from "../assets/YoutubeLogo.svg"
import YoutubeGeneralLabels from "./YoutubeGeneralLabels.tsx"
import YoutubeGeneral from "./YoutubeGeneral.tsx"
import axios from "axios"

const GeneralLabels: React.FC = () => {
  const URL = "http://localhost:3001/"
  const [youtubeData, setYoutubeData] = useState<string>("")
  const [youtubeDataLabels, setYoutubeLabels] = useState<string>("")
  const [loadingYt, setLoadingYt] = useState(true)



  // Set loading, fetch Data or throw an error
  useEffect(() => {
    const fetchDataYt = async () => {
      try {
        const { data } = await axios.get(`${URL}scrape-yt/`, {
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
        })
        console.log(data)
        setYoutubeLabels(data.generalLabels)
        setYoutubeData(data.youtubeData)
      } catch (error) {
        console.log("Error", error)
      } finally {
        setLoadingYt(false)
      }
    }
    fetchDataYt()
  }, [])
  return (
    <div className="max-w-[700px] mx-auto p-4 mt-10">
      <h2 className="text-2xl max-[425px]:text-xl mb-5">Resultados acumulados</h2>
      {
        loadingYt ? (
          <Spinner />
        ) :
          <YoutubeGeneralLabels generalLabels={youtubeDataLabels} />
      }
      {
        loadingYt ? (
          <Spinner />
        ) :
          <YoutubeGeneral facebookData={youtubeData} srcImage={YoutubeLogo} />
      }

    </div>
  )
}

export default GeneralLabels
