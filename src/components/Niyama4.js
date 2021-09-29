import React, { Component } from 'react';

var Niyama = {
  'name': 'Svadhyaya',
  'meaning': 'Self Study',
  'blog': `The self is the grand collection of life. Not only our individual selves, but other expressions of life within all that is breathing. The breath is the measuring unit of our existence. The inhale is inside, the exhale is outside. The self is both of these things. With Svadhyaya we are only concerned with the inner self. Svadhyaya is contemplation and meditation on our own individual being. It is tradition to chant the vibration of ohm or focus on a mudra. This focus blocks the outer sensations of the grander self, in order to totally immerse our consciousness on the inner self.

  It is important to self study during the practice of Yoga. Some of us ignore pain in an attempt to prove our abilities. Too much ego can lead to injury. During our meditation we attempt to familiarize ourselves with the breath. This means that we make our mental state simple. Simple is good. Desires tangle into complications, which in term take us away from peace. Breath to breath is just like moment to moment. In other words complicated becomes easy when approached one breath, or one moment at a time. When we forget everything else we focus on whats important. The sensations and the subtle factors of the movements which make our practice more therapeutic and beneficial. These benefits stretch into all different areas of our lives and the grander great self.
  `
}
class Niyama4 extends Component {
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

export default Niyama4;
