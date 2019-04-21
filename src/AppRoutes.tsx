import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Main, Plan, Program, Schedule, Statistic, Training } from './pages';

import routes from './routes';

const AppRoutes = () => (
  <Router>
    <div className="app">
      <header className="app-header">
        <span className="app-header__title">
          HIIT App
        </span>
        <div className="app-header__actions">
          <button className="app-header__btn">
            icon user
          </button>
          <button className="app-header__btn">
            icon more
          </button>
        </div>
      </header>
      <div className="app-content">
        <Route path={`/`} exact component={Main} />
        <Route path={`/${routes.program}/:id`} component={Program} />
        <Route path={`/${routes.training}/:id`} component={Training} />
        <Route path={`/${routes.statistic}/:id`} component={Statistic} />
        <Route path={`/${routes.schedule}/:id`} component={Schedule} />
        <Route path={`/${routes.plan}/:id`} component={Plan} />
      </div>
    </div>
  </Router>
);

export default AppRoutes;