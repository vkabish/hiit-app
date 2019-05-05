import React from 'react';
import programs from '../../db';
import TrainingTimer from '../../components/TrainingTimer';

import { ITrainingProps, ITrainingState, IProgram, ITraining, ISettings, IPlan } from './interfaces';

class Training extends React.Component<ITrainingProps> {

  constructor(props: any) {
    super(props);
    this.onFinish = this.onFinish.bind(this);
    this.getTraining = this.getTraining.bind(this);
  }

  state: ITrainingState = {
    id: '',
    title: '',
    training: [],
    counter: 0
  };

  getPlanTitle = (plan: IPlan[], index: number, exercises: number) => {
    return plan[index] && plan[index].title ||
    plan[index - exercises] && plan[index - exercises].title || 'NO TITLE';
  }

  accTraining = (plan: IPlan[], settings: ISettings) => 
    (acc: ITraining[], _: object, index: number):any => {
    const { exercises, work, pause, roundes, rest } = settings;
    const workoutTitle = this.getPlanTitle(plan, index, exercises);

    if (index && !(index % exercises)) {
      return [
        ...acc,
        { 
          title: 'Now you can rest',
          time: rest
        },
        {
          title: workoutTitle,
          time: work
        }
      ];
    }

    return [
      ...acc,
      {
        title: 'Preparing',
        time: pause
      },
      {
        title: workoutTitle,
        time: work
      }
    ];
  }

  getTraining(program: IProgram) {
    const { plan, settings } = program;
    const { exercises, roundes } = settings;
    const trainingLength = exercises * roundes;

    return Array.from({ length: trainingLength })
      .reduce(this.accTraining(plan, settings), []);
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
      training: this.getTraining(program)
    });
  }

  render() {
    const { title, training, counter } = this.state;
    const currentExercise = training[counter];
    const laps = training.length - counter;
    return (
      <div className="training-page">
        <h2 className="page-title training-page__title">
          {title}
        </h2>
        <div className="training-page__exercise">
          {currentExercise.title}
        </div>
        <TrainingTimer
          time={currentExercise.time || 0}
          laps={laps}
          onFinish={this.onFinish}
        />
      </div>
    );
  }
}

export default Training;