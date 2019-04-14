import React from 'react';

import programs from '../../db';
import Programs from '../../components/Programs';

const Main = () => (
  <div>
    <h1>Main Page</h1>

    <Programs programs={programs} />
  </div>
);

export default Main;