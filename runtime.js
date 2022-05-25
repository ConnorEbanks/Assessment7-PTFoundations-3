const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


// Try it with first function
perf.start();                     // Starts timer
doublerAppend(largeArray);
let resultsAppendLarge = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(largeArray);
let resultsInsertLarge = perf.stop();


// Try it with first function
perf.start();                     // Starts timer
doublerAppend(mediumArray);
let resultsAppendMedium = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(mediumArray);
let resultsInsertMedium = perf.stop();


// Try it with first function
perf.start();                     // Starts timer
doublerAppend(smallArray);
let resultsAppendSmall = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(smallArray);
let resultsInsertSmall = perf.stop();


// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppendTiny = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsertTiny = perf.stop();

console.log("Extra Large Array")
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
console.log('Results for the extraLargeArray');


console.log("Large Array")
console.log("insertLarge", resultsInsertLarge.preciseWords);
console.log("appendLarge", resultsAppendLarge.preciseWords);
console.log('Results for the largeArray');


console.log("Medium Array")
console.log("insert", resultsInsertMedium.preciseWords);
console.log("append", resultsAppendMedium.preciseWords);
console.log('Results for the mediumArray');


console.log("Small Array")
console.log("insert", resultsInsertSmall.preciseWords);
console.log("append", resultsAppendSmall.preciseWords);
console.log('Results for the smallArray');


console.log("Tiny Array")
console.log("insert", resultsInsertTiny.preciseWords);
console.log("append", resultsAppendTiny.preciseWords);
console.log('Results for the tinyArray');

//PART 2

//SUM ZERO
// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
let value = "False"
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = "True"
      } 
    }
  }
}

console.log(value)
//space complexity is o(1) time complexity is o(n)


//Unique Characters
// Write your code below
function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }

  console.log(hasUniqueChars('salsa'))
  // space complexity of O(size of alphabet) timecomplexity of O(n)


//Pangram Sentence
const isPangram = (sentence) =>{
    return new Set (sentence.toLowerCase().replace(/[^a-z]/g,``)).size===26?true:false
}

console.log(isPangram(`qwertyu Iopasdfghjklz21xcvbnm`))
// space complexity of O(3n) time complexity of O(n) 


//Longest Word
const longestWord = (wordsArr)=>{
    let longest = 0
    wordsArr.map((e)=>e.length>longest?longest=e.length:null)
    return longest
}
console.log(longestWord([`hello`, `hi`]))
//space complexity of o(n) and time complexity of o(n)