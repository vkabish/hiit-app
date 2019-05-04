export interface IProgramProps {
  match: any,
}

export interface IProgramState {
  id: string,
  title: string,
  description: string,
  time: number,
  kCal: number,
}

export interface ISettings {
  work: number,
  pause: number,
  roundes: number,
  rest: number,
  exercises: number
}