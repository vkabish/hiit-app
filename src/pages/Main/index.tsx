import React from 'react';

import programs from '../../db';
import Programs from '../../components/Programs';

const Main = () => (
  <Programs programs={programs} />
);

export default Main;