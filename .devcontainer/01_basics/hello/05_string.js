//string concatenation example(old and outdated method)
const name = "rohit"        //declaring a string
const repoCount = 40        //repositiries count

// console.log(name + repoCount + " Value");   //o/p: rohit40 Value  //old method, not a good coding practice
//modern way of writing strings --> string interpolation
console.log(`Hello my name is ${name} and my repo count is $repoCount} `);   
//use [console.log(${variable name})].. modern way of writing strings.. mostly backend code are written in this manner.
//and the symbol is not ''(single-inverted commas), but backticks(`  `)

//another way to declare a string
const myName = new String('Rohit Rathod')     
//when checked and see in browser console.. this give us as indefined, but after typing the variable name(i.e. myName here) in the next line, it shows us the value  of sting {'Rohit Rathod'}
//when checked, it also gives us the index numbers, and the names of the functions that can be tested/used in programs directly

//lets use/test functions from the console we got, incase of photo i'll update that in readme file
console.log(myName [0]);       //accessing variable at particular index
console.log(myName.__proto__);  //prototype

