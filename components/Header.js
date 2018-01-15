function Header(){
  const header  = document.createElement('header');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');

  h1.innerHTML = 'Savant';
  p.innerHTML = 'Paste in a url to get started';

  header.appendChild(h1);
  header.appendChild(p);

  return header;
}

module.exports = Header;
