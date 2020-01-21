const animatedBlobs = (function() {
  function randomNum(max, min) {
    let result = Math.floor(Math.random() * (max - min)) + min;

    if (min < 0 && Math.random() >= 0.5) {
      result *= -1;
    }

    return result;
  }

  function calcPercentageOfCoordinate(distance, blobSize) {
    return {
      x: (distance.x / blobSize.width * 100),
      y: (distance.y / blobSize.height * 100),
    };
  }

  function between(x, min, max) {
    return x >= min && x <= max;
  }

  function randomLocation(mc, translateRange, blob) {
    const mouseFromCenter = mc;

    mouseFromCenter.x = randomNum(translateRange.max.x, translateRange.min.x);
    mouseFromCenter.y = randomNum(translateRange.max.y, translateRange.min.y);

    blob.setAttribute('mouseFromCenterX', mouseFromCenter.x);
    blob.setAttribute('mouseFromCenterY', mouseFromCenter.y);
  }

  function blobsToMouse(el, blobSize, translateRange, isLastEl) {
    const blob = el;
    let step = randomNum(35, 25) / 100;
    const position = {
      x: parseFloat(blob.getAttribute('data-x')),
      y: parseFloat(blob.getAttribute('data-y')),
    };
    const direction = {
      x: blob.getAttribute('data-direction-x'),
      y: blob.getAttribute('data-direction-y'),
    };
    let mouseFromCenter = {
      x: parseFloat(blob.getAttribute('mouseFromCenterX')),
      y: parseFloat(blob.getAttribute('mouseFromCenterY')),
    };
    const isMouseInside = (blob.parentElement.getAttribute('data-inside') === '1');
    const scatter = (blob.parentElement.getAttribute('data-scatter') === '1');

    if (mouseFromCenter.x === 0 && mouseFromCenter.y === 0) {
      randomLocation(mouseFromCenter, translateRange, blob);
    }

    let targetLocation = calcPercentageOfCoordinate(mouseFromCenter, blobSize);
    let rotation = parseFloat(blob.getAttribute('data-rotation'));

    if (rotation + step >= 360) {
      rotation = 0;
    } else {
      rotation += step;
    }

    if (isMouseInside) {
      step *= 2;
    } else if (scatter) {
      randomLocation(mouseFromCenter, translateRange, blob);

      mouseFromCenter = {
        x: parseFloat(blob.getAttribute('mouseFromCenterX')),
        y: parseFloat(blob.getAttribute('mouseFromCenterY')),
      };
      targetLocation = calcPercentageOfCoordinate(mouseFromCenter, blobSize);

      step *= 5;

      if (isLastEl) {
        blob.parentElement.setAttribute('data-scatter', 0);
      }
    }

    blob.setAttribute('data-rotation', rotation);

    if (direction.x === '+' && position.x + step >= targetLocation.x) {
      direction.x = '-';
      blob.setAttribute('data-direction-x', direction.x);
    } else if (direction.x === '-' && position.x - step <= targetLocation.x) {
      direction.x = '+';
      blob.setAttribute('data-direction-x', direction.x);
    }

    if (direction.y === '+' && position.y + step >= targetLocation.y) {
      direction.y = '-';
      blob.setAttribute('data-direction-y', direction.y);
    } else if (direction.y === '-' && position.y - step <= targetLocation.y) {
      direction.y = '+';
      blob.setAttribute('data-direction-y', direction.y);
    }

    const tolerance = 1;

    if (!between(position.x, targetLocation.x - tolerance, targetLocation.x + tolerance)) {
      if (direction.x === '+') {
        position.x += step;
      } else if (direction.x === '-') {
        position.x -= step;
      }

      blob.setAttribute('data-x', position.x);
    } else {
      randomLocation(mouseFromCenter, translateRange, blob);
    }

    if (!between(position.y, targetLocation.y - tolerance, targetLocation.y + tolerance)) {
      if (direction.y === '+') {
        position.y += step;
      } else if (direction.y === '-') {
        position.y -= step;
      }

      blob.setAttribute('data-y', position.y);
    } else {
      randomLocation(mouseFromCenter, translateRange, blob);
    }

    const transform = `translate(${position.x}%, ${position.y}%) rotate(${rotation}deg)`;
    blob.style.transform = transform;
  }

  function followMouse(translateRange) {
    const wrapper = document.querySelector('.blob-wrapper');
    const wrapperPosition = wrapper.getBoundingClientRect();
    const wrapperCenter = {
      x: (wrapperPosition.x + (parseFloat(window.getComputedStyle(wrapper).width) / 2)),
      y: (wrapperPosition.y + (parseFloat(window.getComputedStyle(wrapper).height) / 2)),
    };

    const blobs = wrapper.querySelectorAll('.blob');
    let mouseFromCenter = {
      x: 0,
      y: 0,
    };

    blobs.forEach((blob, index) => {
      const blobSize = {
        height: parseFloat(window.getComputedStyle(blob).height),
        width: parseFloat(window.getComputedStyle(blob).width),
      };
      const isLastEl = blobs.length - 1 === index;
      blob.setAttribute('mouseFromCenterX', mouseFromCenter.x);
      blob.setAttribute('mouseFromCenterY', mouseFromCenter.y);

      setInterval(() => { blobsToMouse(blob, blobSize, translateRange, isLastEl); }, 10);
    });

    wrapper.addEventListener('mouseenter', (event) => {
      event.currentTarget.setAttribute('data-inside', 1);
    });

    wrapper.addEventListener('mouseleave', (event) => {
      event.currentTarget.setAttribute('data-inside', 0);
      event.currentTarget.setAttribute('data-scatter', 1);
    });

    wrapper.addEventListener('mousemove', (event) => {
      mouseFromCenter = {
        x: (event.clientX - wrapperCenter.x),
        y: (event.clientY - wrapperCenter.y),
      };

      blobs.forEach((blob) => {
        blob.setAttribute('mouseFromCenterX', mouseFromCenter.x);
        blob.setAttribute('mouseFromCenterY', mouseFromCenter.y);
      });
    });
  }

  function init() {
    const numberOfBlobs = 20; // 25
    const padding = 10;
    const wrapper = document.querySelector('.blob-wrapper');
    const wrapperSize = {
      height: parseFloat(window.getComputedStyle(wrapper).height),
      width: parseFloat(window.getComputedStyle(wrapper).width),
    };
    const blobSize = {
      height: 125,
      width: 125,
    };
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
        br: randomNum(blobSize.height, blobSize.height / 8),
      };
      const position = {
        x: randomNum(translateRange.max.x, translateRange.min.x),
        y: randomNum(translateRange.max.y, translateRange.min.y),
      };
      const rotation = randomNum(360, 1);

      blob.classList.add('blob');
      blob.setAttribute('data-x', position.x);
      blob.setAttribute('data-y', position.y);
      blob.setAttribute('data-direction-x', (Math.random() > 0.5 ? '+' : '-'));
      blob.setAttribute('data-direction-y', (Math.random() > 0.5 ? '+' : '-'));
      blob.setAttribute('data-rotation', rotation);


      blob.style.borderRadius = `${radius.tl}px ${radius.br}px`;

      const transform = `translate(${position.x}%, ${position.y}%) rotate(${rotation}deg)`;
      blob.style.transform = transform;
      wrapper.append(blob);
    }

    followMouse(translateRange);
  }

  return {
    init,
  };
}());

export default animatedBlobs;
