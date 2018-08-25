import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './index.css';
import BlogPage from '../other-pages/blog';
import ContactPage from '../other-pages/contact';
import SitesPage from '../other-pages/sites';
import TeaShop from '../sites/tea-shop';
import LuxotusBlog from '../sites/luxotus-blog';
import WorldwideStories from '../sites/worldwide-stories';

export default class MainRouter extends React.Component {
  render() {
    return (
      <div id="main-container">
        <Switch>
          <Route path="/blog" component={BlogPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/sites" component={SitesPage} />
          <Route path="/sites/tea-shop" component={TeaShop} />
          <Route path="/sites/luxotus-blog" component={LuxotusBlog} />
          <Route path="/sites/worldwide-stories" component={WorldwideStories} />
        </Switch>
      </div>
    );
  }
}
