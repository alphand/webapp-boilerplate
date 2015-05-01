import React from "react";
import Transmit from "react-transmit";

import Layout from "../shared/layout";

class NotFound extends React.Component{
  render(){
    return (
        <Layout>
          <h1>Page not found!</h1>
        </Layout>
    );
  }
}
export default Transmit.createContainer(NotFound);

