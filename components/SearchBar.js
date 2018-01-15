const webScraper = require('../scrapers/WebScraper');

function SearchBar(){
  const section = document.createElement('section');
  const input = document.createElement('input');
  const button = document.createElement('button');

  button.innerHTML = 'Submit';

  button.className = 'search-button';
  section.className = 'search-bar-section';
  input.className = 'search-bar';

  section.appendChild(input);
  section.appendChild(button);

  button.addEventListener('click', async () => {
    const results = await webScraper(input.value);
    console.log(results);
  });

  return section;
}

module.exports = SearchBar;
