import {Server} from "hapi";
import React from "react";
import Router from "react-router";
// import Transmit from "react-transmit";
import routes from "views/routes";
import html from "views/html";

/**
 * Start Hapi server on port 8000.
 */
const server = new Server();
server.connection({port: process.env.PORT || 8000});
server.start();

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

    let markup = React.renderToString(<Handler/>);

    console.log("markup", markup, routes);
    let output = React.renderToStaticMarkup(<Handler />);

    console.log("output", output);
    reply(output);
  })
});