import React,{ useState } from "react"
import Button from "./components/Button"
import OnOff from "./components/OnOff"
import Recapture from "./components/Recapture"

function App() {
  const [recapture, setRecapture] = useState(0)
  return (
    <>
      <Button />
      <OnOff />
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
    </>
  )
}

export default App;
