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

  unfade(el, milSec) {
    const element = el;
    const maxVal = 1;
    const OpStep = 0.1;
    let op = parseFloat(window.getComputedStyle(element, null).getPropertyValue('opacity'));
    op = (op === 0) ? OpStep : op;
    element.style.display = 'block';
    this.forceUpdate();

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
    }, milSec);
  }

  updateMenuState(menuState) {
    this.setState({ isMenuOpen: menuState });
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
          <Route exact path="/" component={App} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/contact" component={ContactPage} />
          <Route exact path="/sites" component={SitesPage} />
          <Route path="/sites/tea-shop" component={TeaShop} />
          <Route path="/sites/luxotus-blog" component={LuxotusBlog} />
          <Route path="/sites/worldwide-stories" component={WorldwideStories} />
        </Switch>
      </div>
    );
  }
}
