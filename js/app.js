console.log("JS")

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