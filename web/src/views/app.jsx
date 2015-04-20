import React from "react";
import Transmit from "react-transmit";

class App extends React.Component{
  render(){
    return (<h1>Hello world!</h1>);
  }
}
export default Transmit.createContainer(App);