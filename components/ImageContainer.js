const webScraper = require('../scrapers/WebScraper');

function ImageContainer(){
  const section = document.createElement('section');

  section.className = 'image-container';

  section.addEventListener('boop', async (e) => {
    try {
      const [searchBar] = document.getElementsByClassName('search-bar');
      const [imgContainer] = document.getElementsByClassName('image-container');
      webScraper(searchBar.value).then(results => {
        console.log(results);
        results.forEach(result => {
          let img = document.createElement('img');
          img.className = 'thumbnail';
          img.setAttribute('src', result.url);
          imgContainer.appendChild(img);
        });
      })
      .catch(error => {
        console.log(error.message);
      });
    }
    catch (error) {
      console.log(error);
    }
  });

  return section;
}

module.exports = ImageContainer;
