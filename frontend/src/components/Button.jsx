import { useState, useEffect} from "react"

const Button = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(count)
    }, 2000);
    return () => {
      clearInterval(timer)
    }
  }, [count])
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

export default Button
