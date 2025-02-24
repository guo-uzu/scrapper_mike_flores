import type React from "react"
import LeftArrowImage from "../assets/LeftArrow.svg"
import RightArrowImage from "../assets/RightArrow.svg"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const LeftArrow: React.FC = (props) => {
  return (
    <img src={LeftArrowImage.src} alt="" />
  )
}

const RightArrow: React.FC = (props) => {
  return (
    <img className="w-3" src={RightArrowImage.src} alt="" />
  )
}


const YoutubeGeneral: React.FC = ({ facebookData, srcImage }) => {
  console.log(facebookData)
  const settings = {
    infinite: true,
    slidesToShow: 1,
  }
  const stylesTitles = "text-zinc-500 font-light text-md"
  const stylesTexts = "font-light text-xl text-left max-[768px]:text-right"
  return (
    <Slider className="" {...settings}>
      {
        facebookData.map((element, index) => (
          <div key={index} className="relative bg-white z-0 flex! mt-[100px] flex-col overflow-visible p-10 max-[425px]:px-5 rounded-2xl">

            <img className="absolute w-[100px] max-[425px]:w-[80px] left-1/2 -translate-x-1/2 top-[-15%] max-[768px]:top-[-10%]" src={srcImage.src} alt="Logo facebook" />

            <div className="flex flex-col items-center gap-2">
              <p className="font-light text-xl">Estado del anuncio</p>
              {
                element[3] === "Activa" ? (
                  <p className="bg-green-500 text-xl font-semibold px-5 py-2 rounded-2xl">ACTIVO</p>
                ) :
                  element[3] === "Pausada" || element[3] === "PAUSED" ? (
                    <p className="bg-red-500 text-xl font-semibold px-5 py-2 rounded-2xl">FINALIZADO</p>
                  )
                    : ""
              }
            </div>

            <div className="grid grid-cols-3 max-[768px]:grid-cols-1 max-[768px]:flex flex-col gap-6 max-[768px]:gap-x-0 pt-5">
              <div className="w-full overflow-hidden col-span-2">
                <iframe className="w-full h-full min-h-[300px]" loading="lazy" src={element[2]} />
              </div>
              <div className="w-full flex flex-col gap-2">
                <div className="flex flex-col justify-between max-[768px]:flex-row max-[768px]:gap-2">
                  <p className={stylesTitles}>Nombre del anuncio</p>
                  <p className={stylesTexts}>{element[1]}</p>
                </div>
                <div className="flex flex-col justify-between max-[768px]:flex-row max-[768px]:gap-2">
                  <p className={stylesTitles}>Impresiones</p>
                  <p className={stylesTexts}>{element[4]}</p>
                </div>
                <div className="flex flex-col justify-between max-[768px]:flex-row max-[768px]:gap-2">
                  <p className={stylesTitles}>Reproducciones</p>
                  <p className={stylesTexts}>{element[5]}</p>
                </div>
                <div className="flex flex-col justify-between max-[768px]:flex-row max-[768px]:gap-2">
                  <p className={stylesTitles}>Costo por reproducción</p>
                  <p className={stylesTexts}>{element[6]}</p>
                </div>
              </div>
            </div>
          </div >
        ))
      }
    </Slider >
  )
}

export default YoutubeGeneral
