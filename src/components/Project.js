import React, { Component } from 'react';

const sectionStyle= {
  backgroundColor:"white"
}
const labelStyle= {

}
const imgStyle= {
  backgroundColor:"white",
  maxWidth: '50%',
    marginTop: "3em"
}

const linkStyle= {
  backgroundColor:"white",

}
const flipBack={
  'display':"flex",

}



class Project extends Component {

  render() {
    return (

      <div className="Project">


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
