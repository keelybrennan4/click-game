import React from 'react';
//import Header from './components/Header';
//import Game from './components/Game';
import Card from './components/Card';

//import other components here 
class App extends React.Component {
  constructor (props){
      super (props);
      this.shuffleImages = this.shuffleImages.bind(this);
      this.handleGuess = this.handleGuess.bind(this);
      this.handleReset = this.handleReset.bind(this);
      this.state = {
        score: 0,
        status: "Click on an image to earn a point",
        images: [
          "assets/images/chicago.png",
          "assets/images/dc.png",
          "assets/images/denver.png",
          "assets/images/hawaii.png",
          "assets/images/houston.png",
          "assets/images/la.png",
          "assets/images/mpls.png",
          "assets/images/nola.png",
          "assets/images/nyc.png",
          "assets/images/seattle.png",
          "assets/images/sf.png",
          "assets/images/vegas.png"
        ]
      };
      //this.gameOver = false;
    }
    //method to shuffle images after each click 
    shuffleImages(){
      this.setState(() => {
        const randomNum = Math.floor(Math.random() * this.state.images.length);
        const image = this.state.images[randomNum];
        alert(image);
        //};
      });
  
    };

    //method to check if image had already been selected 
    //check if an image was clicked more than one time. If yes, game over. If no, add one point.
    handleGuess(){
      console.log("handle guess")
    }

    //method to reset game if a single image is clicked more than once 
    handleReset(){
      console.log("handle guess")
    };

render(){
  return (
    <div className="grid">
      {this.state.images.map(img => {
        return (<div key={img}>
          <Card img={img} onClick={() => this.handleGuess(img)} />
    </div>);
    })
    }
    </div>
  )
}
















};


export default App;
