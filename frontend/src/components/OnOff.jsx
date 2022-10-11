import { useState } from "react"

const OnOff = () => {
  const [power, setPower] = useState(false)
  return (
    <>
      <p>電源{power ?  'ON' : 'OFF'}</p>
      <button onClick={() => setPower(true)}>ON</button>
      <button onClick={() => setPower(false)}>Off</button>
    </>
  )
}

export default OnOff;
