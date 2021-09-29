import React, { Component } from 'react';

var Niyama = {
  'name': 'Santosha',
  'meaning': 'Contentment',
  'blog': `Santosha is the Niyama for contentment. Contentment means to be happy with the current state of your life. The current state of your life is beautiful. Your part of this wonderful gift that God gave us all. This should be enough for us to be happy. If our minds are perfectly at peace, we would be happy all the time, whether we were on vacation in Fiji, or sitting in a jail cell for 80 years. Everyday presents challenges to conquer and do better for ourselves and those around us.

Our contentment is constantly under attack. We have desires. These desires present the temptation for us to ignore our contentment. We don’t need what we desire to be happy. It’s important for us to to meditate and realize that our contentment is something that already exist within us. It does not depend on outside factors. When we neglect Santosha (contentment), we neglect our peace. `,
"name": "Santosha"
}
class Niyama2 extends Component {
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

export default Niyama2;
