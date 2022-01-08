export default function ({ targetEl, count, activeItem = 0 }) {
  const dots = document.createElement('div');
  dots.classList.add('carousel-dots');
  targetEl.appendChild(dots);

  for (let i = 0; i < count; i++) {
    dots.appendChild(document.createElement('span'));
  }

  this.state = activeItem;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    dots.querySelectorAll('span').forEach((dot) => {
      dot.classList.remove('active');
    });
    dots.children[this.state].classList.add('active');
  };
  this.render();
}
