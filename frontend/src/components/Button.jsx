import { useState, useEffect, useRef} from "react"

const Button = () => {
  const [count, setCount] = useState(0)
  const renderFlgRef = useRef(false)

  useEffect(() => {
    if(renderFlgRef.current) {
      console.log("初回レンダリング時のみの表記です。")
    } else {
      renderFlgRef.current = true
    }
  }, [])

  // countが変更されるたびに処理が実行される
  useEffect(() => {
    setTimeout(() => { console.log("called")}, 2000)
  }, [count]);

  return (
  <>
    <br></br>
    <br></br>
    <button onClick={() => setCount(count + 1)}>+1ボタン</button>
    <button onClick={() => setCount(count - 1)}>-1ボタン</button>
    <button onClick={() => setCount(count * 2)}>*2ボタン</button>
    <button onClick={() => setCount(count / 2)}>/2ボタン</button>
    <button onClick={() => setCount(0)}>リセットボタン</button>
    <p>カウント数:{count}</p>
    <br></br>
    <br></br>
  </>
  )
}

export default Button
