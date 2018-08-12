import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './index.css';
import LabPage from '../other-pages/lab';
import BlogPage from '../other-pages/blog';
import ContactPage from '../other-pages/contact';
import SitesPage from '../other-pages/sites';
import OpenSourcePage from '../other-pages/open-source';
import TeaShop from '../sites/tea-shop';
import OnlineStore from '../sites/online-store';
import SoftwareProduct from '../sites/software-product';

export default class MainRouter extends React.Component {
  render() {
    return (
      <div id="main-container">
        <Switch>
          <Route path="/lab" render={({ match }) => <LabPage match={match} {...this.props} />} />
          <Route path="/blog" render={({ match }) => <BlogPage match={match} {...this.props} />} />
          <Route path="/contact" render={({ match }) => <ContactPage match={match} {...this.props} />} />
          <Route path="/open-source" render={({ match }) => <OpenSourcePage match={match} {...this.props} />} />
          <Route path="/sites" exact render={({ match }) => <SitesPage match={match} {...this.props} />} />
          <Route path="/sites/tea-shop" component={TeaShop} />
          <Route path="/sites/online-store" component={OnlineStore} />
          <Route path="/sites/software-product" component={SoftwareProduct} />
        </Switch>
      </div>
    );
  }
}
