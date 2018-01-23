const cheerio = require('cheerio');
const fetch = require('node-fetch');

async function WebScraper(url){
  try {
    const results = [];
    const imageUrls = [];
    const doc = await fetch(url);
    const text = await doc.text();
    const $ = cheerio.load(text);
    // get the domain name to use later for url conversion
    let domain = url;
    //remove header
    if(url.includes('https://')){
      domain = url.replace('https://', '');
    }
    else if(url.includes('http://')){
      domain = url.replace('http://', '');
    }
    //check if url contains any '/'
    if(domain.includes('/')){
      let indexOfSlash = domain.indexOf('/');
      domain = domain.slice(0, indexOfSlash);
    }
    console.log(domain);
    $('img').each((i,element) => {
      let link = element.attribs.src;

      /* convert relative urls to absolute urls */

      while(link[0].search(/([A-Za-z])/) === -1){
        link = link.slice(1);
      }

      // check for static images and append domain if necessary

      //add header
      !link.startsWith('http') ? link = 'https://' + link : link;

      console.log(link);

      imageUrls.push(link);
    });
    imageUrls.forEach( async imageUrl => {
      try {
      let image = await fetch(imageUrl);
      results.push(image);
      }
      catch (error) {
        throw new Error(error.message)
      }
    });
    return results;
} catch (error) {
    throw new Error('Bad img url', error)
  }
}

module.exports = WebScraper;
