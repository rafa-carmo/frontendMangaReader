import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home'
import MangaDetail from './Pages/MangaDetail'
import Leitor from './Pages/Leitor'
import Login from './Pages/Login'

function Routes() {
    return (
    <BrowserRouter>
        <Route path="/" exact component={Home}/> 
        <Route path="/:id" exact component={MangaDetail}/>
        <Route path="/signin" component={Login}/>
        <Route path="/:id/:cap" component={Leitor}/>

    </BrowserRouter>
    )
}

export default Routes;