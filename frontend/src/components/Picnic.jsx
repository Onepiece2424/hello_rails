// propsの受け渡しを確認するコンポーネント
import React from "react"

const Picnic = (props) => {

  const {color} = props    // propsを分割代入（props.~をせずにprops.colorを表現できる。）

  // App.jsx（親）のpropsのcolorをPicnic.jsx（子）へ渡す。また、「オブジェクトの省略記法」により、オブジェクトのプロパティ（今回でいうと、contentStyleのcolor）と設定値名（color:color,の後ろのcolor）が同一なので、後ろのcolorを省略することもできる。
  const contentStyle = {
    color,
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
