console.log("Hello Javascript");
let c = 3;
console.log(c); //3 first Increment/decrement the value based on the operator sign and then print the value
console.log(++c); //first Increment/decrement the value based on the operator sign and then print the value
console.log(c); //first Increment/decrement the value based on the operator sign and then print the value
console.log(--c); //first Increment/decrement the value based on the operator sign and then print the value
console.log(c); //first Increment/decrement the value based on the operator sign and then print the value

let b = 2;
b *= 3; //b=b*3;
b /= 3; //b=b/3;
b += 2; //b=+2;
b -= 4; //b=b-4;

console.log(2 | 3);
console.log(2 & 3);
console.log(2 ^ 3);
console.log(2 << 3);
console.log(2 >> 3);

//............................................................................
// Ternary operator - 

let x = 2;
let y = 3;
//x > y ? console.log("2 is greater than three") : console.log("2 is greater than three");
x > y ? console.log(x++) : console.log(x--); //1
console.log(x); //1

//.................................................................
// if else blocks
//if else if and else blocks
//switch

// if else blocks 

/*function nameoffn() {
}*/
let g = 3;

// how does if loop works?
//if a certain condition writtrn inside the parenthesis of if block is ture then we enter inside the body of if/basiclly enters inside the curly braces of if loop
//if can be used all alone but else is used with if blocks only not alone
// only if the IF block condition is ture it will enter inside the if block otherwise it will automatically enter inside the else block........................ 

/*if (g > 4) {
    console.log(g);
} else {
    console.log("ENter inside the else block");
}*/

if (g > 1) {
    console.log(g);
} else if (g == 3) {
    console.log("g value is 3");
} else {
    console.log("ENter inside the else block");
}

//--------------------------------------------------------------------------

// if a person is adult, child or senior citizen

/*let age = 66;
if (age < 18) {
    console.log("I am a child")
} else if (age >= 18 && age < 60) {
    console.log("I am an adult");
} else {
    console.log("I am a senior citizen");
}*/

//----------------------------------------------------------------------
let number = 1;
switch (number) {
    case 1:
        console.log("I am one");
        //break;

    case 2:
        console.log("I am two");
        //break;

    case 3:
        console.log("I am three");
        //break;

    case 4:
        console.log("I am four");
        //break;

    default:
        console.log("I am greater then four");
        break;
}