import React from 'react';

export default class WorldwideStories extends React.Component {
  constructor(props) {
    super(props);

    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
  }

  getKey() {
    this.keyCount += 1;
    return this.keyCount;
  }

  buildMainImage() {
    return (
      <div className="row header" style={{ backgroundImage: 'url("/images/sites/worldwide-stories/phone_notebook.JPG")' }}>
        <div className="col-sm-12 title-section">
          <div className="text-center">
            <h1>
              Worldwide Stories
            </h1>
            <p>
              A new app from your friends at Luxotus.
            </p>
          </div>
          <a href="/" className="arrow-down-section">
            <div />
          </a>
        </div>
      </div>
    );
  }

  buildAppDownloadBanner() {
    return (
      <div className="row app-download-section">
        <div className="col-md-8 text-right">
          <h3>
            Download it FREE (for a limited time) for your Android
          </h3>
        </div>
        <a href="https://play.google.com/store/apps/details?id=com.luxotus.worldwidestories" className="col-md-4 play-icon-holder">
          <img src="/images/sites/worldwide-stories/play_icon.png" alt="google play icon" />
        </a>
      </div>
    );
  }

  buildFeatureImage(item) {
    return (
      <div className="col-sm-6">
        <div className={`image-section ${item.imagePlacement}-section ${(item.imagePlacement === 'left') ? 'text-center' : ''}`}>
          <img src={item.image} alt={item.alt} />
        </div>
      </div>
    );
  }

  buildFeatureSections() {
    const data = [
      {
        image: '/images/sites/worldwide-stories/screens/countries_phone.png',
        alt: 'phone with screen shot',
        title: 'Countries',
        description: 'So you probably have a favorite author in your country but do you have one in spain or france or russia? Didn\'t think so, hence why you should use our app. Explore the minds of authors worldwide all in one place.',
        icon: 'icon-globe',
      },
      {
        image: '/images/sites/worldwide-stories/screens/story_phone.png',
        alt: 'phone with screen shot',
        title: 'Stories',
        description: 'From Love at first sight to scary stories from the past, we have it all. Get lost in narratives of vibrant characters that could spark the interest of just about any reader.',
        icon: 'icon-book',
      },
      {
        image: '/images/sites/worldwide-stories/screens/bookmarks_phone.png',
        alt: 'phone with screen shot',
        title: 'Bookmarking',
        description: 'We know the stories can be long and you might not have the time to read it all in one sitting. So we created a feature that will allow you to save your position in the story and come back to it when ever you like. Making it much easier for you to finish stories on your own pace which is missing from 99% of story apps.',
        icon: 'icon-bookmark',
      },
      {
        image: '/images/sites/worldwide-stories/screens/share_phone.png',
        alt: 'phone with screen shot',
        title: 'Share',
        description: 'So you just finished your new favorite story and want to tell a friend about it. We provided you with a easy way to share stories using sms and your favorite social media platforms.',
        icon: 'icon-share',
      },
    ];

    data.forEach((value, index) => {
      const even = (index % 2 === 0);

      if (even) {
        data[index].imagePlacement = 'left';
      } else {
        data[index].imagePlacement = 'right';
      }
    });

    const features = data.map((item) => (
      <div className={`row feature-section feature-${item.title.toLowerCase().trim()}`} key={this.getKey()}>
        {(item.imagePlacement === 'left') ? this.buildFeatureImage(item) : '' }
        <div className="col-sm-6">
          <div className={`text-section ${(item.imagePlacement === 'left' ? 'right' : 'left')}-section`}>
            <div className="text-center title-icon-section">
              <span className={item.icon} />
              <h2>
                {item.title}
              </h2>
            </div>
            <p>
              {item.description}
            </p>
          </div>
        </div>
        {(item.imagePlacement === 'right') ? this.buildFeatureImage(item) : '' }
      </div>
    ));

    return features;
  }

  buildNewsLetterPanel() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <p className="newsletter-message text-center">
            Get the latest news from Luxotus delivered straight to your inbox.
            Join our mailing list today.
          </p>
          <form action="#" id="newsletter">
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group left">
                  <input type="text" className="form-control" id="first-name" name="first-name" placeholder="First Name" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group right">
                  <input type="text" className="form-control" id="last-name" name="last-name" placeholder="Last Name" />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <input type="email" className="form-control" id="email" name="email" placeholder="Email Address" required />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-danger">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    );
  }

  buildNewsLetterSection() {
    return (
      <div className="row newsletter-section" style={{ backgroundImage: 'url("/images/sites/worldwide-stories/doodles.png")' }}>
        <div className="tint">
          <div className="col-sm-6 middle-section text-center">
            <p className="download-message">
              Read stories from all of the world. Worldwide stories is the new app for android
              that helps you explore fascinating stories all in one place.
            </p>
            <a href="https://play.google.com/store/apps/details?id=com.luxotus.worldwidestories">
              <img src="/images/sites/worldwide-stories/play_icon.png" alt="google play icon" />
            </a>
            {this.buildNewsLetterPanel()}
          </div>
        </div>
      </div>
    );
  }

  buildFooter() {
    return (
      <div className="row footer">
        <div className="copyright-holder">
          <p>
            © 2019 Luxotus
          </p>
        </div>
        <div className="contact-holder">
          <a href="mailto:example@email.com">
            Contact
          </a>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id="worldwide-stories-container">
        {this.buildMainImage()}
        {this.buildAppDownloadBanner()}
        {this.buildFeatureSections()}
        {this.buildNewsLetterSection()}
        {this.buildFooter()}
      </div>
    );
  }
}