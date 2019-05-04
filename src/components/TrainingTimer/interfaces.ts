export interface IButton {
  onClick: () => void,
  children?: Element | string,
  className?: string,
  disabled?: boolean
}

export interface ITimer {
  minutes: string,
  seconds?: string
}


export interface ITrainingTimerState {
  minutes: string,
  seconds?: string
}

export interface ITrainingTimer {
  time: number,
  laps: number,
  onFinish: () => void,
  intervalHandler?: string,
  secondsRemaining?: string,
}

export interface IPomodoroState {
  time: number, 
  seconds: string
}