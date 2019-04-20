import React from 'react';
import { Link } from 'react-router-dom';

interface IProgramItem {
  id: string,
  title: string,
  description: string
}

interface IProgramsProps {
  programs: IProgramItem[]
}

const renderExercise = ({ id, title, description }: IProgramItem) => (
  <div className="program-item programs-list__item" key={id}>
    <h2 className="program-item__title">
      {title}
    </h2>
    <p className="program-item__description">
      {description}
    </p>
    <Link to={`/program/${id}`} className="program-item__link">
      To Program
    </Link>
  </div>
);

const Programs = ({ programs }: IProgramsProps) => (
  <div className="programs-list">
    {programs.map(renderExercise)}
  </div>
);

export default Programs;
