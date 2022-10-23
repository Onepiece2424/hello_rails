 import React from "react";
 import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
 import {Login, Home} from "./templates";

 const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/' element={<Home/>} />
      </Routes>
      <Link to='/'>Back To Top</Link>
    </BrowserRouter>
  )
 }

 export default Router;
