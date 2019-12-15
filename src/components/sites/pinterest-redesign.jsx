import React from 'react';
import { ReactSVG } from 'react-svg';
import StackGrid from 'react-stack-grid';

export default class PinterestRedesign extends React.Component {
  constructor(props) {
    super(props);

    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
  }

  getKey() {
    this.keyCount += 1;
    return this.keyCount;
  }

  shuffleList(a) {
    let j;
    let x;
    let i;
    const arr = a;

    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
    }

    return a;
  }

  randomData(numOfItems) {
    const images = [
      '/images/sites/pinterest-redesign/1.jpg',
      '/images/sites/pinterest-redesign/2.jpg',
      '/images/sites/pinterest-redesign/3.jpg',
      '/images/sites/pinterest-redesign/4.jpg',
      '/images/sites/pinterest-redesign/5.jpg',
      '/images/sites/pinterest-redesign/6.jpg',
      '/images/sites/pinterest-redesign/7.jpg',
      '/images/sites/pinterest-redesign/8.jpg',
      '/images/sites/pinterest-redesign/9.jpg',
      '/images/sites/pinterest-redesign/10.jpg',
      '/images/sites/pinterest-redesign/11.jpg',
      '/images/sites/pinterest-redesign/12.jpg',
      '/images/sites/pinterest-redesign/13.jpg',
    ];
    const titles = [
      'Cool title',
      'Lorem ipsum',
      'Commodo consequat',
      'Duis aute irure',
      'Sed ut perspiciatis',
      'beatae vitae dicta',
      'Quis autem vel eum',
      'quasi architecto',
      'ullam corporis',
      'iure reprehenderit',
      'cupidatat non proident',
      'fugiat nulla pariatur',
      'anim id est laborum',
    ];
    const siteLinks = [
      'github.com',
      'felixmanuel.com',
      'steam.com',
      'runners.com',
      'google.com',
      'coolsite.com',
      'logitech.com',
      'circle.com',
      'thatshow.com',
      'random.com',
      'chillhop.com',
      'espn.com',
      'houston.com',
    ];
    const details = [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.',
      'Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      'Et harum quidem rerum facilis est et expedita distinctio.',
      'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint.',
      'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias.',
      'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
      'Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.',
    ];
    const result = [];
    let shuffledImages = this.shuffleList(images);
    let imageIndex = 0;

    for (let index = 0; index < numOfItems; index++) {
      const item = {
        title: this.shuffleList(titles)[Math.floor(Math.random() * titles.length)],
        description: this.shuffleList(details)[Math.floor(Math.random() * details.length)],
        siteLink: this.shuffleList(siteLinks)[Math.floor(Math.random() * siteLinks.length)],
        likesCount: Math.floor(Math.random() * 900) + 100,
      };

      // Prefer the same image not to cluster when just randomly picked
      if (imageIndex < images.length) {
        item.imagePath = shuffledImages[imageIndex];
      } else {
        imageIndex = 0;
        shuffledImages = this.shuffleList(images);
        item.imagePath = shuffledImages[imageIndex];
      }

      imageIndex++;

      result.push(item);
    }

    return result;
  }

  alignGridOptions() {
    const itemLeft = document.querySelectorAll('.collection-site-wrapper .stack-grid .item')[0].getBoundingClientRect().left;
    const gridOpt = document.querySelector('.collection-site-wrapper .grid-options');

    if (gridOpt !== null) {
      gridOpt.style.paddingLeft = `${itemLeft}px`;
    }
  }

  render() {
    const numOfPins = 25;

    return (
      <div className="collection-site-wrapper">
        <header>
          <div className="logo">
            <span className="icon">
              <ReactSVG src="/svg/pinterest.svg" />
            </span>
          </div>
          <div className="search-bar">
            <span className="icon">
              <ReactSVG src="/svg/search.svg" />
            </span>
            <input type="text" name="search" placeholder="search" />
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              <span className="icon">
                <ReactSVG src="/svg/menu.svg" />
              </span>
            </button>
            <button type="button" className="btn">
              <span className="icon">
                <ReactSVG src="/svg/person.svg" />
              </span>
            </button>
            <button type="button" className="btn">
              <span className="icon">
                <ReactSVG src="/svg/message.svg" />
              </span>
              <div className="new-message-count">9+</div>
            </button>
          </div>
        </header>
        <div className="upper-wrapper">
          <div className="profile-wrapper">
            <div className="profile-image-wrapper">
              <img src="/images/sites/pinterest-redesign/14.jpg" alt="" />
            </div>
            <div className="details">
              <h2 className="name">Jane Doe</h2>
              <a href="https://felixmanuel.com/" className="site-link">https://felixmanuel.com</a>
              <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="stats">
                <div className="item">
                  <h3>2.3k</h3>
                  <h6>Pins</h6>
                </div>
                <div className="item">
                  <h3>481</h3>
                  <h6>likes</h6>
                </div>
                <div className="item">
                  <h3>11.7k</h3>
                  <h6>Followers</h6>
                </div>
                <div className="item">
                  <h3>233</h3>
                  <h6>Following</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="create-board-wrapper">
            <button type="button" className="btn create-board-btn">
              <span className="icon">
                <ReactSVG src="/svg/add.svg" />
              </span>
              Create a Board
            </button>
          </div>
        </div>
        <div className="grid-options">
          <button type="button" className="btn active">Pins</button>
          <button type="button" className="btn">Boards</button>
        </div>
        <StackGrid
          monitorImagesLoaded
          columnWidth={220}
          gutterHeight={20}
          className="stack-grid"
          onLayout={() => this.alignGridOptions()}
        >
          {this.randomData(numOfPins).map((item) => (
            <div className="item" key={`stack-item-${this.getKey()}`}>
              <div className="img-wrapper">
                <img src={item.imagePath} alt="" />
              </div>
              <div className="details-wrapper">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="sub-section">
                  <h6>{item.siteLink}</h6>
                  <div className="likes">
                    <span className="icon">
                      <ReactSVG src="/svg/star.svg" />
                    </span>
                    <h5>{item.likesCount}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </StackGrid>
      </div>
    );
  }
}
