import React, { Component } from 'react'

export default class ChoiceCard extends Component {
    render() {
      const DEFAULT_IMG =
    "http://www.thewateringhole.co.uk/wp-content/uploads/2012/12/play.png";
      const won = this.props.title === this.props.previousWinner;
      let className;
      const hasPreviousGame =
        this.props.previousWinner === "Computer" || this.props.previousWinner === "You";
      if (hasPreviousGame) {
        className = won ? "winner" : "loser";
      }
    
      let prompt;
      if (won) {
        prompt = "Won";
        className = won ? "winner" : "loser";
      }else  if (this.props.previousWinner === "Tie") {
        prompt = "Tie";
      }else  if (this.props.previousWinner === null) {
        prompt = "Start";
      }else {
         prompt= "Lose"
       }

        return (
          <div className={`choice-card ml-3 ${this.props.borderColor} }`}>
            <h1>{this.props.title}</h1>
            <img src={this.props.imgURL} alt={this.props.title} />
            <h3>{prompt}</h3>
        </div>
        )
    }
}

