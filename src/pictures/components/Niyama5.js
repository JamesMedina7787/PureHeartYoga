import React, { Component } from 'react';

var Niyama = {
  'name': 'Ishvara Pranidhana',
  'meaning': 'Surrender to the higher power',
  'blog': `The higher power is also the collective conciousness. No matter what your idea of God may be, we can all agree that we are part of something bigger. So Ishvara Pranidhana is also the ethic of selflessness.
  Excercise is challenge. Continual nonstop challenge is also torture though. There is a point where pain becomes descructive. Although Yoga is very safe, we can still stress out the joints and cause ourselves injury when we aren't safe. Being safe means taking rests. Ask any weightlifter. You can build power without recovery. Knowing when to let the ego go, and surrender for the greater good, is the difference between a great practice and a weak one.

Flexibility is not just a physical trait. It is also being flexible with our principles and beliefs as well. Sometimes we have to negotiate to fit into the perfect solution to our present circumstance.  
  `
}
class Niyama5 extends Component {
    render() {

      return (
        <div className="NiyamaContainer">
        <strong className="name">{Niyama.name}</strong><br/>
        <strong className="meaning">{Niyama.meaning}</strong><br/>
          <p className="Niyama">{Niyama.blog}
          </p>
        </div>
      );
    }
  }

export default Niyama5;
