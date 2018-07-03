import React, { Component } from "react";
import Header from './components/Header';
import Wrapper from "./components/Wrapper";
import Card from './components/Card';
import Score from "./components/Score";
import data from "./data.json";
import './App.css';

//set this.state.data to the data.json array 
class App extends Component {
  state = {
    data,
    clicked: [],
    score: 0,
    topScore: 0
  };

//shuffle images 
shuffle = id => {
  let clicked = this.state.clicked; 
  if (clicked.includes(id)){
    this.setState({
      clicked: [],
      score: 0,
      topScore: this.setState.score,
      status: "You've Lost. Try Again!"
    });
    return;

  } else {
    clicked.push(id);
  }
  if(this.state.score >= this.state.topScore) {
    this.newTopScore();
  };

  this.setState({
    data,
    clicked,
    score: clicked.length,
    topScore: this.state.topScore,
    status: ""
  });

  for (let i =data.length - 1; i>0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
}
newTopScore = () => {
  this.setState((newState) => ({
    topScore: newState.score
  }))
}


render(){
  return (
    <div className="game">
    <Header />
    <Score 
      total={this.state.score}
      topScore={this.state.topScore}
      status={this.state.status}
    />

    <div className="grid">

      <Wrapper>
      {this.state.data.map(img => (
        <Card
          shuffle={this.shuffle}
          id={img.id}
          key={img.id}
          image={img.image}
        />
      ))}
      </Wrapper>
    </div>
  </div>
  );
  }
}
export default App;