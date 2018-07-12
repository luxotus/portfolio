import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Lab from '../lab';
import Blog from '../blog';
import Sites from '../sites';
import OpenSourceProjects from '../open-source-projects';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="main-container">
        <Switch>
          <Route
            path="/lab"
            render={props => <Lab {...props} displaySize="whole" />}
          />
          <Route path="/blog" component={Blog} />
          <Route path="/sites" component={Sites} />
          <Route path="/open-source" component={OpenSourceProjects} />
        </Switch>
      </div>
    );
  }
}
