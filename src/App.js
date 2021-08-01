import React, {useState} from 'react';
import './App.scss';
import  {QUOTES} from './quotes-array'
import {COLORS} from './colors-array'

function App() {
    
  let randomNumber = []
  const generateRandomNumber = () => {
    randomNumber[0] = Math.floor(QUOTES.length * Math.random())
    randomNumber[1] = Math.floor(COLORS.length * Math.random())      
  }
  generateRandomNumber()
  
  const [quote, setQuote] = useState(QUOTES[randomNumber[0]].quote);
  const [author, setAuthor] = useState(QUOTES[randomNumber[0]].author);
  const [accentColor, setAccentColor] = useState(COLORS[randomNumber[1]])
  
  const randomQuote = () => {
    generateRandomNumber()
    setQuote(QUOTES[randomNumber[0]].quote)
    setAuthor(QUOTES[randomNumber[0]].author)
    setAccentColor(COLORS[randomNumber[1]])
  }

  const randomColor = () => {
    generateRandomNumber()
    setAccentColor(COLORS[randomNumber[1]])
  }

  return (
    <div className="App" id="background" style={{backgroundColor: accentColor, color:accentColor}}>
      
      <div className="App-div" id="quote-box">
        
        <p id="text">
          <i class="fas fa-quote-left"></i> {quote} <i class="fas fa-quote-right"></i>
        </p>
        
        <p className="Author" id="author">
          - {author}
        </p>
        
        <div id="actions">
        
          <a className="button" title="¡Twitea esta frase!" style={{backgroundColor: accentColor}} href={encodeURI(`http://www.twitter.com/intent/tweet?url=https://franco14lorenzo.github.io/random-quote-machine/&hashtags=quotes&text=" ${quote} " - ${author}`)} target="_blank" id="tweet-quote" rel="noreferrer">
            <i class="fab fa-twitter"></i>
          </a>
        
          <button className="button" title="¡Obtén una nueva frase!" id="new-quote" style={{backgroundColor: accentColor}} onClick={()=>randomQuote()}>
            <i class="fas fa-random"></i>
          </button>
          
          <button className="button" title="¡Cambia los colores!" id="change-colors" style={{backgroundColor: accentColor}} onClick={()=>randomColor()}>
            <i class="fas fa-paint-roller"></i>
          </button>

        </div>
      </div>
      <div class="footer">by <a href="https://github.com/franco14lorenzo" target="_blank" rel="noreferrer"><u>Franco Lorenzo</u></a></div>
    </div>
  );
}

export default App;
