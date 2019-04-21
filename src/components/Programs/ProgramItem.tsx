import React from 'react';
import { Link } from 'react-router-dom';

import { IProgramItem } from './interfaces';

const ProgramItem = ({ id, title, description }: IProgramItem) => (
  <li className="program-item programs-list__item" key={id}>
    <h2 className="program-item__title">
      {title}
    </h2>
    <p className="program-item__description">
      {description}
    </p>
    <Link to={`/program/${id}`} className="program-item__link">
      To Program
    </Link>
  </li>
);

export default ProgramItem;