import React,{ useState } from "react"
// import Button from "./components/Button"
// import OnOff from "./components/OnOff"
// import Recapture from "./components/Recapture"
// import Picnic from "./components/Picnic"

import { useSelector, useDispatch } from "react-redux"
// import { signInAction } from "./reducks/users/actions"

import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)

  console.log(selector.users)

  const [recapture, setRecapture] = useState(0)

  function handleInputTextChange(text) {
    setRecapture(text);
  }

  return (
    <>
      {/* <Button />
      <OnOff />
      <br></br>
      <br></br>
      {recapture >= 1 && <p>↓{recapture}回クリック中</p>}
      { recapture === 3 &&
        <Recapture handleInputTextChange={() => handleInputTextChange(0)} />
      }
      <button disabled={true && recapture >=3} onClick={() => setRecapture(recapture + 1)}>登録</button>
      <br></br>
      <br></br>
      <Picnic emotion="楽しい" titleStyle={{backgroundColor: "pink"}} title="リンゴ🍎" color="blue" />
      <br></br>
      <br></br>
      <button onClick={() => dispatch(signInAction({uid: "0001", username: "trahack"}))}>Sign in</button>
      <br></br>
      <br></br> */}
      <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/register/`} element={<Register />} />
        <Route path={`/login/`} element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
