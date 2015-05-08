import React from "react";
import {Link} from "react-router";

class MainNav extends React.Component{
  render(){
    return (
        <div>
          <ul>
            <li> <Link to="app"> Home nav</Link> </li>
            <li> <Link to="about"> About </Link> </li>
          </ul> 
        </div>
    );
  }
}
export default MainNav;