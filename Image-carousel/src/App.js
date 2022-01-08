import CarouselDots from './components/CarouselDots.js';
import CarouselList from './components/CarouselList.js';
import IconButton from './components/IconButton.js';

const imageList = [
  {
    src: 'https://picsum.photos/500/300?random=1',
    alt: 'image1',
  },
  {
    src: 'https://picsum.photos/500/300?random=2',
    alt: 'image2',
  },
  {
    src: 'https://picsum.photos/500/300?random=3',
    alt: 'image3',
  },
  {
    src: 'https://picsum.photos/500/300?random=4',
    alt: 'image4',
  },
  {
    src: 'https://picsum.photos/500/300?random=5',
    alt: 'image5',
  },
];

export default function ({ targetEl }) {
  const carouselWrapper = document.createElement('div');
  carouselWrapper.classList.add('carousel-wrapper');
  targetEl.appendChild(carouselWrapper);

  this.state = 0;
  this.setState = (nextState) => {
    if (nextState >= imageList.length) {
      nextState = 0;
    } else if (nextState < 0) {
      nextState = imageList.length - 1;
    }

    this.state = nextState;
    carouselList.setState(nextState);
    carouselDots.setState(nextState);
  };

  const carouselList = new CarouselList({
    targetEl: carouselWrapper,
    imageList,
  });

  new IconButton({
    targetEl: carouselWrapper,
    icon: 'chevron-left',
    alt: '이전',
    onClick: () => {
      this.setState(this.state - 1);
    },
  });

  new IconButton({
    targetEl: carouselWrapper,
    icon: 'chevron-right',
    alt: '다음',
    onClick: () => {
      this.setState(this.state + 1);
    },
  });

  const carouselDots = new CarouselDots({ targetEl, count: imageList.length });
}
