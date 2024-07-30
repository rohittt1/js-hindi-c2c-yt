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
console.log(id === anotherId);      //the return of symbol is symbol, can verify using typeof()


 
//Reference types(NON-Primitve): Arrays, Objects, Functions.
const heros = ["shaktiman", "naagraag", "doga"]     //ARRAYS => [vaalues]

let myObj ={        //OBJECTS: {key : value pairs}...values inside {} are objects, dataype can be anything => function, boolean, number, string, Array, another nested object
    name: "rohit",
    age: 22,
}

const myFunction =function(){       //function as a variable
    console.log("HELLO WORLD");
}
console.log(typeof myFunction)  //o/p: function //the return of function is called function object



//in old languages, like C, etc, there its the programmers duty to reserve the memory and free the memory for mostly all carried tasks
//but the mid modern level programming language, there is not much of access to the memory given to programmers, automatic garbage collection and stuffs are carried on in its own

