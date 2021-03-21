"use strict";


// 1. countWords
function countWords(phrase) {
  const wordCounts = {};

  for (const word of phrase.split(' ')) {
    if (wordCounts[word]){
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  }
  return wordCounts;
}
// console.log(countWords('Hello hi there'))

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melonsPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  }
  if (!melonsPrices[price]){
    return;
  }
  return melonsPrices[price].sort();
}

console.log(getMelonsAtPrice(2.50));