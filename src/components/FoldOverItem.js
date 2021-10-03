import React, { Component } from 'react';

var Career = {
  'intro': `I've always been fascinated with the art of body and movement that’s motivated me, in one shape or form, to be active my entire life. When I took my first yoga class, I realized an immediate connection. After training 5 to 6 days a week in many styles of yoga (Hatha, Ashtanga,etc.), my love for yoga was solidified when I decided I wanted to teach. Educated by the best yoga teachers in NYC, I am certified in Vinyasa Flow Yoga which, short, means the flow of postures linked by the breath. I have worked with Yogis of all levels throughout, NYC, Westchester County, Long Island NY and now beautiful Upstate NY. I have an immense appreciation for yoga and sharing it is my passion. So whether you want to begin or continue, elevate your fitness level, both mind and body, by incorporating yoga in your daily routine.  It's always an amazing time, come flow with Gia and we'll journey together.  🙏🏻❤️
`,
'name': 'Gia',
'meaning':'Yoga Instructor'
}
class FoldOverItem extends Component {
    render() {

      return (
        <div className="blogContainer">
        <strong className="name">{Career.name}</strong><br/>
        <strong className="meaning">{Career.meaning}</strong><br/>
          <p className="blog">{Career.intro}
          </p>
        </div>
      );
    }
  }

export default FoldOverItem;
