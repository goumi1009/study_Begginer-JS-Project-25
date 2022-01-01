export default function Button({ targetEl, onClick }) {
  const buttonEl = document.createElement('button');
  buttonEl.classList.add('btn-click');
  buttonEl.textContent = `Click Me!`;
  targetEl.appendChild(buttonEl);

  buttonEl.addEventListener('click', function () {
    const randomColor = `#${Math.round(Math.random() * 0xffffff).toString(16)}`;
    onClick(randomColor);
  });
}

// render addEventListener 이런 코드 순서를 어떻게 해야지 깔끔할까?!
