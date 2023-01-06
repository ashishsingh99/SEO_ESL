import './App.css';
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from './Mycomponent/pages/login/login';
import Layout from './Layout';
import Home from './Mycomponent/pages';
import RankTracking from './Mycomponent/pages/rankTracking';
import Register from './Mycomponent/pages/login/register';
import PlLogin from './Mycomponent/pages/login/plLogin';
import AddProject from './Mycomponent/pages/AddProject/addProject';
import { AddWebsite } from './Mycomponent/pages/AddProject/addwebsite';
import { AddCountry } from './Mycomponent/pages/AddProject/addLocation';
import { AddKeyword } from './Mycomponent/pages/AddProject/addKeyword';
import Upgrade from './Mycomponent/pages/upgrade';
import Forgot from './Mycomponent/pages/login/forgot';
import Keywords from './Mycomponent/pages/keywords';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='pllogin' element={<PlLogin />} />
        <Route path='register' element={<Register />} />
        <Route path='forgot' element={<Forgot />} />

        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='rank' element={<RankTracking />} />
          <Route path='keywords' element={<Keywords />} />
          <Route path='upgrade' element={<Upgrade />} />
          <Route path='addpr' element={<AddProject />} >
            <Route index element={<AddWebsite />} />
            <Route path='addwebsite' element={<AddWebsite />} />
            <Route path='addcountry' element={<AddCountry />} />
            <Route path='addkeyword' element={<AddKeyword />} />

          </Route>
        </Route>
      </Routes>
    </div>





  );
}

export default App;
