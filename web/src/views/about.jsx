import React from "react";
import Transmit from "react-transmit";

import Layout from "views/components/shared/layout";

class About extends React.Component{
  render(){
    return (
      <Layout>
        <h1>About oiitt!</h1>
      </Layout>
    );
  }
}
export default Transmit.createContainer(About);