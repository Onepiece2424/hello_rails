 import React from "react";
 import {Route, Routes, Link} from "react-router-dom";
 import {Login, Home} from "./templates";

 const Router = () => {

  return (
    <>
    <Link to="/login">Login</Link>
    <Link to="/">Home</Link>
    <Routes>
      <Route exact path='/login' component={<Login />} />
      <Route exact path='(/)?' component={<Home />} />
    </Routes>
    <Login />
    </>
  )
 }

 export default Router;
