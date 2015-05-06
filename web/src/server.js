import {Server} from "hapi";
import React from "react";
import Router from "react-router";
import Transmit from "react-transmit";
import routes from "views/routes";
import Html from "views/html";

/**
 * Start Hapi server on port 8000.
 */
const server = new Server();
server.connection({port: process.env.PORT || 8000});
server.start(function(){
  console.info("==> ✅  Server is listening");
  console.info("==> 🌎  Go to " + server.info.uri.toLowerCase());
});

/**
 * Attempt to serve static requests from the public folder.
 */
server.route({
  method:  "*",
  path:    "/{params*}",
  handler: (request, reply) => {
    reply.file("static" + request.path);
  }
});

/**
 * Catch dynamic requests here to fire-up React Router.
 */
server.ext("onPreResponse", (request, reply) => {
  if (typeof request.response.statusCode !== "undefined") {
    return reply.continue();
  }

  Router.run(routes, request.path, (Handler, router) => {
    // let output = React.renderToStaticMarkup(<Handler />);
    let markup = React.renderToString(<Handler/>);
    let title = "React JS Isomorphic";
    let html = React.renderToStaticMarkup(<Html title={title} markup={markup} />)
    reply(html);
  })
});