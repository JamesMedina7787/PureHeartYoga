import React, { Component } from 'react';

var Yama = {
  'name':'Satva',
  'meaning':'Honesty',
  'blog': `Satva is Honesty. Commitment to honesty gives us strength. When we lie to get away with something for the time being, it doesn’t benefit our growth over the long term. Deceiving others brings us away from others. It creates space between us. Commitment to the truth presents challenges for us to overcome. Energy builds with resistance. We build character with that energy.

It might seem like a hassle to commit to the truth at times. When we endure and conquer these inconveniences in our lives, in order to keep the truth sacred, we will become stronger people. This strength will help our lives blossom into full splendor.`
}
class Yama2 extends Component {
    render() {

      return (
        <div className="blogContainer">
        <strong className="name">{Yama.name}</strong><br/>
        <strong className="meaning">{Yama.meaning}</strong><br/>
          <p className="blog">{Yama.blog}
          </p>
        </div>
      );
    }
  }

export default Yama2;
