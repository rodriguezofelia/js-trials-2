"use strict";


// 1. printIndices
function printIndices(items) {
 for (const i in items) {
  console.log(items[i], i);
 }
}
 
// console.log(printIndices(['apple', 'banana', 'cherry']))

// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];

  for (const i in items) {
    if (i % 2 === 0) {
      result.push(items[i])
    }
  }

  return result
}

// console.log(everyOtherItem(['apple', 'banana', 'cherry']))

// 3. smallestNItems
function smallestNItems(items, n) {
  //  """Print a list of the `n` smallest integers in `items`.
  
  const sorted_items = items.sort((a, b) => {
    return a - b
  });
  const sorted_n_items = sorted_items.slice(0, n);
  sorted_n_items.reverse();

  console.log(sorted_n_items)

}

// console.log(smallestNItems([1, 30, 4, 21, 100000], 4))
