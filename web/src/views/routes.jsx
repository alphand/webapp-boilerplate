import React from "react";
import {Route, DefaultRoute, NotFoundRoute } from "react-router";
import App from "views/app";
import About from "views/about";
// import NotFound from "views/components/common/notfound";

/**
 * The React Routes for both the server and the client.
 *
 * @class Routes
 */
export default (
  <Route path="/" name="app">
      <Route path="/about" name="about" handler={About} />
      <DefaultRoute handler={App} name="app-default" />
  </Route>
);