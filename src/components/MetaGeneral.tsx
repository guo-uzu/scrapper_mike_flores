import type React from "react"

const MetaGeneral: React.FC = ({ generalLabels }) => {
  console.log(generalLabels)
  const styles = "flex flex-col items-center text-center justify-center px-8 py-2 rounded-4xl bg-white text-2xl col-span-2"
  const stylesForThree = "flex flex-col items-center text-center justify-center px-8 py-2 rounded-4xl bg-white text-2xl col-span-3"
  return (
    <div className="grid grid-cols-6 max-[425px]:grid-cols-1 grid-rows-2 gap-y-7 gap-x-5 max-[425px]:gap-x-0">
      <div className={styles}>
        <p>{generalLabels[0].title}</p>
        <p>{generalLabels[0].value}</p>
      </div>
      <div className={styles}>
        <p>{generalLabels[1].title}</p>
        <p>{generalLabels[1].value}</p>
      </div>
      <div className={styles}>
        <p>{generalLabels[2].title}</p>
        <p>{generalLabels[2].value}</p>
      </div>
      <div className={stylesForThree}>
        <p>{generalLabels[3].title}</p>
        <p>{generalLabels[3].value}</p>
      </div>
      <div className={stylesForThree}>
        <p>{generalLabels[4].title}</p>
        <p>{generalLabels[4].value}</p>
      </div>

    </div>
  )

}

export default MetaGeneral
