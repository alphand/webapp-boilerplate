import React from "react";
import {Route, DefaultRoute} from "react-router";
import App from "views/app";

/**
 * The React Routes for both the server and the client.
 *
 * @class Routes
 */
export default (
  <Route path="/">
    <DefaultRoute handler={App} />
  </Route>
);