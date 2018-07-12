import React from 'react';
import './index.css';

export default class OpenSourceProjects extends React.Component {
  part() {
    return (
      <div id="osp-container">
        <header>
          <h1>
            <a href="/open-source">
              {'Open Source Projects'}
            </a>
          </h1>
        </header>
        <div id="osp-wrapper">
          <div className="item">
            <h3>
              {'Color Blindness Tool'}
            </h3>
            <p>
              {'Simple test to see how this section would look if it had content in this area. Which would be really great once I add it.'}
            </p>
            <a href="https://github.com/luxotus" className="icon-github" />
          </div>
          <div className="item">
            <h3>
              {'Color Contrast Tool'}
            </h3>
            <p>
              {'Simple test to see how this section would look if it had content in this area. Which would be really great once I add it.'}
            </p>
            <a href="https://github.com/luxotus" className="icon-github" />
          </div>
          <div className="item">
            <h3>
              {'VR Animation'}
            </h3>
            <p>
              {'Simple test to see how this section would look if it had content in this area. Which would be really great once I add it.'}
            </p>
            <a href="https://github.com/luxotus" className="icon-github" />
          </div>

          <div className="item">
            <h3>
              {'Data Driven UI'}
            </h3>
            <p>
              {'Simple test to see how this section would look if it had content in this area. Which would be really great once I add it.'}
            </p>
            <a href="https://github.com/luxotus" className="icon-github" />
          </div>
          <div className="item">
            <h3>
              {'Something Really Cool'}
            </h3>
            <p>
              {'Simple test to see how this section would look if it had content in this area. Which would be really great once I add it.'}
            </p>
            <a href="https://github.com/luxotus" className="icon-github" />
          </div>
          <div className="item">
            <h3>
              {'Flying Doughnuts'}
            </h3>
            <p>
              {'Simple test to see how this section would look if it had content in this area. Which would be really great once I add it.'}
            </p>
            <a href="https://github.com/luxotus" className="icon-github" />
          </div>
        </div>
      </div>
    );
  }

  whole() {
    return <div id="osp-screen" />;
  }

  displayElement(props) {
    const displaySize = props.displaySize;

    if (displaySize === 'part') {
      return this.part();
    }

    return this.whole();
  }

  render() {
    return (this.displayElement(this.props));
  }
}
