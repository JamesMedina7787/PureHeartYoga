import React, { Component } from 'react';

var Yama = {
  'name':'Aparigraha',
  'meaning':'Non Attachment',
  'blog': `Aparigraha is the yama of non attatchment. Greed is a powerful vice. It makes us want to have more than to make the best decicisions for ourselves and others. It makes our desires win over what we truly need to be happy. We lose in life when we are blinded by outcomes, and neglect the practice necessary to achieve our goals.
  We should commit to aparigraha in our regular yoga practice. How often do you doubt your worth when you see others doing asanas better than you can. How often do you question whether you will ever be a good enough yogi or yogini. This is greed doing its dirty work inside the infected mind. Yoga is about allowing our bodies to open themselves to the universe. It is not about forcing anything to happen in any sort of way. We need to respect our bodies. If we respect our boundaries, then we can move past them. It's an ancient yoga saying that unless we can recognize the finite, we cannot see the infinite. If we want to be strong, first we must recognize your weaknesses, or else how can we resolve those weaknesses and avoid the damage that they cause to our lives. Before you can hand stand, you have to realize what's wrong with your current approach. Then we can learn a better approach to achieve our goal faster.
Life is in a constant state of flux. The nature of life is to change, just like it is the nature of a fish to swim. Everything is borrowed from this life. Nothing of this experience is truly ours to keep. The more we hoard, the more baggage we burden ourselves with during what should be a peaceful and valuable life. Aparigraha is not taking anything too seriously. If we dont put all our eggs in one basket, our pain is divided between a rich variation of priorities. Nothing is worth our total infatuation. Being happy is realizing that there is soo much to be happy about. When only few things matter to us, we rob our lives of all it's splended variation of wonderful things to live for. 
  `
}
class Yama5 extends Component {
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

export default Yama5;
