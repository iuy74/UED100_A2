function favouriteCar(car){

  FinalMessage = "A " + car + " Is my favourite car brand"
  
 return console.log(car)

}


function LocalVariableTest() {
let local = "Hello World"

console.log(local);
}


try {
 
  console.log(local);

} catch (error) {
  console.log("You can't call a variable from within  a function as it is local")
  
}

let deplete = "I a variable outside a function, am being called from within a function"

function outervariable (){
  let y = deplete 
  return console.log(y)
}




function outerReplaced () {
  let deplete = "This local variable overwrites the outer variable even thought they are both called deplete"
  return console.log(deplete)
}
function main(){
  outervariable()
  LocalVariableTest()
  favouriteCar("Bugatti")
  outerReplaced()
}

main()
