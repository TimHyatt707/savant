const webScraper =  require('../scrapers/webScraper');

test('the function returns an array', () => {
  let results = webScraper('bogus url');
  expect(Array.isArray(results)).toBe(true);
});

})
