// Iteration #1: Find the maximum
function maxOfTwoNumbers(a, b) {
  return a > b ? a : b;
}

// Iteration #2: Find the longest word
function findLongestWord(words) {
  if (words.length === 0) return null;
  let longestWord = words[0];
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

// Iteration #3: Calculate the sum
function sumNumbers(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

// Bonus - Iteration #3.1: A generic sum() function
function sum(arr) {
  let total = 0;
  for (let item of arr) {
    if (typeof item === 'number') {
      total += item;
    } else if (typeof item === 'string') {
      total += item.length;
    } else if (typeof item === 'boolean') {
      total += item ? 1 : 0;
    }
  }
  return total;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
function averageNumbers(numbers) {
  if (numbers.length === 0) return null;
  let sum = sumNumbers(numbers);
  return sum / numbers.length;
}

// Level 2: Array of strings
function averageWordLength(words) {
  if (words.length === 0) return null;
  let totalLength = 0;
  for (let word of words) {
    totalLength += word.length;
  }
  return totalLength / words.length;
}

// Bonus - Iteration #4.1: A generic avg() function
function avg(arr) {
  if (arr.length === 0) return null;
  let total = sum(arr);
  return total / arr.length;
}

// Iteration #5: Unique arrays
function uniquifyArray(words) {
  if (words.length === 0) return null;
  let uniqueWords = [];
  for (let word of words) {
    if (!uniqueWords.includes(word)) {
      uniqueWords.push(word);
    }
  }
  return uniqueWords;
}

// Iteration #6: Find elements
function doesWordExist(words, wordToSearch) {
  if (words.length === 0) return null;
  for (let word of words) {
    if (word === wordToSearch) {
      return true;
    }
  }
  return false;
}

// Iteration #7: Count repetition
function howManyTimes(words, wordToSearch) {
  if (words.length === 0) return 0;
  let count = 0;
  for (let word of words) {
    if (word === wordToSearch) {
      count++;
    }
  }
  return count;
}

// Bonus - Iteration #8: Product of adjacent numbers
function greatestProduct(matrix) {
  let maxProduct = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (j < matrix[i].length - 3) {
        let horizontalProduct = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
        if (horizontalProduct > maxProduct) {
          maxProduct = horizontalProduct;
        }
      }
      if (i < matrix.length - 3) {
        let verticalProduct = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
        if (verticalProduct > maxProduct) {
          maxProduct = verticalProduct;
        }
      }
    }
  }
  return maxProduct;
}
