import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';

const quizArr = [
  {
    'question': 'Which of the following would you most hate people to call you?',
    'answer1': 'Cowardly',
    'answer2': 'Ignorant',
    'answer3': 'Selfish',
    'answer4': 'Ordinary'
  },
  {
    'question': "Your friend has a problem - they're being picked on! What do you do?",
    'answer1': 'Rush in without thinking and defend them!',
    'answer2': 'Quickly formulate a brilliant plan to help them.',
    'answer3': "Run and get a teacher - they'll be able to help more than you.",
    'answer4': 'Consider carefully...what do you get out of this?'
  },
  {
    'question': 'You see a wallet on the floor. You check for any form of identity, but there is none. What do you do?',
    'answer1': 'Keep it with you until you find someone who lost their wallet.',
    'answer2': 'Take it to a teacher or authority figure and let them handle it.',
    'answer3': 'Ask around to see if anyone knows a person who recently lost their wallet.',
    'answer4': 'Leave it there, it\'s none of my business, and I could get in trouble.'
  },
  {
    'question': 'What would your family say is your worst trait?',
    'answer1': "Reckless - you don't think before you act.",
    'answer2': 'A bit of a know-it-all.',
    'answer3': "You're too nice for your own good.",
    'answer4': 'Worst trait? Really? You have no bad traits.'
  },
  {
    'question': 'There is a locked door in front of you. What do you do?',
    'answer1': 'You enter and see the contents. Maybe this is a hidden passageway.',
    'answer2': 'You use "Alohomora" and explore, being the curious person you are.',
    'answer3': "You walk away, since you know it's locked for a reason.",
    'answer4': 'You sneak in, just to see if anything in the room can help you in your path to success.'
  },
  {
    'question': 'If you could have any superpower, which would you have?',
    'answer1': 'Super strength or invincibility: all the better for adventuring!',
    'answer2': "The power of foresight: so you know what's coming.",
    'answer3': 'Invisibility.',
    'answer4': 'Mind control: then everyone will do exactly what you say!'
  }
]
class App extends Component {
  constructor() {
    super();
    this.state = {
      quiz: quizArr,
      score: '',

    }
  }
  handleScore = e => {
    let addedScore = e.target.value;
    this.setState(prevState => {
      return {score: prevState.score + addedScore};
    })
  }
  formSubmit = e => {
    e.preventDefault();
    console.log(e.target.elements)
  }
  render() {
    console.log(this.state.score);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.quiz.map((question,i) => 
          <Question question={question} index={i} key={i} handleScore={this.handleScore} formSubmit={this.formSubmit}/>)}
      </div>
    );
  }
}

export default App;
