import React, { Component } from 'react';

var Yama = {
  'name':'Brahmacharia',
  'meaning':'Restraint',
  'blog': `Brahmacharia is preventing ourselves from engaging in overstimulation. Traditionaly it is referred to as celibacy. It applies to all indulgences of life as well.
  There is nothing wrong with enjoying the sweet stuff in life. To be ruled by your pleasures though is self defeating in many ways. If you are in a relationship, you obviously shouldnt be looking for sexual gratification elsewhere. If you have had enough food, you shouldnt eat yourself into an unhealthy state. There is nothing wrong with an alcoholic beverage here and there, but alcoholism comes with a whole host of dangerous consequences.
  We can improve our commitment to brahmacharya on the mat. Mainly through meditation. If we can be happy in our own mind and skin, we can avoid unhealthy temptations. The physical practices of the asanas are good as well. When we direct our energy inward, as we do when we exercise our bodies, we shift the focus away from external pleasures. Brahmacharia leads us into a balanced, healthy, and empowered lifestyle. We should take control of our lives, and not allow our journey through life to spin out of control.`
}
class Yama4 extends Component {
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

export default Yama4;
