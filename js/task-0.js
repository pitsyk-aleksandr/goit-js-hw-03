// Приклади з конспекту

function getLastElementMeta(array) {
  const lastIndex = array.length - 1;
  const lastElement = array[lastIndex];
  const arrayNew = [lastIndex, lastElement];
  return arrayNew;
}

console.log(getLastElementMeta(['apple', 'peach', 'pear', 'banana']));

function getExtremeElements(array) {
  const firstElement = array[0];
  const lastIndex = array.length - 1;
  const lastElement = array[lastIndex];
  const arrayNew = [firstElement, lastElement];
  return arrayNew;
}

console.log(getExtremeElements([1, 2, 3, 4, 5]));

function transformString(string) {
  const words = string.split('_');
  console.log(words);
  return words.join('-');
}

console.log(transformString('price_per_droid'));

function getLength(array) {
  const stringFromArray = array.join('');
  const lenString = stringFromArray.length;
  return lenString;
}

console.log(getLength(['Mango', 'hurries', 'to', 'the', 'train']));
console.log(getLength(['M', 'a', 'n', 'g', 'o']));

function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(' ');
  console.log(message, words);
  const countWords = words.length;
  console.log('countWords', countWords);
  const sum = countWords * pricePerWord;
  return sum;
}

console.log(calculateEngravingPrice('JavaScript is in my blood', 10));

function createArrayOfNumbers(min, max) {
  let numbers = [];
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }
  return numbers;
}

console.log(createArrayOfNumbers(29, 34));

function calculateTotalPrice(order) {
  let sum = 0;
  for (let i = 0; i < order.length; i += 1) {
    sum = sum + order[i];
  }
  return sum;
}

console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

function getEvenNumbers(start, end) {
  let evenNumbers = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}

console.log(getEvenNumbers(6, 12)); //[6, 8, 10, 12]

function checkStorage(storage, item) {
  const itemLowCase = item.toLowerCase();
  if (storage.includes(itemLowCase)) {
    return `${itemLowCase} is available to order!`;
  } else {
    return 'Sorry! We are out of stock!';
  }
}

console.log(checkStorage(['apple', 'plum', 'pear'], 'pEAr'));
console.log(checkStorage(['apple', 'plum', 'pear'], 'pLuM'));

function getCommonElements(array1, array2) {
  let commonArray = [];
  for (let i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) {
      commonArray.push(array1[i]);
    }
  }
  return commonArray;
}

console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]

function calculateTotalPrice1(order) {
  console.log('arguments -', arguments);

  let sum = 0;
  for (const num of order) {
    sum = sum + num;
  }
  return sum;
}

console.log(calculateTotalPrice1([412, 371, 94, 63, 176])); // 1116

function createReversedArray() {
  const args = Array.from(arguments);
  const reverseArray = args.toReversed();
  return reverseArray;
}

console.log(createReversedArray(12, 85, 37, 4)); // [4, 37, 85, 12]
