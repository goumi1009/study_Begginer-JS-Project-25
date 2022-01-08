export default function ({ targetEl, imageList, activeItem = 0 }) {
  const ulEl = document.createElement('ul');
  ulEl.classList.add('carousel-list');
  targetEl.appendChild(ulEl);

  this.state = activeItem;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  ulEl.innerHTML = `
    ${imageList
      .map(
        (image) =>
          `<li class="carousel-item"><img src="${image.src}" alt="${image.alt}" /></li>`
      )
      .join('')}
  `;

  this.render = () => {
    ulEl
      .querySelectorAll('.carousel-item')
      .forEach((item, i) =>
        i === this.state
          ? item.classList.add('active')
          : item.classList.remove('active')
      );
  };

  this.render();
}
