console.log("JS")

// Conceptual Questions
// How do we assign a value to a variable?
  // by declaring it -- "x = 1" -- 
// How do we change the value of a variable?
  //by redeclaring it -- "x = 2" --
// How do we assign an existing variable to a new variable?
  //var.Prop? i think i'm confused by the question.

////////////   Strings.      ////////////
    // Create a variable called firstVariable.
//const firstVariable
    // assign it the value of a string => "Hello World"
let firstVariable = ("Hello World")
// change the value of this variable to a number.
firstVariable = (13)
// store the value of firstVariable into a new variable called secondVariable
secondVariable = firstVariable
// change the value of secondVariable to a string.
secondVariable = ("Muttbutt Maisie")
// What is the value of firstVariable?
console.log(firstVariable);
// Create a variable called yourName and set it equal to your name as a string.
let yourName = ("Maisie")
// Write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
console.log("Hello, my name is " + yourName);

///////////      Booleans    //////////

// Using the provided variable definitions, replace the blanks with a mathematical or boolean operator that evaluates the expression to true. 👋
//   const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';
a < b;
c > d;
'Name' === 'Name';
a + b === c;
a * a === d;
e === 'Kevin';
48 == '48';



//////      FARM   ////////




//Write code that will print out "mooooo" if the variable animal is equal to cow.
const animal = (maybeCow) => {
  const animalArray = maybeCow.split("");
  const animalString = animalArray.join("");
  //console.log(animalString)
    if(animalString === "cow"){
    console.log("mooooo")
      }else{
    console.log("Hey! You're not a cow.")
  }
}

animal("cow");
//Change your code so that if the variable animal is anything other than a cow, your should print out "Hey! You're not a cow."
animal("llama")
animal("pig")
animal("python")
animal("cow")
animal("elephant")