const cheerio = require('cheerio');
const fetch = require('node-fetch');

async function WebScraper(url){
  try {
    const results = [];
    const imageUrls = [];
    const doc = await fetch(url);
    const text = await doc.text();
    const $ = cheerio.load(text);
    $('img').each((i,element) => {
      let link = element.attribs.src;
      link.startsWith('//') ? link = link.slice(2) : link;
      !link.startsWith('http') ? link = 'https://' + link : link;
      imageUrls.push(link);
    });
    imageUrls.forEach( async imageUrl => {
      let image = await fetch(imageUrl);
      results.push(image);
    });
    return results;
} catch (error) {
    console.log(error);
  }
}

module.exports = WebScraper;
