console.log("JS")

// // Conceptual Questions
// // How do we assign a value to a variable?
//   // by declaring it -- "x = 1" -- 
// // How do we change the value of a variable?
//   //by redeclaring it -- "x = 2" --
// // How do we assign an existing variable to a new variable?
//   //var.Prop? i think i'm confused by the question.

// ////////////   Strings.      ////////////
//     // Create a variable called firstVariable.
// //const firstVariable
//     // assign it the value of a string => "Hello World"
// let firstVariable = ("Hello World")
// // change the value of this variable to a number.
// firstVariable = (13)
// // store the value of firstVariable into a new variable called secondVariable
// secondVariable = firstVariable
// // change the value of secondVariable to a string.
// secondVariable = ("Muttbutt Maisie")
// // What is the value of firstVariable?
// console.log(firstVariable);
// // Create a variable called yourName and set it equal to your name as a string.
// let yourName = ("Maisie")
// // Write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
// console.log("Hello, my name is " + yourName);

// ///////////      Booleans    //////////

// // Using the provided variable definitions, replace the blanks with a mathematical or boolean operator that evaluates the expression to true. 👋
// //   const a = 4;
// //   const b = 53;
// //   const c = 57;
// //   const d = 16;
// //   const e = 'Kevin';
// // a < b;
// // c > d;
// // 'Name' === 'Name';
// // a + b === c;
// // a * a === d;
// // e === 'Kevin';
// // 48 == '48';


// //////      FARM   ////////

// //Write code that will print out "mooooo" if the variable animal is equal to cow.
// const animal = (maybeCow) => {
//   const animalArray = maybeCow.split("");
//   const animalString = animalArray.join("");
//   //console.log(animalString)
//     if(animalString === "cow"){
//     console.log("mooooo")
//       }else{
//     console.log("Hey! You're not a cow.")
//   }
// }

// animal("cow");
// //Change your code so that if the variable animal is anything other than a cow, your should print out "Hey! You're not a cow."
// animal("llama")
// animal("pig")
// animal("python")
// animal("cow")
// animal("elephant")


// //////      Driver's Ed     //////
// // Write a variable that will hold a person's age.
// const age = (oldEnough) => {
//   console.log(oldEnough)
//   if (oldEnough >= 16){
//     // Write code that will print out "Here are the keys", if the age is 16 years or older.
//     console.log("Here are the keys")      
// // Change your code so that if the age is younger than 16, a message will print "Sorry, you're too young."
// //else ("Sorry, you're too young");
//   } else ("Sorry, you're too young");
// }

// age(13)
// age(27)
// age(9)
// age(16)



// //////      Just Loop it      //////
// //Write code that will print out all the numbers in the range 0 - 10.
// for (let i = 0; i <= 10; i++)
// console.log(i)

// //Write code that will print out all the numbers in the range 10 - 4000.
// for (let i = 10; i <= 4000; i++)
// console.log(i)

// //Write code that will print out every other number in the range 10 - 4000.
// for (let i = 10; i <= 4000; i++)
//   if(i % 2 === 0)
// console.log(i)

// ////    Let's get even    ////
// // Print out the even numbers that are within the range of 1 - 100.
// for(let i = 0; i <= 100; i++)
//   if(i % 2 === 0)
//     console.log(i + " is an even number");
// // Adjust your code to add a message next to the even number that says: "is an even number".

// ////    Give me Five    ////
// //For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
// for (let i = 0; i <= 100; i++)
//   if (i % 5 === 0)
//     console.log("I found a " + i + ". High five!")
// //Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
// else if (i % 3 === 0)
//   console.log("I found a " + i + ". Three is a crowd")



// console.log("Savings account");        
// // //Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// let bankArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let bankAccount = 0;
// for (let i = 0; i < bankArray.length; i++) {
//   bankAccount += bankArray[i];
// }
// //  //Check your work! Your banck_account should have $55 in it.
 

// //You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// //Check your work! Your bank_account should have $10,100 in it.
// let bankArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let bankAccount = 0;
// for (let i = 0; i <= 100; i++) {
//   bankAccount += (i * 2);
// }console.log(bankAccount)

console.log("Multiples of 3 and 5")
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// const sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i = 0; i < sum.length; i+=1){
//   console.log(i)
//   //if (i % 3 === 0)
// }

//Find the sum of all the multiples of 3 or 5 below 1000.



//     ////    Easy Does it       
// // Create an array that contains three quotes and store it in a variable called quotes.
// const quotes = ["that's what", "she", "said"]


// ////    Random    ////
// //Given the following array const randomThings = [1, 10, "Hello", true]
// const randomThings = [1, 10, "Hello", true]

// //how do you access the 1st element in the array?
// console.log(randomThings[0])
// //Change the value of "Hello" to "World".
// randomThings[2] = "World"
// console.log(randomThings)
// //Check the value of the array to make sure it updated the array.

    ////    We've Got Class     ////
//Given the following array 
// const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]

// //What would you write to access the 3rd element of the array?
// console.log(ourClass[2])

// //Change the value of "Github" to "Octocat"
// ourClass[2] = "Octocat"

// //Add a new element, "Cloud City" to the array.
// ourClass.push("Cloud City")
// console.log(ourClass)

    ////    Mix It Up     ////
//Given the following array 
// const myArray = [5 ,10 ,500, 20]

// //using the push method, add the string "Egon" to the end of the array.
// myArray.push("Egon")

// //using a method, remove the string from the end of the array.
// myArray.pop("Egon")

// //using the unshift method, add the string "Bob Marley" to the beginning of the array
// myArray.unshift("Bob Marley")

// //using a different method, remove the string from the beginning of the array
// myArray.splice(0,1)

// //use the reverse method on this array
// let reverse = myArray.reverse();
// console.log(myArray)


    ////    biggieSmalls
//Write an if..else statement:
//console.log little number if the number is entered is less than 100
// const biggieSmalls = (someNumber) =>{
//   if (someNumber < 100){
//   console.log("little number");
//   } else {
//   console.log("big number");
//   }
// }

// biggieSmalls(42);
// biggieSmalls(73);
// biggieSmalls(236)

//console.log("little number") 

//If the number entered is 100 or more, alert big number.
//console.log("big number") 

  //console.log("Monkey in the Middle") 
//Write an if...else if...else statement:
// const monkey = (someNumber) => {
//   //console.log little number if the number entered is less than 5.
//   if (someNumber < 5){
//       console.log("little number");
//       //If the number entered is more than 10, log big number.
//    } else if (someNumber > 10) {
//      console.log("big number");
//      //Otherwise, console.log "monkey".
//    } else{
//     console.log("monkey") 
//   }
// }

// monkey(3);
// monkey(7);
// monkey(23)

    ////    What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// // What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence
// console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!") 

// // Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe.
// kristynShoe = kristynsCloset.splice(0,1)
// console.log(kristynShoe)
// console.log(kristynsCloset)

// // Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
// kristynsCloset.splice(5,0,"raybans")
// console.log(kristynsCloset)

// // Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
// kristynsCloset[4] = "stained kint hat"
// console.log(kristynsCloset)

// Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];


// // // Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
// console.log(thomsCloset[0][2])


// // // In the same way, access one item from Thom's pants array.
// console.log(thomsCloset[1][1])

// // // Access one item from Thom's accessories array.
// console.log(thomsCloset[2][2])

// // Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// console.log("Thom is looking fierce in a " + thomsCloset[0][2] + ", " +thomsCloset[1][1] + " and " + thomsCloset[2][2]+ "!")

// // Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
// thomsCloset.splice(2, 1, "Footie Pajamas")
// thomsCloset[1][2] = "Footie Pajamas"
// console.log(thomsCloset)




//     //printGreeting
// // //Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.
//  const printGreeting = (name) => {
//   console.log("Hello there, " + name + "!");
// }

// printGreeting("Slimer");


    ////    reverseWordOrder
//Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

// const reverseWordOrder = (str) => {  
//   //split string of words in to an array
//   const array = str.split(" ");
//   console.log(array);
//   //reverse the string
//   const revArr = array.reverse();
//   console.log(revArr);
//   console.log(revArr.join(" "));
// }

//   reverseWordOrder("Ishmael me Call");
//   reverseWordOrder("I use Lâncome on my comb");

    console.log("calculate")//   calculate
//Write a function called calculate.
//This function should take three arguments, two numbers and a string.
//Name the parameters num1, num2, and operation.
// const calculate = (num1, num2, operation) => {
//   if (operation === 'add'){
//     return num1 += num2;
//   } 
//   else if (operation === 'div') {
//     return num1/num2;
//   } 
//   else if (operation === 'exp') {
//     return num1*=num2;
//   }
// }

//console.log(calculate(4, 3, "add");
//If the function receives the string "add" for the operation parameter, it will return the sum of num1 and num2.

//If the function receives the string "sub" for the operation parameter, it will return num1 minus num2.
//console.log(calculate(4, 3, "sub"));

//Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).
//console.log(calculate(4, 3, "exp"));


    ////    printCool
//Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
// const printCool = (name) => {
//   console.log("Hello there, " + name + "!");
// }
// printCool("Greg");


console.log("calculateCube")
//Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
// const calculateCube = (num) => {
//   if ( )
// }
// use Math.pow(base, 3)

console.log("isAVowel")
//Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

//console.log(isAVowel("a"));

     getTwoLengths
//Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
const getTwoLengths = (string1, string2) => {
    return [string1.length, string2.length];
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

console.log("getMultipleLengths")
//Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

//console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

console.log("maxOfThree")
//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

//console.log(maxOfThree(6, 9, 1));

console.log("printLongestWord")
//Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

//console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

console.log("transmogrify")
// Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

//The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

//For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

//console.log(transmogrify(5, 3, 2));



























































