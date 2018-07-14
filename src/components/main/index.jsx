import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './index.css';
import Lab from '../lab';
import Blog from '../blog';
import Sites from '../sites';
import OpenSourceProjects from '../open-source-projects';

export default class Main extends React.Component {
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
