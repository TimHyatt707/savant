const Header = require('../components/Header');
const ImageContainer = require('../components/ImageContainer');
const SearchBar = require('../components/SearchBar');

const header = new Header();
const searchBar = new SearchBar();
const imageContainer = new ImageContainer();

function renderHTML(){
  const root = document.getElementById('root')
  root.appendChild(header);
  root.appendChild(searchBar)
  root.appendChild(imageContainer);
}

module.exports = renderHTML;
