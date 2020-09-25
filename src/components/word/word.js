import React, { Component } from 'react';
import styles from './word.scss'

import data from '../../data/words.json'

const wordData = data;
const randomNumber = Math.floor(Math.random() * 6);
const randomWord = wordData[randomNumber].word;
class Word extends Component {
    render() { 
        return ( 
            <div>
                <h1>
                    <a href={`https://translate.google.com/?sl=en&tl=ar#view=home&op=translate&sl=en&tl=tr&text=${randomWord}`} target="_blank">{randomWord}</a>
                </h1>
            </div>
         );
    }
}
 
export default Word;
