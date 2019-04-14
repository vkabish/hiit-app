import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Main, Plan, Program, Schedule, Statistic, Training } from './pages';

import routes from './routes';

const AppRoutes = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
        </ul>
      </nav>
      <Route path={`/`} exact component={Main} />
      <Route path={`/${routes.program}/:id`} component={Program} />
      <Route path={`/${routes.training}/:id`} component={Training} />
      <Route path={`/${routes.statistic}/:id`} component={Statistic} />
      <Route path={`/${routes.schedule}/:id`} component={Schedule} />
      <Route path={`/${routes.plan}/:id`} component={Plan} />
    </div>
  </Router>
);

export default AppRoutes;