const webScraper = require('../scrapers/WebScraper');

function ImageContainer(){
  const section = document.createElement('section');

  section.className = 'image-container';

  section.addEventListener('boop', async (e) => {
    try {
      const [searchBar] = document.getElementsByClassName('search-bar');
      const results = await webScraper(searchBar.value);
    }
    catch (error) {
      throw new Error(error);
    }
  });

  return section;
}

module.exports = ImageContainer;
