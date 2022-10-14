import React,{ useState } from "react"
import Button from "./components/Button"
import OnOff from "./components/OnOff"
import Recapture from "./components/Recapture"

import Picnic from "./components/Picnic"

function App() {
  const [recapture, setRecapture] = useState(0)

  const fun = '楽しい'

  return (
    <>
      <Button />
      <OnOff />
      <br></br>
      <br></br>
      {
      recapture === 3 &&
        <Recapture
          onChange={() => setRecapture(recapture + 1)}
        />
      }
      <button disabled={true && recapture >=3} onClick={() => setRecapture(recapture + 1)}>登録{recapture}</button>
      <br></br>
      <br></br>
      <Picnic emotion={fun} titleStyle={{backgroundColor: "pink"}} title="リンゴ🍎" />
    </>
  )
}

export default App;
