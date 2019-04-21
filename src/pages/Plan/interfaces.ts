export interface IPlanProps {
  match: any,
}

export interface IExercise {
  id: string,
  title: string
}

export interface IPlanState {
  id: string,
  title: string,
  work: number,
  pause: number,
  roundes: number,
  rest: number,
  plan: IExercise[]
}