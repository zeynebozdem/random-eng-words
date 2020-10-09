import React, { Component } from 'react';
import styles from './WordBox.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons'


import data from '../../data/words.json'

const wordData = data;
const randomNumber = Math.floor(Math.random() * wordData.length);
const randomWord = wordData[randomNumber].word;
class WordBox extends Component {
    render() { 
        const wordColor = this.props.color;
        return ( 
            <div className={styles.wordBox}>
                <h1>
                    <a style={{color:wordColor}} href={`https://translate.google.com/?sl=en&tl=ar#view=home&op=translate&sl=en&tl=tr&text=${randomWord}`} target="_blank">{randomWord}</a>
                    <FontAwesomeIcon style={{color:wordColor}} icon={faRedoAlt}/>
                </h1>
            </div>
         );
    }
}
 
export default WordBox
