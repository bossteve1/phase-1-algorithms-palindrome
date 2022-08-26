function isPalindrome(word) {
  // Write your algorithm here
  reversedWord = word.split('').reverse().join('')
  if(reversedWord === word){
    return true
  }else{
    return false
  }
}

/* 
  Add your pseudocode here
  reverse word
  if reversed word === word
    return true
  else 
    return false 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;function isPalindrome(word) {
  // Write your algorithm here
  reversedWord = word.split('').reverse().join('')
  if(reversedWord === word){
    return true
  }else{
    return false
  }
}

/* 
  Add your pseudocode here
  reverse word
  if reversed word === word
    return true
  else 
    return false 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;