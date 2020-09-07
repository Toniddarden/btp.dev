import React from "react";
import { Route } from "react-router-dom";

import NavBar from "./components/utilities/NavBar";

import Home from "./components/pages/Home";
import Mission from "./components/pages/Mission";
import CodeOfConduct from "./components/pages/CodeOfConduct";
import Connect from "./components/pages/Connect";
import SingleBlog from "./components/pages/blogs/Item";

const AppRouter = () => (
  <div>
    <NavBar />
    <Route exact path="/" component={Home} />
    <Route exact path="/item/:blogId" component={SingleBlog} />
    <Route exact path="/mission" component={Mission} />
    <Route exact path="/codeofconduct" component={CodeOfConduct} />
    <Route exact path="/connect" component={Connect} />
    <Route exact path="/single_blog/:blogId" render={() => <SingleBlog /> }/>
  </div>
);

export default AppRouter;
