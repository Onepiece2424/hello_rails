import React,{ useState } from "react"
import Button from "./components/Button"
import OnOff from "./components/OnOff"
import Recapture from "./components/Recapture"

import Picnic from "./components/Picnic"

function App() {
  const [recapture, setRecapture] = useState(0)

  function handleInputTextChange(text) {
    setRecapture(text);
  }

  return (
    <>
      <Button />
      <OnOff />
      <br></br>
      <br></br>
      { recapture === 3 &&
        <Recapture handleInputTextChange={() => handleInputTextChange(0)} />
      }
      <p>↓{recapture}回クリック中</p>
      <button disabled={true && recapture >=3} onClick={() => setRecapture(recapture + 1)}>登録</button>
      <br></br>
      <br></br>
      <Picnic emotion="楽しい" titleStyle={{backgroundColor: "pink"}} title="リンゴ🍎" color="blue" />
    </>
  )
}

export default App;
