console.log("JS")

// Conceptual Questions
// How do we assign a value to a variable?
  // by declaring it -- "x = 1" -- 
// How do we change the value of a variable?
  //by redeclaring it -- "x = 2" --
// How do we assign an existing variable to a new variable?
  //var.Prop? i think i'm confused by the question.

  






























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