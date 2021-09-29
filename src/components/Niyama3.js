import React, { Component } from 'react';

var Niyama = {
  'name': 'Tapas',
  'meaning': 'Inner Fire',
  'blog': `Nothing grows without rain. Storms may disrupt our environment and be momentarily uncomfortable. Our environment wouldn't change without such circumstances though. Accepting the stormy circumstances of our lives, strengthens our resolve to make it through the future.
     Someone who has good character is dedicated to the nijama of tapas. It means to weather the storms of life we must learn better to sustain the hardships of life. Ancient yoga practice included meditating in extreme cold and heat sometimes. Fasting is an example of sustaining discomfort to strengthen our resolve.
     Tapas is ancient sankrit translating to fire and heat. We feel this heat as we move through our yoga practice. When we hold poses and excercise in generally, we move through the pain of sustaining the postures. Getting through this pain builds strength and gives us power to move through all life.
  `
}
class Niyama3 extends Component {
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

export default Niyama3;
