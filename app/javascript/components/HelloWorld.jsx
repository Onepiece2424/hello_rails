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
  const users = props.users[0]
  return (
    <>
      <h2>Greeting: {greeting}</h2>
      <h2>ユーザー名:{users.username}</h2>
    </>
  )
}

HelloWorld.propTypes = {
  greeting: PropTypes.string,
  user: PropTypes.string
};

export default HelloWorld
