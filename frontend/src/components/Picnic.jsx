// propsの受け渡しを確認するコンポーネント
import React from "react"

const Picnic = (props) => {

  const contentStyle = {
    color: props.color,     // App.jsx（親）のpropsのcolorをPicnic.jsx（子）へ渡す
    fontSize: "40px",
  }

  return (
    <>
      <div style={contentStyle}>{props.emotion}ピクニック</div>
      <p>{props.title}</p>
    </>
  )
}

export default Picnic;
