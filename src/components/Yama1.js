import React, { Component } from 'react';

var Yama = {
  'name':'Ahimsa',
  'meaning':'Non Violence',
  'blog': `Ahimsa is a vow of responsibility toward the sanctum of innocence. We vow to not harm others or the self. Violence is considered any sort of ill will towards life.
  When we do Yoga we empower life. With any excercise, we work on better health, and ultimately better being. When we meditate, we let go of emotions and drives. In a mindstate of peace and tranquility we deepen our understanding of tolerance, respect and trust. NonViolence means a better quality of life from within what we control, and also the vibes we give out as to receive better quality treatment from characters me may need to depend on.
  When we exercise we should pay attention to what hurts. We should make consideration towards our self just as we should towards others. Being respectful to your knees, shoulders, and such leads to a more fulfilling and therapeutic result. It is violent to contort and pound on our bodies in order to fulfill some desire to do so. Being careful brings us to an elevated consciousness of what is truly good for us, and ultimately an impowered intuition.
  `
}
class Yama1 extends Component {
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

export default Yama1;
