import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Lab from '../lab';
import Blog from '../blog';
import Sites from '../sites';
import OpenSourceProjects from '../open-source-projects';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="main-container">
        <Switch>
          <Route exact path="/lab" component={Lab} />
          <Route path="/blog" component={Blog} />
          <Route path="/sites" component={Sites} />
          <Route path="/open-source" component={OpenSourceProjects} />
        </Switch>
      </div>
    );
  }
}
