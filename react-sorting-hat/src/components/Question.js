import React from 'react';
import '../App.css';

const Question = props => {
  return (
    <form className="questionContainer" onSubmit={props.formSubmit}>
      <h3>{props.question.question}</h3>
      <label htmlFor="">
        <input type="radio" name={`question${props.index}`} onChange={props.handleScore} value='1'/>{props.question.answer1}
      </label>
      <label htmlFor="">
        <input type="radio" name={`question${props.index}`} onChange={props.handleScore} value='2'/>{props.question.answer2}
      </label>
      <label htmlFor="">
        <input type="radio" name={`question${props.index}`} onChange={props.handleScore} value='3'/>{props.question.answer3}
      </label>
      <label htmlFor="">
        <input type="radio" name={`question${props.index}`} onChange={props.handleScore} value='4'/>{props.question.answer4}
      </label>
      <input type="submit"/>
    </form>
)
}

export default Question;