import React from "react"

const HelloWorld = (props) => {
  const greeting = props.greeting
  const users = props.users
  return (
    <>
      <h2>Greeting: {greeting}</h2>
      <h2>
      {users.map((user)=> {
        return <div>{user.id}:{user.username}</div>
      })}
      </h2>
    </>
  )
}

export default HelloWorld
