// Todo
// [x] 제목 렌더링
// [x] 검색 인풋 렌더링
// [x] 검색 인풋에 입력값을 입력 후 enter키를 입력하면 api로 사진 데이터 받아오기
// [x] 받아온 데이터 화면에 렌더링

export default function ({ targetEl }) {
  this.searchPhotos = [];
  this.setSearchPhotos = (nextPhotos) => {
    this.searchPhotos = nextPhotos;
    this.render();
  };

  const headingEl = document.createElement('h1');
  headingEl.textContent = 'Unsplash API Demo';
  const searchInputEl = document.createElement('input');
  const searchPhotosEl = document.createElement('ul');

  targetEl.appendChild(headingEl);
  targetEl.appendChild(searchInputEl);
  targetEl.appendChild(searchPhotosEl);

  const apiRequest = (keyword) => {
    const url = `https://api.unsplash.com/search/photos?query=${keyword}&per_page=30&client_id=uxEc60cz8p1C0Lskdr5a9LSu3cCfls2Dgcm1Sg7WoWM`;

    fetch(url)
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })

      .then((data) => {
        console.log(data);
        this.setSearchPhotos(data.results);
      })

      .catch((error) => console.log(error));
  };

  searchInputEl.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      apiRequest(e.target.value);
      console.log(e.target.value, '리스트 불러와 ');
    }
  });

  this.render = () => {
    const searchPhotosHTML = this.searchPhotos
      .map(
        (photo) => `
      <li><img src="${photo.urls.thumb}" alt="" /></li>
    `
      )
      .join('');
    console.log(this.searchPhotos);
    searchPhotosEl.innerHTML = searchPhotosHTML;
  };
}
