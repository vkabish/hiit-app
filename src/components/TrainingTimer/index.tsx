import React from 'react';

import Button from './Button';
import Timer from './Timer';

import { ITrainingTimer, ITimer } from './interfaces';
import { any } from 'prop-types';

const ONE_SECOND = 1000;

class TrainingTimer extends React.Component<ITrainingTimer> {
  intervalTimerId: number;
  secondsRemaining: number;

  constructor(props: any) {
    super(props);
    
    
    this.intervalTimerId = 0;
    this.secondsRemaining = 0;

    // handlers
    this.startCountDown = this.startCountDown.bind(this);
    this.stopCountDown = this.stopCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }
  state:ITimer = {
    minutes: 1,
    seconds: '00',
  }

  tick() {
    let minutes = Math.floor(this.secondsRemaining / 60);
    let seconds = this.secondsRemaining - (minutes * 60);
      
    this.setState({ minutes, seconds });

    if (seconds < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
      })
    }

    if (minutes < 10) {
      this.setState({
        minutes: "0" + minutes,
      })
    }

    if (minutes === 0 && seconds === 0) {
      clearInterval(this.intervalTimerId);
    }

    this.secondsRemaining--;
  }

  startCountDown() {
    this.intervalTimerId = window.setInterval(this.tick, ONE_SECOND);
    let min = this.state.minutes;
    this.secondsRemaining = (min * 60) + Number(this.state.seconds);
  }

  stopCountDown() {
    clearInterval(this.intervalTimerId);
  }

  render() {
    return (
      <div>
        <Timer 
          minutes={this.state.minutes} 
          seconds={this.state.seconds} 
        />
        <Button onClick={this.startCountDown}>
          Start
        </Button>
        <Button onClick={this.stopCountDown}>
          Stop
        </Button>
      </div>
    );

  }

}

export default TrainingTimer;
