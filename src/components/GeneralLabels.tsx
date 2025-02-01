import type React from "react"
import { useState } from "react"

const GeneralLabels: React.FC = async ({ GeneralLabels }) => {
  const [generalLabels, setGeneralLabels] = useState(GeneralLabels)
  return (
    <div>
      {
        GeneralLabels ?
          GeneralLabels.map((label) => (
            <div>
              <p>{label.title}</p>
              <p>{label.value}</p>
            </div>)
          )
          :
          <h2>Uploading</h2>
      }
    </div>
  )
}

export default GeneralLabels
