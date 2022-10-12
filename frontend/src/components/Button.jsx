import { useState, useEffect} from "react"

const Button = () => {
  const [count, setCount] = useState(0)
  const [disable, setDisable] = useState(false)

  useEffect(() => {
    console.log("初回レンダリング時のみの表記です。")
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
    <button disabled={disable} onClick={() => setDisable(!disable)}>{disable ? "hide" : "show"}</button>
  </>
  )
}

export default Button
