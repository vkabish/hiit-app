import React, {ReactText} from 'react';
import { Link } from 'react-router-dom';
import programs from '../../db';

import { convertSeconds, IConvertSeconds } from '../../helpers/time';
import { IProgramProps, IProgramState, ISettings } from './interfaces';

class Program extends React.Component<IProgramProps> {
  convertSeconds: IConvertSeconds;

  constructor(props: any) {
    super(props);
    this.convertSeconds = convertSeconds;
  }
  state: IProgramState = {
    id: '',
    title: '',
    description: '',
    time: 0,
    kCal: 0,
  };

  fetchProgram() {
    const { id } = this.props.match.params;
    return programs[id];
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
    const { id, title, description, time, kCal } = this.state;
    return (
      <div className="program-page">
        <div className="program-info program-page__info">
          <h2 className="page-title program-info__title">
            {title}
          </h2>
          <p>
            {description}
          </p>
          <div className="program-info__details">
            <span className="program-info__text">
              Time: {time}
            </span>
            {' '}
            <span className="program-info__text">
              kCal: {kCal}
            </span>
          </div>
        </div>

        <ul className="list-unstyle program-menu program-page__menu">
          <li className="program-menu__item">
            <Link className="program-menu__link" to={`/training/${id}`}>Training</Link>
          </li>
          <li className="program-menu__item">
            <Link className="program-menu__link" to={`/statistic/${id}`}>Statistic</Link>
          </li>
          <li className="program-menu__item">
            <Link className="program-menu__link" to={`/schedule/${id}`}>Schedule</Link>
          </li>
          <li className="program-menu__item">
            <Link className="program-menu__link" to={`/plan/${id}`}>Plan</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Program;