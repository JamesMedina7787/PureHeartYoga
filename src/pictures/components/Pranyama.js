import React, { Component } from 'react';

var Breath = {
  'intro': `Pranayama is the ancient Sanskrit term for breathing. The breath is more than just inhale and exhale. The breath is the basic most meaningful unit of life. The breath is the moment. The breath is simply the thing that we need the most in this life.

It's common to hear of the breath whenever we experience yoga under a qualified teacher. As a student, I never fully understood the importance. As an experienced teacher, I have come to a much more intimate understanding of just what we mean when we talk about yoga breathing.

Pranayama is the center of meditation. Desire complicates life. Stress developed over what we desire, and losing what we think that we need to be happy, creates complexities of the mind. Complexities take us away from our inherited ability to be happy in life. So when we meditate, we center our focus on the most basic of things to get by in life, our breath.

Meditation is about simplifying our mind. When we see things simply. Its easier to understand what we truly want from life. Focusing on the breath helps us free our mind from the complexities that our desires that complicate our consciousness.

Pranyama is about taking life one step at a time. Don’t let the fear of tomorrow spoil todays wonderful treasures.`
}
class Pranyama extends Component {
    render() {

      return (
        <div className="blogContainer">
          <p className="blog">{Breath.intro}
          </p>
        </div>
      );
    }
  }

export default Pranyama;
