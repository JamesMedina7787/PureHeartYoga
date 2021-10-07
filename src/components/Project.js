import React, { Component } from 'react';

const sectionStyle= {
  backgroundColor:"white"
}
const labelStyle= {
  borderStyle: 'solid',
  margin: "2em",
  padding: "2em",
  fontSize:"1.5em",
  fontWeight:"bold"
}
const imgStyle= {
  backgroundColor:"white",
  maxWidth: '50%',
    marginTop: "3em"
}

const linkStyle= {
  backgroundColor:"white",

}



class Project extends Component {

  render() {
    return (

      <div className="Project">
      <a  href={this.props.url}><div style={labelStyle}>{this.props.webSiteName}</div></a>

      <section style={sectionStyle}>
       <br/>
       <a style={linkStyle} href={this.props.url} alt="Gia Gianina Yoga Instructor">
        <img className="Spins" style={imgStyle} src={this.props.image}/><br/>
         <br />
           <br/>
        </a>
       </section>
      </div>
    );
  }
}

export default Project;
