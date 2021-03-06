import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import satya  from "../pictures/satya.jpg"
import santosha from "../pictures/santosha.jpg"
import asteya from "../pictures/asteya.jpg"
import shaucha from "../pictures/shaucha.jpg"
import fire from "../pictures/fire.jpg"
import brama from "../pictures/brama.JPG"
import ahimsa from "../pictures/ahimsa.jpg"
import svad from "../pictures/svad.jpg"
import apar from "../pictures/apar.jpg"
import isva from "../pictures/isva.jpg"
import tapa from "../pictures/tapa.png"



import ana from "../pictures/anahata-Sans.png"
import apa from "../pictures/Apar-Sans.png"
import ast from "../pictures/asteya-Sans.png"
import bra from "../pictures/brahmacharya-Sans.jpg"
import ahi from "../pictures/san-Ahimsa.png"

import san from "../pictures/santosha-Sans.jpg"
import sat from "../pictures/satya-Sans.jpg"
import sau from "../pictures/saucha-Sans.jpg"
import sva from "../pictures/svadhyaya-Sans.jpeg"
import ish from "../pictures/ish.jpg"



const tagLabel = {
  "satya": "Satya Pure Heart",
"ahimsa":"Yama ahimsa Gia Yoga Pure",
"asteya": "Asteya Pure Heart Yoga",
"brama":"Yama brahmacharya meditation",
"apar":"Yama Aparigraha Surrender",
"santosha":"Santosha Niyama ",
"shaucha":"Saucha Pureness Heart Yoga",
"fire":"Tapas Yogini Gia",
"svad":"Svadhyaya Gianina Nijama",
"isva":"Ishvara Gia Yoga"

}



class Navigation2 extends Component {
  render() {
    console.log()
    return (
    <div id="tenLimbs">
      <div className="linksContainer">
       <section className="flipBack">
        <NavLink className="linkStyle"  to="/Yama1"><img className="linkStyle" src={ahi} />
        <div className="flipDiv"><img className="linkStyle" src={ahimsa} alt={tagLabel.ahimsa}/></div>
      </NavLink><br/>
       </section>
       <section className="flipBack">
        <NavLink className="linkStyle"  to="/Yama2"><img className="linkStyle" src={ast} />
        <div className="flipDiv"><img className="linkStyle" src={satya} alt={tagLabel.satya} /></div>
      </NavLink><br/>
       </section>
       <section className="flipBack">
        <NavLink className="linkStyle"  to="/Yama3"><img className="linkStyle" src={sat} />
        <div className="flipDiv"><img className="linkStyle" src={asteya} alt={tagLabel.asteya}/></div>
      </NavLink><br/>
       </section>
       <section className="flipBack">
        <NavLink className="linkStyle"  to="/Yama4"><img className="linkStyle" src={bra} />
        <div className="flipDiv"><img className="linkStyle" src={brama} alt={tagLabel.brama} /></div>
      </NavLink><br/>
       </section>
       <section className="flipBack">
               <NavLink className="linkStyle"  to="/Yama5"><img className="linkStyle" src={apa} />
               <div className="flipDiv"><img className="linkStyle" src={apar} alt={tagLabel.apar} /></div>
             </NavLink><br/>
       </section>
      </div>
        <div className="linksContainer2">
         <section className="flipBack" >
          <NavLink className="linkStyle"  to="/Niyama2"><img className="linkStyle" src={san} />
          <div className="flipDiv"><img className="linkStyle" src={santosha} alt={tagLabel.santosha} /></div></NavLink><br/>
         </section>
         <section className="flipBack">
          <NavLink className="linkStyle"  to="/Niyama1"><img className="linkStyle" src={sau} />
          <div className="flipDiv"><img className="linkStyle" src={shaucha} alt={tagLabel.shaucha}/></div></NavLink><br/>
         </section>
         <section className="flipBack">
          <NavLink className="linkStyle"  to="/Niyama3"><img className="linkStyle" src={tapa} />
          <div className="flipDiv"><img className="linkStyle" src={fire}alt={tagLabel.fire} /></div></NavLink><br/>
         </section>
         <section className="flipBack">
                <NavLink className="linkStyle"  to="/Niyama4"><img className="linkStyle" src={sva} />
                <div className="flipDiv"><img className="linkStyle" src={svad} alt={tagLabel.svad} /></div></NavLink><br/>
         </section>
         <section className="flipBack">
                 <NavLink className="linkStyle"  to="/Niyama5"><img className="linkStyle" src={ish} />
                 <div className="flipDiv"><img className="linkStyle" src={isva} alt={tagLabel.isva} /></div></NavLink><br/>
         </section>
      </div>
    </div>
    );
  }
}

export default Navigation2;
