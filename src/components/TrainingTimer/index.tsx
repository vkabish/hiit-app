import React from 'react';

import { convertSeconds, IConvertSeconds } from '../../helpers/time';

import Button from './Button';
import Timer from './Timer';

import { ITrainingTimer, ITrainingTimerState } from './interfaces';

const ONE_SECOND = 1000;

class TrainingTimer extends React.Component<ITrainingTimer> {
  time: number;
  laps: number;
  onFinish: () => void;
  intervalTimerId: number;
  secondsRemaining: number;
  convertSeconds: IConvertSeconds;

  constructor(props: any) {
    super(props);
    
    this.time = this.props.time;
    this.laps = this.props.laps;
    this.onFinish = this.props.onFinish;
    this.intervalTimerId = 0;
    this.secondsRemaining = 0;

    // handlers
    this.startCountDown = this.startCountDown.bind(this);
    this.stopCountDown = this.stopCountDown.bind(this);
    this.tick = this.tick.bind(this);
    this.setTime = this.setTime.bind(this);
    this.convertSeconds = convertSeconds;
  }

  state:ITrainingTimerState = {
    minutes: '00',
    seconds: '00',
  };

  componentWillMount(): void {
    this.setTime()
  }

  setTime() {
    const result = this.convertSeconds(this.props.time);
    const [, minutes, seconds] = result.split(':');

    this.setState({ minutes, seconds });
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

      if (this.props.laps) {
        this.props.onFinish();
        this.setTime();
        this.startCountDown();
      }
    }

    this.secondsRemaining--;
  }

  startCountDown() {
    this.intervalTimerId = window.setInterval(this.tick, ONE_SECOND);
    let min = Number(this.state.minutes);
    this.secondsRemaining = (min * 60) + Number(this.state.seconds);
  }

  stopCountDown() {
    clearInterval(this.intervalTimerId);
  }

  render() {
    return (
      <div className="training-timer">
        {!this.props.laps &&
          <div className="training-timer__finish-workout">
            FINISH WORKOUT
          </div>
        }
        {!!this.props.laps &&
          <React.Fragment>
            <Timer
              minutes={this.state.minutes}
              seconds={this.state.seconds}
            />
            <div className="trainig-timer__actions">
              <Button
                className="training-timer__btn training-timer__start"
                onClick={this.startCountDown}
              >
                Start
              </Button>
              <Button
                className="training-timer__btn training-timer__stop"
                onClick={this.stopCountDown}
              >
                Stop
              </Button>
            </div>
          </React.Fragment>
        }
      </div>
    );

  }

}

export default TrainingTimer;
