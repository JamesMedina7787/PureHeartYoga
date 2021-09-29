import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'


class Navigation extends Component {
  render() {
    console.log()
    return (
      <div className="foldOverContainer">
        <NavLink className="foldOver"  to="/FoldOverItem">About</NavLink><br/>
        <NavLink className="foldOver"  to="/FoldOverItem2">Links</NavLink> <br/>
    
        <NavLink className="foldOver"  to="/FoldOverItem4">Blog</NavLink><br/>
      </div>
    );
  }
}

export default Navigation;
