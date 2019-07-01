import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from "pages/Home";
import Navbar from "components/Navbar"
import Sidebar from "components/Sidebar";
import Categories from "pages/Categories";



const Routes = () => (
<div>
<Navbar />
<Sidebar />
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/categories' component={Categories} />
  </Switch>
</div>
);

export default Routes;
