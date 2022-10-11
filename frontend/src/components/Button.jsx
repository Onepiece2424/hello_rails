import {useState} from "react"

const Button = () => {
  const [count, setCount] = useState(0)
  return (
  <>
    <br></br>
    <br></br>
    <button onClick={() => setCount(count + 1)}>+1ボタン</button>
    <button onClick={() => setCount(count - 1)}>-1ボタン</button>
    <button onClick={() => setCount(count * 2)}>*2ボタン</button>
    <button onClick={() => setCount(count / 2)}>/2ボタン</button>
    <p>カウント数:{count}</p>
  </>
  )
}

export default Button;
