const animatedBlobs = (function() {
  function randomNum(max, min) {
    let result = Math.floor(Math.random() * (max - min)) + min;

    if (min < 0 && Math.random() >= 0.5) {
      result *= -1;
    }

    return result;
  }

  function frame(el, translateRange) {
    const blob = el;
    const step = randomNum(35, 25) / 100;
    const position = {
      x: parseFloat(blob.getAttribute('data-x')),
      y: parseFloat(blob.getAttribute('data-y')),
    };
    const direction = {
      x: blob.getAttribute('data-direction-x'),
      y: blob.getAttribute('data-direction-y'),
    };
    let rotation = parseFloat(blob.getAttribute('data-rotation'));

    if (rotation + step >= 360) {
      rotation = 0;
    } else {
      rotation += step;
    }

    blob.setAttribute('data-rotation', rotation);

    if (direction.x === '+' && position.x + step >= translateRange.max.x) {
      direction.x = '-';
      blob.setAttribute('data-direction-x', direction.x);
    } else if (direction.x === '-' && position.x - step <= translateRange.min.x) {
      direction.x = '+';
      blob.setAttribute('data-direction-x', direction.x);
    }

    if (direction.y === '+' && position.y + step >= translateRange.max.y) {
      direction.y = '-';
      blob.setAttribute('data-direction-y', direction.y);
    } else if (direction.y === '-' && position.y - step <= translateRange.min.y) {
      direction.y = '+';
      blob.setAttribute('data-direction-y', direction.y);
    }

    if (direction.x === '+') {
      position.x += step;
    } else if (direction.x === '-') {
      position.x -= step;
    }

    if (direction.y === '+') {
      position.y += step;
    } else if (direction.y === '-') {
      position.y -= step;
    }

    blob.setAttribute('data-x', position.x);
    blob.setAttribute('data-y', position.y);

    const transform = `translate(${position.x}%, ${position.y}%) rotate(${rotation}deg)`;
    blob.style.transform = transform;
  }

  function init() {
    const wrapper = document.querySelector('.blob-wrapper');
    const wrapperSize = {
      height: parseFloat(window.getComputedStyle(wrapper).height),
      width: parseFloat(window.getComputedStyle(wrapper).width),
    };
    const blobSize = {
      height: 125,
      width: 125,
    };
    const numberOfBlobs = 25;
    const padding = 10;
    const translateRange = {
      max: {
        x: wrapperSize.width / blobSize.width / 2 * 100 + (blobSize.width / 2) + padding,
        y: wrapperSize.height / blobSize.height / 2 * 100 + (blobSize.height / 2) + padding,
      },
      min: {
        x: -1 * (wrapperSize.width / blobSize.width / 2 * 100 + (blobSize.width / 2) + padding),
        y: -1 * (wrapperSize.height / blobSize.height / 2 * 100 + (blobSize.height / 2) + padding),
      },
    };

    for (let index = 0; index < numberOfBlobs; index++) {
      const blob = document.createElement('div');
      const radius = {
        tl: blobSize.height / 2,
        br: randomNum(blobSize.height, blobSize.height / 4),
      };
      const position = {
        x: randomNum(translateRange.max.x, translateRange.min.x),
        y: randomNum(translateRange.max.y, translateRange.min.y),
      };
      const rotation = randomNum(360, 1);

      blob.classList.add('blob');
      blob.setAttribute('data-index', index);
      blob.setAttribute('data-x', position.x);
      blob.setAttribute('data-y', position.y);
      blob.setAttribute('data-direction-x', (Math.random() > 0.5 ? '+' : '-'));
      blob.setAttribute('data-direction-y', (Math.random() > 0.5 ? '+' : '-'));
      blob.setAttribute('data-rotation', rotation);


      blob.style.borderRadius = `${radius.tl}px ${radius.br}px`;

      const transform = `translate(${position.x}%, ${position.y}%) rotate(${rotation}deg)`;
      blob.style.transform = transform;
      wrapper.append(blob);

      setInterval(() => { frame(blob, translateRange); }, 10);
    }
  }

  return {
    init,
  };
}());

export default animatedBlobs;
