import React, { Component } from 'react';

var Yama = {
  'name':'Asteya',
  'meaning':'non-stealing',
  'blog': `Asteya is commitment to not stealing. Obviously taking the property of others without they’re permission is immoral. This Yama goes further to forbid the stealing of peoples they’re light, time, or enthusiasm.

Asteya calls on us to be considerate of others. When we talk to people, it is considerate to listen, and not make the conversation only about ourself. Focusing on our own need to be heard and ignoring the other person, will make them unhappy. Sometimes we say things just to hear the response we are looking for from others. The accomplishment is short lived, we get that attention we crave, but leave the other person dissatisfied. We should consider how others feel. If we are considerate of other peoples needs, they will give us attention and help in return. Therefore committing to the Yama of Asteya will open us to the gifts of love from others.`
}
class Yama3 extends Component {
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

export default Yama3;
