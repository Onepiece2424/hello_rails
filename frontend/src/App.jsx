import React,{ useState } from "react"
import Button from "./components/Button"
import OnOff from "./components/OnOff"
import Recapture from "./components/Recapture"

function App(props) {
  const [recapture, setRecapture] = useState(0)
  return (
    <>
      <Button />
      <OnOff />
      <OnOff />
      <br></br>
      <br></br>
      {
      (recapture % 3 === 0) &&    // 3の倍数の時にリキャプチャ表示
        <Recapture />
      }
      <button onClick={() => setRecapture(recapture + 1)}>登録{recapture}</button>
    </>
  )
}

export default App;
