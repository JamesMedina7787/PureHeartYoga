import React, { Component } from 'react';


class Yoga extends Component {
    render() {
      console.log()
      return (
        <div  className="Yoga">
        <p>{this.props.message}
        </p>
        </div>
      );
    }
  }

export default Yoga;
