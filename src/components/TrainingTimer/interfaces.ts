export interface IButton {
  onClick: () => void,
  children?: Element | string,
  disabled?: boolean
}

export interface ITimer {
  minutes: number,
  seconds?: string 
}

export interface ITrainingTimer {
  intervalHandler: string,
  secondsRemaining: string,
}

export interface IPomodoroState {
  time: number, 
  seconds: string
}