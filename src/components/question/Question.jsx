import React from 'react' ; 
import Answer from './answer/Answer';
import Sentence from './sentence/Sentence';

function Question({question}) {
  return (
    <div>Question

        <Sentence sentence ={question?.sentence}/> 
        <Answer />
    </div>
  )
}

export default Question