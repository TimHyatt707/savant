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

  button.addEventListener('click', () => {
    const event = new Event('boop');
    const [imgContainer] = document.querySelectorAll('.image-container');
    imgContainer.dispatchEvent(event);
  });

  return section;
}

module.exports = SearchBar;
