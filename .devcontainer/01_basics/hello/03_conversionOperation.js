// let score = "33abc"      //o/p: typeof: number, console.log(valueInnumber) => NaN (i.e. Not a Number)
// let score = null         //o/p: typeof : object, typeof valueInNumber: Number, console.log(valueInNumber) => 0 (eg analogy: temperature cannot be null)
// let score = undefined    //o/p: typeof : undefined, typeof valueInNumber: undefined, console.log(valueInNumber) => NaN 
// let score  = true        //o/p: typeof : boolean, typeof valueInNumber: boolean, console.log(valueInNumber) => 0 (for false: 1)
let score = "rohit"         //o/p: typeof : string, typeof valueInNumber: number, console.log(valueInNumber) => NaN 


//we know the type of the above variable(i.e. number), but when working in backend, the frontend guy sended u the value, but it is received from a "application form".. 
// ..but we cant really tell..the value inputted in which format..it can also be object, string. Hence we have no gauranttee
// const {score} = req.body   //in this line 3 we have no gaurantee

// for gaurantee... that the score in string format is actually a number..we use conversion operation
console.log( typeof score);     //o/p: string
console.log(typeof(score));    //o/p: string 
//both line 8 and 9 are similar ways to identify typeof()


//for conversion (its class based.. we convert it by creating a class)
let valueInNumber = Number(score)
console.log(typeof valueInNumber);  //o/p: number...why? bcoz the sring value is now converted to number.

//logging valueInNumber after putting 'abc' with 33
console.log(valueInNumber)   //o/p: NaN (not a number)..
//summary: NaN is not a number. many times, when converting  "33abc"(not a pure number), will be converted successfully in JS.
//...but when we actually see the value.. its NaN (a special type in itself). 

//similar example can be executed to strings, null, undefined


// summary:
// 33 => 33
// 33abc => NaN
// true => 1; false => 0

// let LoggedIn = true  //suppose we want this to convert in boolean, which is directly coz of "true".. lets see how to do it with => 1
// let isLoggedIn = 1    //0/p: true

//now lets keep it empty
// let isLoggedIn = ""     //o/p: false

//now lets write a name in it.
let isLoggedIn = "Rohit"    //o/p: true

let booleanIsLoggedIn = Boolean(isLoggedIn) //syntax: let (varname) = datatype(previously initialised var name)
console.log(booleanIsLoggedIn)  //o/p: true (for 1).. for 0(false)..hence verified.

//summary:
// 1 => true, 0 => false
// ""(empty) => false
// "rohit" => true

//changing number to string
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);            //o/p: 33
console.log(typeof stringNumber);     //o/p: string (here number type is changged to string; only  come to know when logged)



//**********************************OPERATIONS ********************************************//
  
//negative value
let value = 3
let negValue = -value
console.log(negValue);

//some similar operations
// console.log(2 + 2);      //addition
// console.log(2 - 2);      //subtraction
// console.l0g(2 * 2);      //multiplication
// console.log(2 ** 3);     //power.. 2 to the power 3
// console.log(2/3);        //division
// console.log(2 % 3);      //remainder/ modulus(useful in cryptography and algorithms)

let str1 = "Hello"
let str2 = " World"  //space is given in beginning to prevent strings, joining.

let str3 = str1 + str2 
console.log(str3);     //o/p: hello world



//lets discuss some complex situation in the problems
console.log("1" + 2);         //o/p: 12
console.log(1 + "2");         //o/p: 12
console.log("1" + "2");       //o/p: 12
console.log("1" + 2 +  2);    //o/p: 122
console.log(1 + 2 + "2");      //o/p: 32
console.log((3 + 4) * 5 % 3);
//this type of above operations, isn't a good coding practice.. not usable in big tech companies, but if want to search in detail about the logic, read the emma script JS documentation

// not good coding practice 
console.log(+true); //o/p: 1
// console.log(true+); //o/p: error
console.log(+""); //o/p: 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2      //not readable code, hence not a good practice

//usable, topic is important => prefix and postfix
let gameCounter = 100;      //starting value
// gameCounter++;      //o/p: 101 => postfix precedence
++gameCounter;          //o/p: 101 => prefix precedence
console.log(gameCounter);

// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.


//some topics to go through.
//prefix and postfix topic: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
//conversion topic: https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion