import React from "react";

class App extends React.Component {
  /**
   * Runs on server and client.
   */
  componentWillMount () {
    if (__SERVER__) {
      /**
       * This is only run on the server, and will be removed from the client build.
       */
      console.log("Hello server");

    }

    if (__CLIENT__) {
      /**
       * This is only run on the client.
       */
      console.log("Hello client");
    }
  }

  render () {
    return (
        <h1>Hello Keep sekali load donk!</h1>
    );
  }
}
export default App;