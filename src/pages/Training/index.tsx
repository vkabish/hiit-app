import React from 'react';
import programs from '../../db';

interface ITrainingProps {
  match: any,
}

interface ITrainingState {
  id: string,
  title: string,
  settings: object,
  exercises: object[],
  counter: number
}

interface ISettings {
  work: number,
  pause: number,
  roundes: number,
  rest: number,
  exercises: number
}

class Training extends React.Component<ITrainingProps> {
  state: ITrainingState = {
    id: '',
    title: '',
    settings: {},
    exercises: [],
    counter: 15
  }

  constructor(props: any) {
    super(props);

    this.startCounter = this.startCounter.bind(this);
  }

  fetchTraining() {
    const { id } = this.props.match.params;
    console.log(programs[id]);
    return programs[id];
  }

  // convertSeconds(sec: number): ReactText {
  //   let hrs = Math.floor(sec / 3600);
  //   let min = Math.floor((sec - (hrs * 3600)) / 60);
  //   let seconds = sec - (hrs * 3600) - (min * 60);
  //   seconds = Math.round(seconds * 100) / 100;
  //
  //   let result = (hrs < 10 ? "0" + hrs : hrs);
  //   result += ":" + (min < 10 ? "0" + min : min);
  //   result += ":" + (seconds < 10 ? "0" + seconds : seconds);
  //
  //   return result;
  // }

  // calculateTime(settings: ISettings): ReactText {
  //   const { work, pause, roundes, rest, exercises } = settings;
  //   const seconds: number = ((((work + pause) * exercises) + rest) * roundes) - rest;
  //
  //   return this.convertSeconds(seconds);
  // }

  componentDidMount(): void {
    this.setState({
      ...this.fetchTraining()
    });
  }

  countDown() {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  startCounter() {
    setTimeout(() => this.countDown(), 15000)
  }

  render() {
    const { title, counter } = this.state;
    return (
      <div className="training-page">
        <div className="training-info training-page__info">
          <h2 className="training-info__title">{title}</h2>

          {counter}

          <button onClick={() => this.startCounter()}>
            start
          </button>

        </div>
      </div>
    );
  }
}

export default Training;