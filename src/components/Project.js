import React, { Component } from 'react';

const sectionStyle= {
  backgroundColor:"white"
}
const labelStyle= {
  borderStyle: 'solid',
  borderWidth: '2em',
  margin: "2em",
  padding: "2em",
  fontSize:"1.5em",
  fontWeight:"bold",
  backgroundColor: "white",
  textDecorationLine: 'none',
  boxShadow:"inset 0px 1px 0px 0px #bbdaf7",
	background:"linear-gradient(to bottom, #79bbff 5%, #378de5 100%)",
	'backgroundColor':'pink',
	borderRadius:'20px',
	border:'1px solid #84bbf3',
	fontFamily:'Arial',
	textDecoration:'none',
	textShadow:'0px 1px 0px #528ecc'
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
