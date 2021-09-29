import React, { Component } from 'react';

var Niyama = {
  'name': 'Saucha',
  'meaning': 'Pureness',
  'blog': `Shaucha means Pureness. Pureness is basically good vibes void of negativity. When we practice shaucha, we filter out all forms of corruption upon our well being. Be careful of the things you put into your body and the types of influences you allow to affect your mental being. Drugs, junkfood, and unsanitary living conditions affect our health. Shaucha encourages us to be consious of how we treat our bodies.
We also cleanse our beings with meditation. The more garbled garbage we expose our mind to, the more poorly we project ourselves into this world. Basically what I am saying is,"garbage in, garbage out". If you want your experience in this world to be pleasant, gaurd your mind from inpleasant things. This way we think clearer and have a purer view of what our wants should be, and what we should do to aquire what we want.
An optimum quality of life is aquired through regular commitment to Shaucha. Good practice of shaucha would be a good diet, good discipline, a better choice of the company we keep, and a consiencious effort to be more loving and positive.`
}
class Niyama1 extends Component {
    render() {

      return (
        <div className="NiyamaContainer">
        <strong className="name">{Niyama.name}</strong><br/>
        <strong className="meaning">{Niyama.meaning}</strong>
          <p className="Niyama">{Niyama.blog}>
          </p>
        </div>
      );
    }
  }

export default Niyama1;
