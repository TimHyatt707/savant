const cheerio = require('cheerio');
const fetch = require('node-fetch');

async function webScraper(url){
  try {
    const results = [];
    const doc = await fetch(url);
    const text = await doc.text();
    const $ = cheerio.load(text);
    $('img').each((i,element) => {
      results.push(element.attribs.src);
    });
    return results;
} catch (error) {
    console.log(error);
  }
}

module.exports = webScraper;
