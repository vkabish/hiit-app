import React, {ReactText} from 'react';
import { Link } from 'react-router-dom';
import programs from '../../db';

interface IProgramProps {
  match: any,
}

interface IProgramState {
  id: string,
  title: string,
  time: number,
  kCal: number,
}

interface ISettings {
  work: number,
  pause: number,
  roundes: number,
  rest: number,
  exercises: number
}

class Program extends React.Component<IProgramProps> {
  state: IProgramState = {
    id: '',
    title: '',
    time: 0,
    kCal: 0,
  }

  fetchProgram() {
    const { id } = this.props.match.params;
    return programs[id];
  }

  convertSeconds(sec: number): ReactText {
    let hrs = Math.floor(sec / 3600);
    let min = Math.floor((sec - (hrs * 3600)) / 60);
    let seconds = sec - (hrs * 3600) - (min * 60);
    seconds = Math.round(seconds * 100) / 100;

    let result = (hrs < 10 ? "0" + hrs : hrs);
    result += ":" + (min < 10 ? "0" + min : min);
    result += ":" + (seconds < 10 ? "0" + seconds : seconds);

    return result;
  }

  calculateTime(settings: ISettings): ReactText {
    const { work, pause, roundes, rest, exercises } = settings;
    const seconds: number = ((((work + pause) * exercises) + rest) * roundes) - rest;

    return this.convertSeconds(seconds);
  }

  calculateCalories(): number {
    return 100;
  }

  componentDidMount(): void {
    const { settings, ...programProps } = this.fetchProgram();

    this.setState({
      ...programProps,
      time: this.calculateTime(settings),
      kCal: this.calculateCalories()
    });
  }

  render() {
    const { id, title, time, kCal } = this.state;
    return (
      <div className="program-page">
        <div className="program-info program-page__info">
          <h2 className="program-info__title">{title}</h2>
          <div className="program-info__details">
            <span className="program-info__text">
              Time: {time}
            </span>
            <span className="program-info__text">
              kCal: {kCal}
            </span>
          </div>
        </div>

        <ul className="program-menu program-page__menu">
          <li className="program-menu__item"><Link to={`/training/${id}`}>Training</Link></li>
          <li className="program-menu__item"><Link to={`/statistic/${id}`}>Statistic</Link></li>
          <li className="program-menu__item"><Link to={`/schedule/${id}`}>Schedule</Link></li>
          <li className="program-menu__item"><Link to={`/plan/${id}`}>Plan</Link></li>
        </ul>
      </div>
    );
  }
}

export default Program;