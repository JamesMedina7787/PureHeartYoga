import React, { Component } from 'react';



class ProjectLabel extends Component {

  render() {
    return (

      <div className="ProjectLabel">
      <a  href={this.props.url}><div className='spinsForward' >{this.props.webSiteName}</div></a>
        <a  href={this.props.url}><div className='backSpin'>{this.props.webSiteName}</div></a>
        <br />
</div>

    );
  }
}

export default ProjectLabel;
