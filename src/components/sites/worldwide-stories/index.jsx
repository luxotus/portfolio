import React from 'react';
import './index.css';

export default class WorldwideStories extends React.Component {
  render() {
    return (
      <div id="worldwide-stories-container">
        <div className="row header" style={{ backgroundImage: 'url("/images/sites/worldwide-stories/phone_notebook.JPG")' }}>
          <div className="col-sm-12 title-section">
            <div className="text-center">
              <h1>
                {'Worldwide Stories'}
              </h1>
              <p>
                {'A new app from your friends at Luxotus.'}
              </p>
            </div>
            <a href="/" className="arrow-down-section">
              <div />
            </a>
          </div>
        </div>
        <div className="row app-download-section">
          <div className="col-md-8 text-right">
            <h3>
              {'Download it FREE (for a limited time) for your Android'}
            </h3>
          </div>
          <a href="https://play.google.com/store/apps/details?id=com.luxotus.worldwidestories" className="col-md-4 play-icon-holder">
            <img src="/images/sites/worldwide-stories/play_icon.png" alt="google play icon" />
          </a>
        </div>
      </div>
    );
  }
}
