import { useState } from "react"

const OnOff = () => {
  const [power, setPower] = useState(false)
  return (
    <>
      <p>↓電源ON/OFFボタン</p>
      <button onClick={() => setPower(!power)}>{power ?  'ON' : 'OFF'}</button>
      <p>電源{power ?  'ON' : 'OFF'}</p>
    </>
  )
}

export default OnOff;
