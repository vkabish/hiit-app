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
  counter: number,
  training: ITraining[]
}

export interface ISettings {
  work: number,
  pause: number,
  roundes: number,
  rest: number,
  exercises: number
}

export interface IProgram {
  settings: ISettings,
  plan: IPlan[]
}

export interface ITraining {
  title: string,
  time: number
}