// 1
/** a
 * This doesn't seem like the right answer
 * O(1) because just asking everyone at once. Either someone will respond or no one will
 */

/** b
 * O(n) because have to talk to  everyone in the room
 * The first person might have the same kind of dog and want a playdate for their dog, but also it might be the last person or no one
 */


//  2
// function isEven(value) {
//     if (value % 2 == 0) {
//         return true;
//     }
//     else
//         return false;
//     }
// }
// // O(1) because it is only trying to figure out if the value passed in  is divisible by 2 with no remainder and then returning true or false


// // 3
// function areYouHere(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//       const el1 = arr1[i];
//       for (let j = 0; j < arr2.length; j++) {
//           const el2 = arr2[j];
//           if (el1 === el2) return true;
//       }
//   }
//   return false;
// }
// // O(n^2) because it will take as long as it takes to go through the nested loop each time it goes through the outer loop until it finds the equal value in both arrays


// // 4
// function doubleArrayValues(array) {
//   for (let i = 0; i < array.length; i++) {
//       array[i] *= 2;
//   }
//   return array;
// }
// // O(n) because it is going through each item in the array and multiplying the value by 2


// // 5
// function naiveSearch(array, item) {
//   for (let i = 0; i < array.length; i++) {
//       if (array[i] === item) {
//           return i;
//       }
//   }
// }
// // O(n) because it is going through the array and wanting to know if that thing in the array matches the item being passed in
// // It could be the first thing in the array but the item being passed could also be at the end or not exist in the array


// // 6
// function createPairs(arr) {
//   for (let i = 0; i < arr.length; i++) {
//       for(let j = i + 1; j < arr.length; j++) {
//           console.log(arr[i] + ", " +  arr[j] );
//       }
//   }
// }
// // O(n^2) because it has to go through the nested loop each time it goes through the outer loop 


// // 7
// function compute(num) {
//   let result = [];
//   for (let i = 1; i <= num; i++) {

//       if (i === 1) {
//           result.push(0);
//       }
//       else if (i == 2) {
//           result.push(1);
//       }
//       else {
//           result.push(result[i - 2] + result[i - 3]);
//       }
//   }
//   return result;
// }
// /**
//  * This function is taking a number and running a loop until i is less than or equal to that number
//  * It is mutating i depending on its value and then pushing the new value to the results array
//  * Fibonacci sequence?
//  * O(n) because it will just run the loop until i matches the number that is passed in
//  */


// // 8
// function efficientSearch(array, item) {
//   let minIndex = 0;
//   let maxIndex = array.length - 1;
//   let currentIndex;
//   let currentElement;

//   while (minIndex <= maxIndex) {
//       currentIndex = Math.floor((minIndex + maxIndex) / 2);
//       currentElement = array[currentIndex];

//       if (currentElement < item) {
//           minIndex = currentIndex + 1;
//       }
//       else if (currentElement > item) {
//           maxIndex = currentIndex - 1;
//       }
//       else {
//           return currentIndex;
//       }
//   }
//   return -1;
// }
// /**
//  * This is going through an array and looking for an item
//  * if the current element in the array less than the item, then the min-index increases by one essentially making the array smaller on the left side
//  * if the current element is greater than the item then the max-index decreases by one essentially making the array smaller on the right side
//  * Essentially both of those operations cut the array down to a smaller size 
//  * if the current element ever matches up to the item that is passed in, then that index is returned
//  * if the item does not exist in the array -1 is returned
//  * O(log(n)) because each time the item does not match the current index in the array the array is made smaller so progressivley smaller portions of the array are processed each time
//  */


// //  9
// function findRandomElement(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }
// // O(1) because it is just generating a random number and wanting to know if that is in the array, but is only doing it once?


// 10
function isWhat(n) {
  if (n < 2 || n % 1 != 0) {
    return false;
  }
  for (let i = 2; i < n; ++i) {
    if (n % i == 0) return false;
  }
  return true;
}
/**
 * this function takes in a number and first checks if it is 0 or 1 or not an integer and returns false if either of those cases are true
 * then it loops through until i is less than n checking to see if n is divisible by i with no remainder; if is is it returns false
 * if neither of the if statements return false, it will return true
 * O(n) becasue it will take as long as it takes for the for loop to run completely
 */


// Tower of Hanoi
// a is source
// c is destination
// move top one from a to c
// move middle one from a to b
// move top one from c to b
// move bottom one from a to c
// move top one from b to a
// move middle one from b to c
// move top one from a to c
// need to program the steps above
function print(S, D) {
  console.log(`${S} -> ${D}`)
}

function TOH(n, source, dest, temp) {
  if(n === 1) {
    print(source, dest);
  } else {
    // was added to make work with 2 disks
    // can use recursion, want to bring disk number down to one
    // take care of the other 1
    TOH(n-1, source, temp, dest);
    // issue I see is how to get back to a previous numbered disk if going down each time, unless have to increase again 
    // not a consistent pattern like that
    // don't add one in line 183
    TOH(1, source, dest, temp);
    TOH(n-1, temp, dest, source); //2 -> 1
  }
}

TOH(3, 'a', 'c', 'b')
// how this works so far
/**
 * 3: a -> c
 * 2: a -> b
 * 3: c -> b
 * 
 */

// Iterative Versions
// Counting sheep
function sheep(num) {
  for(let i= num; i >= 0; i--) {
    if(i !== 0) {
      console.log(`${i}: Another sheep jumped over the fence`);
    } else if(i === 0) {
      console.log('All sheep jumped over the fence');
    }
  }
}
sheep(6);


// Power Calculator
function powerCal(base, exponent) {
  if(exponent === 0) {
    return 1;
  }
  if(exponent < 0) {
    return 'exponent should be >= 0';
  }
  return Math.pow(base, exponent)
}
powerCal(10, 2);


// Reverse String
function reverseString(string) {
  for(let i = 0; i < string.length; i++) {
    return string.substr(1) + string.charAt(i); 
  }
}
reverseString('hello');

// triangular number
function triangularNum(num) {
  return num*(num+1)/2
}
triangularNum(3);


// string splitter
function stringSplitter(separator, string) {
  for(let i = 0; i < string.length; i++) {
    if(string.charAt(i) === '/') {
      console.log(string.substring(i));
    }
    console.log(string.charAt(i) + string.substr(1));
  }
}
stringSplitter('/', '02/20/2020');


// Fibonacci
function fibonacci(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push(0);
    } else if (i === 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}
fibonacci(7);


// Factorial
function factorial(num) {
  if(num === 0 || num === 1) {
    return 1;
  }
  for (let i = num -1; i >= 1; i--) {
    num = num * i;
  }
  return num;
}
factorial(10);

// 13
// Fibonacci Recursion Complexity O(2^n)