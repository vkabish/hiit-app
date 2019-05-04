import React from 'react';
import programs from '../../db';
import TrainingTimer from '../../components/TrainingTimer';

import { ITrainingProps, ITrainingState, IProgram } from './interfaces';

class Training extends React.Component<ITrainingProps> {

  constructor(props: any) {
    super(props);
    this.onFinish = this.onFinish.bind(this);
    this.getTiming = this.getTiming.bind(this);
    this.getTexts = this.getTexts.bind(this);
  }

  state: ITrainingState = {
    id: '',
    title: '',
    training: [],
    titles: [],
    counter: 0
  };

  getTiming(program: IProgram) {
    const { settings } = program;
    const { exercises, work, pause, roundes, rest } = settings;
    const length = exercises * roundes;

    return Array.from({ length })
      .reduce((acc: number[], item: any, index: number) => {
        if (index && !(index % exercises)) {
          return [
            ...acc,
            rest,
            work
          ]
        }

        return [
          ...acc,
          pause,
          work
        ]
      }, [])
  }

  getTexts(program: IProgram) {
    const { plan, settings } = program;
    const { exercises, roundes } = settings;
    const length = exercises * roundes;

    return Array.from({ length })
      .reduce((acc: string[], _, index: number) => {
        if (index && !(index % exercises)) {
          return [
            ...acc,
            'REST',
            plan[index] && plan[index].title ||
            plan[index - exercises] && plan[index - exercises].title
          ];
        }

        return [
            ...acc,
            'pause',
            plan[index] && plan[index].title ||
            plan[index - exercises] && plan[index - exercises].title
          ];
      }, []);
  }

  onFinish() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  componentWillMount(): void {
    const { id } = this.props.match.params;
    const program = programs[id];
    this.setState({
      title: program.title,
      training: this.getTiming(program),
      titles: this.getTexts(program)
    });
  }

  render() {
    const { title, training, titles, counter } = this.state;
    const time = training[counter];
    const text = titles[counter];
    const laps = training.length - this.state.counter;
    return (
      <div className="training-page">
        <h2 className="page-title training-page__title">
          {title}
        </h2>
        <div className="training-page__exercise">
          {text}
        </div>
        <TrainingTimer
          time={time || 0}
          laps={laps}
          onFinish={this.onFinish}
        />
      </div>
    );
  }
}

export default Training;