
import Header from "./components/header";
import Footer from "./components/footer";
import Add_pet from "./components/pages/addpet";
import Auth from "./components/pages/auth";
import Edit_pet from "./components/pages/editpet";
import Index from "./components/pages/index";
import Orders from "./components/pages/orders";
import Pet from "./components/pages/pet";
import Profile from "./components/pages/profile";
import Registration from "./components/pages/registration";
import Search from "./components/pages/search";
import Fdg from "./components/pages/fdg";

import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Slider from "./components/slider";
import Button from "./components/button";

function App() {
  return (
<div>

          <Routes>
              <Route path={'/'} element={<Index/>}/>
              <Route path={'/index'} element={<Index/>}/>
              <Route path={'/addpet'} element={<Add_pet/>}/>
              <Route path={'/auth'} element={<Auth/>}/>
              <Route path={'/editpet'} element={<Edit_pet/>}/>
              <Route path={'/orders'} element={<Orders/>}/>
              <Route path={'/pet'} element={<Pet/>}/>
              <Route path={'/profile'} element={<Profile/>}/>
              <Route path={'/registration'} element={<Registration/>}/>
              <Route path={'/search'} element={<Search/>}/>
          </Routes>

      </div>
  );
}

export default App;
