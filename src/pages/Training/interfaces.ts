export interface ITrainingProps {
  match: any,
}

export interface IPlan {
  id: string,
  title: string
}

export interface ITrainingState {
  id: string,
  title: string,
  settings: object,
  plan: IPlan[],
  counter: number
}

export interface ISettings {
  work: number,
  pause: number,
  roundes: number,
  rest: number,
  exercises: number
}