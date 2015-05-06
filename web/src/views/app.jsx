import React from "react";
import Layout from "views/components/shared/layout";
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
      <Layout>
        <h1>Hello handle feel the works as it should now!</h1>
      </Layout>
    );
  }
}
export default App;