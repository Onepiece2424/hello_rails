// propsの受け渡しを確認するコンポーネント
import React from "react"

const Picnic = (props) => {

  return (
    <>
      <h2 style={props.titleStyle}>{props.emotion}ピクニック</h2>
      <p>{props.title}</p>
    </>
  )
}

export default Picnic;
