import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './index.css';
import Lab from '../home-page/lab';
import Blog from '../home-page/blog';
import Sites from '../home-page/sites';
import OpenSourceProjects from '../home-page/open-source-projects';

export default class MainRouter extends React.Component {
  render() {
    return (
      <div id="main-container">
        <Switch>
          <Route path="/lab" render={({ match }) => <Lab match={match} {...this.props} />} />
          <Route path="/blog" render={({ match }) => <Blog match={match} {...this.props} />} />
          <Route path="/sites" render={({ match }) => <Sites match={match} {...this.props} />} />
          <Route path="/open-source" render={({ match }) => <OpenSourceProjects match={match} {...this.props} />} />
        </Switch>
      </div>
    );
  }
}
