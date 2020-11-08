import React, { Component } from 'react';
import styles from './WordBox.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons'


import data from '../../data/words.json'

const wordData = data;
const randomNumber = Math.floor(Math.random() * wordData.length);
const randomWord = wordData[randomNumber].word;
class WordBox extends Component {
    constructor(props) {
        super(props);
        this.onRefresh = this.onRefresh.bind(this);
      }
    onRefresh(){
        window.location.reload();
    }
    render() { 
        document.body.style = `background-color : ${this.props.color}`
        const wordColor = this.props.color;
        return ( 
            <div className={styles.wordBox}>
                <h1>
                    <a style={{color:wordColor}} href={`https://translate.google.com/?hl=tr&ui=tob&sl=en&tl=tr&text=${randomWord}&op=translate`} target="_blank">{randomWord}</a>
                    <FontAwesomeIcon style={{color:wordColor}} icon={faRedoAlt} onClick={this.onRefresh}/>
                </h1>
            </div>
         );
    }
}
 
export default WordBox
