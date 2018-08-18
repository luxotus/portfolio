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
        <div className="row feature-section feature-countries">
          <div className="col-sm-6 image-section text-center">
            <img src="/images/sites/worldwide-stories/screens/countries_phone.png" alt="phone with screen shot" />
          </div>
          <div className="col-sm-6 text-section">
            <div className="text-center title-icon-section">
              <span className="icon-globe" />
              <h2>
                {'Countries'}
              </h2>
            </div>
            <p>
              {'So you probably have a favorite author in your country but do you have one in spain or france or russia? Didn\'t think so, hence why you should use our app. Explore the minds of authors worldwide all in one place.'}
            </p>
          </div>
        </div>
        <div className="row feature-section feature-stories">
          <div className="col-sm-6">
            <div className="text-section left-section">
              <div className="text-center title-icon-section">
                <span className="icon-book" />
                <h2>
                  {'Stories'}
                </h2>
              </div>
              <p>
                {'From Love at first sight to scary stories from the past, we have it all. Get lost in narratives of vibrant characters that could spark the interest of just about any reader. '}
              </p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="image-section right-section">
              <img src="/images/sites/worldwide-stories/screens/story_phone.png" alt="phone with screen shot" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
