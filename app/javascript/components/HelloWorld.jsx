import React from "react"
import PropTypes from "prop-types"
// class HelloWorld extends React.Component {
//   render () {
//     return (
//       <React.Fragment>
//         Greeting: {this.props.greeting}
//       </React.Fragment>
//     );
//   }
// }

const HelloWorld = (props) => {
  const greeting = props.greeting

  return (
    <>
      Greeting: {greeting}
    </>
  )
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
