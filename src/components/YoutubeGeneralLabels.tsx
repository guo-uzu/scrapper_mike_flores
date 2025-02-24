import type React from "react"

const MetaGeneral: React.FC = ({ generalLabels }) => {
  const styles = "flex flex-col items-center text-center justify-center px-8 py-2 rounded-4xl bg-white text-2xl col-span-2"
  const stylesForThree = "flex flex-col items-center text-center justify-center px-8 py-2 rounded-4xl bg-white text-2xl col-span-3"
  return (
    <div className="grid grid-cols-6 max-[600px]:grid-cols-1 grid-rows-1 gap-y-7 gap-x-5 max-[425px]:gap-x-0">
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
    </div>
  )

}

export default MetaGeneral
