import React from 'react';

import ProgramItem from './ProgramItem';
import { IProgramsProps } from './interfaces';

const Programs = ({ programs }: IProgramsProps) => (
  <ul className="list-unstyle programs-list">
    {programs.map(props => <ProgramItem {...props} />)}
  </ul>
);

export default Programs;
