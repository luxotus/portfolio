import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './index.css';
import BlogPage from '../other-pages/blog';
import ContactPage from '../other-pages/contact';
import SitesPage from '../other-pages/sites';
import TeaShop from '../sites/tea-shop';
import LuxotusBlog from '../sites/luxotus-blog';
import WorldwideStories from '../sites/worldwide-stories';
import App from '../app';
import Header from '../header';

export default class MainRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: '',
      menuBtnId: 'menu-btn-container',
    };
    this.updateMenuState = this.updateMenuState.bind(this);
  }

  updateMenuState(menuState) {
    this.setState({ isMenuOpen: menuState });
  }

  unfade(el) {
    const element = el;
    const maxVal = 1;
    const OpStep = 0.05;
    let op = parseFloat(window.getComputedStyle(element, null).getPropertyValue('opacity'));
    op = (op === 0) ? OpStep : op;
    element.style.display = 'block';
    window.scrollTo(0, 0);

    const timer = setInterval(() => {
      if (op >= maxVal) {
        clearInterval(timer);
        element.style.opacity = maxVal;
        element.style.filter = `alpha(opacity=${maxVal})`;
      } else {
        element.style.opacity = op;
        element.style.filter = `alpha(opacity=${op * 100})`;
        op += op * OpStep;
      }
    }, 10);
  }

  render() {
    return (
      <div id="main-container">
        <Header
          menuBtnId={this.state.menuBtnId}
          isMenuOpen={this.state.isMenuOpen}
          updateMenuState={this.updateMenuState}
        />
        <Switch>
          <Route exact path="/" render={({ match }) => <App match={match} unfade={this.unfade} {...this.props} />} />
          <Route path="/blog" render={({ match }) => <BlogPage match={match} unfade={this.unfade} {...this.props} />} />
          <Route path="/contact" render={({ match }) => <ContactPage match={match} unfade={this.unfade} {...this.props} />} />
          <Route exact path="/sites" render={({ match }) => <SitesPage match={match} unfade={this.unfade} {...this.props} />} />
          <Route path="/sites/tea-shop" render={({ match }) => <TeaShop match={match} unfade={this.unfade} {...this.props} />} />
          <Route path="/sites/luxotus-blog" render={({ match }) => <LuxotusBlog match={match} unfade={this.unfade} {...this.props} />} />
          <Route path="/sites/worldwide-stories" render={({ match }) => <WorldwideStories match={match} unfade={this.unfade} {...this.props} />} />
        </Switch>
      </div>
    );
  }
}
