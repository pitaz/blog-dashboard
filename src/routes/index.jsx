import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from "../pages/Home";
import Navbar from "../components/Navbar"



const Routes = () => (
<div>
<Navbar />
  <Switch>
  <Route exact path='/' component={Home} />
  </Switch>
</div>
);

export default Routes;
