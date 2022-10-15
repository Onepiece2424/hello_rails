import React from "react"

const Recapture = (props) => {

  return(
    <>
      <p>リキャプチャだよ。</p>
      <p>ここをチェックしてね。</p>
      <div>
        <input type="checkbox" onChange={() => props.handleInputTextChange()}></input>
        <label>リキャプチャチェック</label>
      </div>
    </>
  )
}
export default Recapture;
