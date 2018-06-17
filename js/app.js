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



console.log("Savings account");        
//Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// const bank_account = (saveArray) => {
//   for (let i = 0; i <= 10; i++);
//   console.log(i)
// }

//Check your work! Your banck_account should have $55 in it.

//You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
//Check your work! Your banck_account should have $10,100 in it.

console.log("Multiples of 3 and 5")
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// const sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i = 0; i < sum.length; i+=1){
//   console.log(i)
//   //if (i % 3 === 0)
// }

//Find the sum of all the multiples of 3 or 5 below 1000.



////    Easy Does it    ////
// Create an array that contains three quotes and store it in a variable called quotes.

////    Random    ////
//Given the following array const randomThings = [1, 10, "Hello", true]
const randomThings = [1, 10, "Hello", true]

//how do you access the 1st element in the array?
console.log(randomThings[0])
//Change the value of "Hello" to "World".
randomThings[2] = "World"
console.log(randomThings)
//Check the value of the array to make sure it updated the array.

































































