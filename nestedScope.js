// this is chapter 3 of the book about function in javascript

const hummuns = function(factor){
const ingredients = function(amount, unit, name) {
    let ingredient = amount * factor;
    if (ingredient > 1) {
        unit += 's';
    }
    console.log(`${ingredient} ${unit} ${name}`);

}; 
ingredients(1, 'can', 'broccoli');
ingredients(0.25, 'cup', 'broccoli');
ingredients(3, 'tbsp', 'butter');
ingredients(0.25, 'cup', 'butter');
ingredients(1, 'tsp', 'salt');
ingredients(1, 'tsp', 'sugar');
ingredients(1, 'tsp', 'sugar');
ingredients(1, 'tsp', 'sugar');

}
hummuns(2);
// Decleartion Notation is begin 
console.log("the future says:", future());

function future() {
    return "You'll never have flying cars";
}
// this is error because the function is not decleared and the call above function and there exist const
//const future=function () {
 //   return "You'll never have flying cars";
//}

// now we can decleare the arrow function

const power =(base , exponent) =>{

    let result = 1 
    for (let count = 0 ; count < exponent ; count++){
        result *= base ; 

    }
    return result ; 
}
console.log(`this is return from power arrow function ${power(2,3)}`);

// this is false function declaration
        // function power =>(base , exponent)

const square1 = (x) => {return x * x };
const square2 = x => x * x;
console.log(`this is return from square1 function ${square1(2)}`);
console.log(`this is return from square2 function ${square2(2)}`);

// full stack 
function chicken() {
    return egg();
}
function egg() {
    return chicken();
}
console.log(`this is return from chicken function ${chicken()}`);
