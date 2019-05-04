import React from 'react';

import { ITimer } from './interfaces';

const Timer = ({ minutes, seconds }: ITimer) => (
  <div className="timer">
    {minutes}:{seconds}
  </div>
);

export default Timer;