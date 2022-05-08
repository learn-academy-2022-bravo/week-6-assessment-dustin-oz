// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("sentenceGenerator", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    expect(sentenceGenerator(people)).toEqual(["Ford Prefect is a hitchhiker", "Zaphod Beeblebrox is president of the galaxy", "Arthur Dent is a radio employee"])
  })
})

// JEST "GOOD" FAILURE

//  ● sentenceGenerator › takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

//   ReferenceError: sentenceGenerator is not defined

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]



// b) Create the function that makes the test pass. 

// *** STUDENT NOTE **** 

//  I used quite a bit more pseudo code than I typically would. This problem was quite challenging for me to wrap my head around programatically. So, please excuse the 'wordy' pseudo code.

// Create FUNCTION "sentenceGenerator" that takes in ARRAY
// Need to RETURN the passed in array and .MAP over each Array(VALUE) to .split the names
// So the .map HOF needs to Split on the VALUE.NAME element on each Array element so I can target the 1st letters in the names next <-- <-- (set as VAR "splitArray")
// Now take the newly created array of split values (as VAR uppercaseArray) and .toUpperCase the names at the indexes **[0][0]** concatnate with + and .substring to bring letters/words back together. 
// Should be able to now RETURN via STRING INTERPOLATION to bring the newly capitalized NAMES into a sentence with corresponding occupation VALUES.

const sentenceGenerator = (array) => {
  return array.map((value) => {
    let splitArray = value.name.split(' ')
    let uppercaseArray = splitArray[0][0].toUpperCase() + splitArray[0].substring(1) + " " + splitArray[1][0].toUpperCase() + splitArray[1].substring(1)
    return `${uppercaseArray} is ${value.occupation}`
  })
}


// JEST TEST PASS

// PASS./ code - challenges.test.js

// sentenceGenerator

//     ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)





// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// describe("onlyNumbers", () => {
//   it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
//     const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
//     // Expected output: [ 2, 0, -1, 0 ]
//     const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
//     // Expected output: [ 2, 1, -1 ]
//     expect(onlyNumbers(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//     expect(onlyNumbers(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//     expect(onlyNumbers(secretCodeWord3)).toEqual("3cc3ntr1c")
//   })
// })

// b) Create the function that makes the test pass.

// Fuction ONLYNUMBERS takes in ARRAY
// FILTER over the ARRAY elements -> Condition? TYPEOF === NUMBER     <<<< set as variable getNumbers
// MAP over newArray elements and %= 3 on each     <<<< set as variable remainders
// RETURN remainders

const onlyNumbers = (array) => {
  let getNumbers = array.filter(element => typeof element === 'number')
  let remainders = getNumbers.map(element => element %= 3)
  return remainders
}


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


// b) Create the function that makes the test pass.

const sumCubed = (array) => {
  let cubed = array.map(element => element ** 3)
  let sum = cubed.reduce(function (total, num) {
    return total + num;
  })
  return sum
}
