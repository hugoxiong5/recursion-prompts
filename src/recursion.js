/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length === 0) {
    return 0;
  }
  return array[0] + sum(array.slice(1, array.length));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  // const arr = array.flat(Infinity);
  // if (arr.length === 0) {
  //   return 0;
  // }
  // return arr[0] + arraySum(arr.slice(1, arr.length));

  let sum = 0;

  for (let i = 0; i < array.length; i++) {

    if (array[i] instanceof Array) {
      sum += arraySum(array[i]);
    }

    if (typeof array[i] === 'number') {
      sum += array[i];
    }
 }

 return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 0) {
    return true;
  }
  if (n === 1) {
    return false;
  }
  return isEven(Math.abs(n) - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n > 0) {
    return n - 1 + sumBelow(n - 1);
  }
  if (n < 0) {
    return n + 1 + sumBelow(n + 1);
  }
  if (n === 0) {
    return 0;
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  let nums = [];

  if (y > x + 1) {
    nums = [x + 1];
    nums = nums.concat(range(x + 1, y));
  }

  if (x - 1 > y) {
    nums = [x - 1];
    nums = nums.concat(range(x - 1, y));
  }

  return nums;
};


// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp !== 0) {
    if (exp < 0) {
      return +( (1 / base * exponent(base, exp + 1)).toPrecision(5) ); // some floating-point funkiness I think?
    } else {
      return base * exponent(base, exp - 1);
    }
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n < 2 && n !== 1) {
    return false;
  }
  if (n === 2 || n === 1) {
    return true;
  }
  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string.length === 1) {
    return string[0];
  }
  return string[string.length - 1] + reverse(string.slice(0, string.length - 1));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {

  // whatever, I just did the reversal recursion function above...
  if (string.toLowerCase() === reverse(string).toLowerCase()) {
    return true;
  } else {
    return false;
  }

};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

// 78 % 453 > 78
// -79 % 82 > -79
// -275 % -502 > -275
// -275 % -274 > -1
// -4 % 2 > -0

var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  }

  if (x < 0) {
    return -modulo(-x,  y);
  }

  if (y < 0) {
    return  modulo( x, -y);
  }

  if (x < y) {
    return  x;
  }

  return modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if ( y === 0) {
    return 0;
  }

  if (x < 0 && y < 0) {
    return -x + multiply(-x, -y - 1);
  }

  if (x < 0) {
    return -(-x + multiply(-x, y -1));
  }

  if (y < 0) {
    return -(x + multiply(x, -y -1));
  }

  return x + multiply(x, y - 1);

};

6-3-3

6, 3

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  let quotient = 0;
  if (y === 0) {
    return NaN;
  }

  if (x < 0 && y < 0) {
    if (-x < -y) {
      return 0;
    }
    quotient += 1 + divide(-x - -y, -y);
    return quotient;
  }

  if (x < 0 && y > 0) {
    if (-x < y) {
      return 0;
    }
    quotient += 1 + divide(-x - y, y);
    return quotient;
  }

  if (x > 0 && y < 0) {
    if (x < -y) {
      return 0;
    }
    quotient += 1 + divide(x - -y, -y);
    return quotient;
  }

  if (x >= 0 && y > 0) {
    if (x < y) {
      return 0;
    }
    quotient += 1 + divide(x - y, y);
    return quotient;
  }

};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {

  if (x < 0 || y < 0) {
    return null;
  }

  let bigger = (x > y) ? x : y;
  let smaller = (x < bigger) ? x : y;

  let remainder = bigger % smaller;

  if (remainder === 0 ) {
    return smaller;
  } else {
    return gcd(smaller, remainder);
  }

  // let bigger = (x > y) ? x : y;

  // for (let i = bigger; i > 0; i--) {
  //   if (x % i === 0 && y % i === 0) {
  //     return i;
  //   }
  // }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {

  if (str1.length !== str2.length) {
    return false;
  }

  if (str1 === '' && str2 === '') {
    return true;
  }

  if (str1.length === 1) {
    if (str1[0] === str2[0]) {
      return true;
    } else {
      return false;
    }
  }

  if (str1[0] !== str2[0]) {
    return false;
  } else {
    return compareStr(str1.slice(1), str2.slice(1));
  }

};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str.length === 0) {
    return [];
  }
  return [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 0) {
    return [];
  }
  let result = [array[array.length - 1]];
  return result.concat(reverseArr(array.slice(0, array.length - 1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 0) {
    return [];
  }
  return [value].concat(buildList(value, length - 1))
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {

  const results = []; // concatenating the rescursive returns to this array instead (i.e. starting from n=1)

  if (n === 1) {
    return ['1'];
  } else {
    if (n % 3 === 0 && n % 5 === 0) {
      results.push('FizzBuzz');
    } else if (n % 5 === 0) {
      results.push('Buzz');
    } else if (n % 3 === 0) {
      results.push('Fizz');
    } else {
      results.push(''+ n);
    }
    return fizzBuzz(n - 1).concat(results);
  }

};

  // const fizzBuzzReversed = function(n) {
  //   if (n === 1) {
  //     return ['1'];
  //   }

  //   if (n % 3 === 0 && n % 5 === 0) {
  //     return ['FizzBuzz'].concat(fizzBuzzReversed(n-1));
  //   }

  //   if (n % 3 === 0) {
  //     return ['Fizz'].concat(fizzBuzzReversed(n-1));
  //   }

  //   if (n % 5 === 0) {
  //     return ['Buzz'].concat(fizzBuzzReversed(n-1));
  //   }

  //   return [n + ''].concat(fizzBuzzReversed(n-1));
  // }

  // const reversed = fizzBuzzReversed(n);
  // return reverseArr(reversed);


  // let array = [];

  // for (let i= 1; i <= n ; i++) {
  //   if (i % 3 === 0 && i % 5 === 0) {
  //     array.push('FizzBuzz');
  //   }
  //   else if (i % 3 === 0) {
  //     array.push('Fizz');
  //   }
  //   else if (i % 5 === 0) {
  //     array.push('Buzz');
  //   }
  //   else {
  //     array.push(i + '');
  //   }
  // }

  // return array;

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {

  if (array.length === 0) {
    return 0;
  }

  let count = 0;

  if (array[0] === value) {
    count = 1;
  }
  return count + countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 0) {
    return [];
  }
  const results = [callback(array[0])];
  return results.concat(rMap(array.slice(1), callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {

  // use reduce?? > that would probably be easier, but not my own recursive function

  let objCopy = JSON.parse(JSON.stringify(obj));

  const currentKey = Object.keys(objCopy)[0];

  if (currentKey === undefined) {
    return 0;
  }

  let count = 0;

  if (currentKey === key) {
    count += 1;
  }

  if (typeof objCopy[currentKey] === 'object') {
    count += countKeysInObj(objCopy[currentKey], key);
  }

  delete objCopy[currentKey];
  return count + countKeysInObj(objCopy, key);

};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {

  let objCopy = JSON.parse(JSON.stringify(obj));

  const currentKey = Object.keys(objCopy)[0];

  if (currentKey === undefined) {
    return 0;
  }

  let count = 0;

  if (objCopy[currentKey] === value) {
    count += 1;
  }

  if (typeof objCopy[currentKey] === 'object') {
    count += countValuesInObj(objCopy[currentKey], value);
  }

  delete objCopy[currentKey];
  return count + countValuesInObj(objCopy, value);

};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {

  function replaceIndexInObj(obj, oldKey, newKey, index) {
    let currentKey = Object.keys(obj)[index];

    if (currentKey === undefined) {
      return 0;
    }

    if (currentKey === oldKey) {
      obj[newKey] = obj[currentKey];
      delete obj[currentKey];
      currentKey = newKey;
    }

    if (typeof obj[currentKey] === 'object') {
      replaceKeysInObj(obj[currentKey], oldKey, newKey);
    }
  }

  for (let i = Object.keys(obj).length; i >= 0 ; i--) {
    replaceIndexInObj(obj, oldKey, newKey, i)
  }

  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {

  if (n <= 0) {
    return null;
  }

  if (n === 1) {
    return [0, 1];
  } else {
    const seq = fibonacci(n-1);
    const sum = seq[seq.length - 2] + seq[seq.length - 1];
    seq.push(sum);
    return seq;
  }

};

// not sure how to do one recursive call to fibonacci without helper function
// const results = [0,1];

// if (n <= 0) {
//   return null;
// }

// if (n === 1) {
//     return results;
// }

// if (results.length - 1 === n) {
//   return results;
// }

// const sum = results[results.length - 2] + results[results.length - 1];
// results.push(sum);

// fibonacci(n-1);


// older solution using helper function:
// const results = [0, 1];

// if (n <= 0) {
//   return null;
// }

// if (n === 1) {
//   return results;
// } else {
//   fibonacciSum(0, 1, n);
// }

// function fibonacciSum(first, second, end) {

//   if (results.length - 1 === end) {
//     return;
//   }

//   let sum = first + second;
//   results.push(sum);
//   fibonacciSum(second, sum, end);

// };

// return results;


// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {

  if (n < 0) {
    return null;
  }

  if (n === 0) {
    return 0;
  }

  return fibonacci(n)[n];
}

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if (array.length === 0) {
    return [];
  }
  return [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  if (array.length === 0) {
    return [];
  }
  let result = array[0];
  result = result.replace(result[0], result[0].toUpperCase());
  return [result].concat(capitalizeFirst(array.slice(1)));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  let objCopy = JSON.parse(JSON.stringify(obj));

  const currentKey = Object.keys(objCopy)[0];

  if (currentKey === undefined) {
    return 0;
  }

  let sum = 0;

  if (objCopy[currentKey] % 2 === 0) {
    sum += objCopy[currentKey];
  }

  if (typeof objCopy[currentKey] === 'object') {
    sum += nestedEvenSum(objCopy[currentKey]);
  }

  delete objCopy[currentKey];
  return sum + nestedEvenSum(objCopy);

};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {

  results = [];

  for (let i = 0; i < array.length; i++) {

    let value = array[i];

    if (Array.isArray(value)) {
      results = results.concat(flatten(value));
    } else {
      results.push(value);
    }
  }

  return results;
}

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {

  if (obj === undefined) {
    obj = {};
  }

  if (str.length === 0) {
    return obj;
  }

  if ( obj[str[0]] ) {
    obj[str[0]]++;
  } else {
      obj[str[0]] = 1;
  }

  return letterTally(str.slice(1, str.length), obj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  if (list.length < 2) {
    return list;
  }
  if (list[0] !== list[1])  {
    return [list[0]].concat(compress(list.slice(1)));
  }
  return compress(list.slice(1));

};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  let results = [];
  if (array.length === 0) {
    return results;
  }
  const elem = array[0];
  elem.push(aug);
  results.push(elem);
  return results.concat(augmentElements(array.slice(1), aug));
};

// results = [];

// for (let i = 0; i < array.length; i++) {
//   let elem = array[i];
//   elem.push(aug);
//   results.push(elem);
// }

// return results;


// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (array.length < 2) {
    return array;
  }
  if (array[0] === array[1] && array[0] === 0)  {
    return minimizeZeroes(array.slice(1));
  }
  return [array[0]].concat(minimizeZeroes(array.slice(1)));
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length < 1) {
    return array;
  }

  if (array.length === 1) {
    return [Math.abs(array[0])];
  }

  const value0 = Math.abs(array[0]);
  const value1 = Math.abs(array[1]) * -1;

  return [value0, value1].concat(alternateSign(array.slice(2)));
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  if (str.length === 0) {
    return '';
  }

  let value = str[0];

  if (value === '0') {
    value = 'zero';
  }
  if (value === '1') {
    value = 'one';
  }
  if (value === '2') {
    value = 'two';
  }
  if (value === '3') {
    value = 'three';
  }
  if (value === '4') {
    value = 'four';
  }
  if (value === '5') {
    value = 'five';
  }
  if (value === '6') {
    value = 'six';
  }
  if (value === '7') {
    value = 'seven';
  }
  if (value === '8') {
    value = 'eight';
  }
  if (value === '9') {
    value = 'nine';
  }
  if (value === '10') {
    value = 'ten';
  }

  return value.concat(numToText(str.slice(1)));
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
