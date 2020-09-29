import React, { Component } from 'react';
import styles from './WordBox.module.scss'

import data from '../../data/words.json'

const wordData = data;
class WordBox extends Component {
    render() { 
        const wordColor = this.props.color;
        return ( 
            <div className={styles.wordBox}>
                <h1>
                    <a style={{color:wordColor}} href={`https://translate.google.com/?sl=en&tl=ar#view=home&op=translate&sl=en&tl=tr&text=${randomWord}`} target="_blank">{randomWord}</a>
                </h1>
            </div>
         );
    }
}
 
export default WordBox
