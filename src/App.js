import React, { Component } from 'react';
import logo from './logo.svg';
import './App.module.scss';
import WordBox from './components/WordBox/WordBox'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      bodyBgColor : '',
      wordBgColor : '',
      paletteCount : 6,
      randomPaletteNumber : 0
    }
  }

  colorPalettes(paletteNo){
    if(paletteNo == 0){
      this.state.bodyBgColor = `rgb(${Math.floor(Math.random() * (255 - 181)) + 181},${Math.floor(Math.random() * (255 - 181)) + 181},${Math.floor(Math.random() * (255 - 181)) + 181})`;
      this.state.wordBgColor = `rgb(${Math.floor(Math.random() * (91 - 31)) + 31},${Math.floor(Math.random() * (91 - 31)) + 31},${Math.floor(Math.random() * (91 - 31)) + 31})`;
    }else if(paletteNo == 1){
      this.state.bodyBgColor = `rgb(${Math.floor(Math.random() * (251 - 210)) + 210},${Math.floor(Math.random() * (251 - 210)) + 210},${Math.floor(Math.random() * (251 - 210)) + 210})`;
      this.state.wordBgColor = `rgb(${Math.floor(Math.random() * (122 - 10)) + 10},${Math.floor(Math.random() * (122 - 10)) + 10},${Math.floor(Math.random() * (122 - 10)) + 10})`;
    }else if(paletteNo == 2){
      this.state.bodyBgColor = `rgb(${Math.floor(Math.random() * (91 - 30)) + 30},${Math.floor(Math.random() * (91 - 30)) + 30},${Math.floor(Math.random() * (91 - 30)) + 30})`;
      this.state.wordBgColor = `rgb(${Math.floor(Math.random() * (255 - 181)) + 181},${Math.floor(Math.random() * (255 - 181)) + 181},${Math.floor(Math.random() * (255 - 181)) + 181})`;
    }else if(paletteNo == 3){
      this.state.bodyBgColor = `rgb(${Math.floor(Math.random() * (122 - 10)) + 10},${Math.floor(Math.random() * (122 - 10)) + 10},${Math.floor(Math.random() * (122 - 10)) + 10})`;
      this.state.wordBgColor = `rgb(${Math.floor(Math.random() * (251 - 210)) + 210},${Math.floor(Math.random() * (251 - 210)) + 210},${Math.floor(Math.random() * (251 - 210)) + 210})`;
    }else if(paletteNo == 4){
      this.state.bodyBgColor = `rgb(${Math.floor(Math.random() * (255 - 243)) + 243},${Math.floor(Math.random() * (255 - 243)) + 243},${Math.floor(Math.random() * (255 - 243)) + 243})`;
      this.state.wordBgColor = `rgb(${Math.floor(Math.random() * (117 - 16)) + 16},${Math.floor(Math.random() * (117 - 16)) + 16},${Math.floor(Math.random() * (117 - 16)) + 16})`;
    }else if(paletteNo == 5){
      this.state.bodyBgColor = `rgb(${Math.floor(Math.random() * (255 - 159)) + 159},${Math.floor(Math.random() * (255 - 159)) + 159},${Math.floor(Math.random() * (255 - 159)) + 159})`;
      this.state.wordBgColor = `rgb(${Math.floor(Math.random() * (88 - 45)) + 45},${Math.floor(Math.random() * (88 - 45)) + 45},${Math.floor(Math.random() * (88 - 45)) + 45})`;
    }
  }
  
  componentDidMount(){
      this.setState({
        randomPaletteNumber : Math.floor(Math.random() * this.state.paletteCount),
      })
      this.colorPalettes(this.state.randomPaletteNumber);
  }
  render() { 
    return ( 
      <div style={{backgroundColor:this.state.bodyBgColor}}>
        <WordBox color={this.state.wordBgColor}/>
      </div>
     );
  }
}
 
export default App;

