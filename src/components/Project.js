import React, { Component } from 'react';

const sectionStyle= {
  backgroundColor:"oldlace"
}
const labelStyle= {
  fontSize:"2em",
  fontWeight:"bold"
}
const imgStyle= {
  backgroundColor:"oldlace",
  width:'20%',
    marginTop: "3em"
}

const linkStyle= {
  backgroundColor:"oldlace",

}



class Project extends Component {

  render() {
    return (
      <div className="Project">
      <section style={sectionStyle}>
       <a style={labelStyle} href={this.props.url}>{this.props.webSiteName}</a><br/>
       <a style={linkStyle} href={this.props.url} alt="James Medina JWM Porfolio">
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
