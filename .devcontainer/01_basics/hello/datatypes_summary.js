//LECTURE-9
//useful for interview purposes

//in which way the data is kept in memory and acessed.. it is mainly based on 2 categorization of this data.. 1. PRIMITIVE & 2. NON-PRIMITIVE
//7 types: PRIMITIVE TYPES(value types): String, Number, Boolean, NuLL, undefined, Symbol, bigInt
//Symbol: to make any value unique, symbol is used.

const score = 100
const anotherscore = 100       //here both are defined as numbers, not as integer and float.
                               // hence there is no particluar way/need to define JS, hence JS ---> a dynamically typed language

const isLoggedIn = false
const outsideTemp = null      //it is not 0, it is completely empty

// let userEmail;      //o/p: undefined
//manually undefining a value:
let userEmail = undefined

//How to define Symbols (mostly used in React and stuffs).
const id = Symbol('123')    //if we want to define an id to a random string, indicating this should be unique, the return type we get  when we hover on this symbol keyword in vs code, is itself a symbol(indicating its a datatype in itself)
const anotherId = Symbol('123')     //when upon seeing it looks same, but even after passing same values(like string, number, etc), the result we'll get will not be the same
console.log(id === anotherId);   //o/p: false   //the return of symbol is symbol, can verify using typeof()


 
//Reference types(NON-Primitve): Arrays, Objects, Functions.
const heroes = ["shaktiman", "naagraag", "doga"]     //ARRAYS => [values]

let myObj ={        //OBJECTS: {key : value pairs}...values inside {} are objects, dataype can be anything => function, boolean, number, string, Array, another nested object
    name: "rohit",
    age: 22,
}

const myFunction =function(){       //function as a variable
    console.log("HELLO WORLD");
}
console.log(typeof myFunction);  //o/p: function //the return of function is called function object



/******************************STACK AND HEAP MEMORY*****************************************/
//LECTURE-10
//in old languages, like C, etc, there its the programmers duty to reserve the memory and free the memory for mostly all carried tasks
//but the mid modern level programming language, there is not much of access to the memory given to programmers, automatic garbage collection and stuffs are carried on in its own


//Stack => (used in PRIMITVE datatypes), HEAP => (used in NON-PRIMITIVE datatypes)
// stack memory => when variables are declared we get a copy
//heap memory => when memory is defined in heap/ object, array, etc is defined in heap then we get a reference to the original value(meaning; the change will be directly reflect in original value)

let myName = "Rohit Rathod"

let anotherName = myName
anotherName = "Rakesh jaiswal"

console.log(myName);        //o/p: Rohit Rathod
console.log(anotherName);   // o/p:Rakesh Jaiswal

//we changed the anotherName ka value, and since the o/p is the new initialised value, it depicts that the value of the original will not change(o/p of myNAme is Rohit Rathod)...
//...and thus the value it copied is from the duplication of myName in stack memory..
//in short original one isnt changed coz the one changed was the duplication of the original..hence COPIED BY VALUE.


//HEAP
let userOne ={
    email: "userone@google.com",
    upi : "userone@ybl.com"
}
let userTwo = userOne;
userTwo.email = "rohitrathod123@google.com"
console.log(userOne.email);
console.log(userTwo.email);
//hence the o/p will be same for both of the users bcoz it got copied by reference, in this case we changed userTwo.email and logged the email values for both, it was same for both
//...indicating the value of userTwo.email got copied by reference to userOne.email. hence copied by reference
