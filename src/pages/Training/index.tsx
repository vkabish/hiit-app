import React from 'react';
import programs from '../../db';

import { ITrainingProps, ITrainingState, ISettings } from './interfaces';

class Training extends React.Component<ITrainingProps> {
  state: ITrainingState = {
    id: '',
    title: '',
    settings: {},
    plan: [],
    counter: 15
  }

  fetchTraining() {
    const { id } = this.props.match.params;
    console.log(programs[id])
    return programs[id];
  }

  componentDidMount(): void {
    this.setState({
      ...this.fetchTraining()
    });
  }


  render() {
    const { title, plan, settings } = this.state;
    return (
      <div className="training-page">
        <div className="training-info training-page__info">
          <h2 className="training-info__title">{title}</h2>

          <div className="training-info__exercise">
            {/* {plan[0].title} */}
          </div>
        </div>
        {/* <TrainingTimer 
          time=
          pause=

        /> */}
      </div>
    );
  }
}

export default Training;