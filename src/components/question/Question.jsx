import React from 'react' ; 
import Answer from './answer/Answer';
import Sentence from './sentence/Sentence';

function Question() {
  return (
    <div>Question

        <Sentence/> 
        <Answer />
    </div>
  )
}

export default Question