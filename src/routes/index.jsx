import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from "pages/Home";
import Navbar from "components/Navbar"
import Sidebar from "components/Sidebar";
import Categories from "pages/Categories";
import Posts from "pages/Posts";
import Videos from "pages/Videos";
import Users from "pages/Users";
import Settings from "pages/Settings";
import PushNotification from "pages/PushNotification";



const Routes = () => (
<div>
<Navbar />
<Sidebar />
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/categories' component={Categories} />
    <Route exact path='/posts' component={Posts} />
    <Route exact path='/videos' component={Videos} />
    <Route exact path='/users' component={Users} />
    <Route exact path='/settings' component={Settings} />
    <Route exact path='/notification' component={PushNotification} />
  </Switch>
</div>
);

export default Routes;
