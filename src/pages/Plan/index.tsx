import React from 'react';
import { Link } from 'react-router-dom';
import programs from '../../db';

interface IPlanProps {
  match: any,
}

interface IExercise {
  id: string,
  title: string
}

interface IPlanState {
  id: string,
  title: string,
  work: number,
  pause: number,
  roundes: number,
  rest: number,
  plan: IExercise[]
}

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
      <li key={row.id}>
        {row.title}
      </li>
    )
  }

  renderPlanList() {
    const { plan } = this.state;
    return (
      <ul>
        {plan.map(this.renderPlanRow)}
      </ul>
    );
  }


  render() {
    const { id, title, work, pause, rest, roundes } = this.state;
    return (
      <div className="plan-page">
        <h2>
          <Link to={`/program/${id}`}>Back to Program</Link>{' '}
          {title}
        </h2>

        <p>
          <label>
            Title:
          </label>
          <input type="text" name="title" value={title} onChange={this.changeValue}/>
        </p>

        <div>
          <ul>
            <li>
              Work:
              <input type="number" step="5" name="work" value={work} onChange={this.changeValue} />
            </li>
            <li>
              Pause:
              <input type="number" step="5" name="pause" value={pause} onChange={this.changeValue} />
            </li>
            <li>
              Roundes:
              <input type="number" step="1" name="roundes" value={roundes} onChange={this.changeValue} />
            </li>
            <li>
              Rest:
              <input type="number" step="30" name="rest" value={rest} onChange={this.changeValue} />
            </li>
          </ul>

          <button>
            Save
          </button>
        </div>

        {this.renderPlanList()}
      </div>
    );
  }
}

export default Plan;