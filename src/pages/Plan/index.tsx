import React from 'react';
import { Link } from 'react-router-dom';
import programs from '../../db';

import EditorInput from '../../components/EditorInput';

import { IPlanProps, IPlanState, IExercise } from './interfaces';

class Plan extends React.Component<IPlanProps> {
  state: IPlanState = {
    id: '',
    title: '',
    work: 0,
    pause: 0,
    roundes: 0,
    rest: 0,
    plan: []
  }

  constructor(props: IPlanProps) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  fetchPlan() {
    const { id } = this.props.match.params;
    return programs[id];
  }

  componentDidMount(): void {
    const { settings, plan, ...planProps } = this.fetchPlan();

    this.setState({
      ...planProps,
      ...settings,
      plan
    });
  }

  changeValue(e: React.ChangeEvent<HTMLInputElement>) {
    const propName = e.currentTarget.name;
    const propValue = e.currentTarget.value;
    this.setState({
      [propName]: propValue
    });
  }

  renderPlanRow(row: IExercise) {
    return (
      <li key={row.id} className="plan-list__item">
        {row.title}
      </li>
    )
  }

  renderPlanList() {
    const { plan } = this.state;
    return (
      <ul className="plan-list plan-page__plan-list">
        {plan.map(this.renderPlanRow)}
      </ul>
    );
  }

  render() {
    const { id, title, work, pause, rest, roundes } = this.state;
    return (
      <div className="plan-page">
        <h2 className="plan-page__title">
          {title}
        </h2>

        <div className="plan-editor plan-page__editor">
          <EditorInput 
            className="plan-editor__edit-title"
            type="text"
            name="title"
            value={title}
            label="Title:"
            onChange={this.changeValue}
          />

          <ul className="plan-editor__edit-settings">
            <li>
              <EditorInput 
                type="number"
                name="work"
                value={work}
                label="Work:"
                onChange={this.changeValue}
                step="5"
              />
            </li>
            <li>
              <EditorInput 
                type="number"
                name="pause"
                value={pause}
                label="Pause:"
                onChange={this.changeValue}
                step="5"
              />
            </li>
            <li>
              <EditorInput 
                type="number"
                name="roundes"
                value={roundes}
                label="Roundes:"
                onChange={this.changeValue}
                step="1"
              />
            </li>
            <li>
              <EditorInput 
                type="number"
                name="rest"
                value={rest}
                label="Rest:"
                onChange={this.changeValue}
                step="30"
              />
            </li>
          </ul>
        </div>
        {this.renderPlanList()}
      </div>
    );
  }
}

export default Plan;