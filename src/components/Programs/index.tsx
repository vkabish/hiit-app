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
  <div key={id}>
    <h2>{title}</h2>
    <p>{description}</p>
    <Link to={`/program/${id}`}>
      To Program
    </Link>
  </div>
);

const Programs = ({ programs }: IProgramsProps) => (
  <div>
    {programs.map(renderExercise)}
  </div>
);

export default Programs;
