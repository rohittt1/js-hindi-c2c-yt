//string concatenation example(old and outdated method)
const name = "rohit"        //declaring a string
const repoCount = 40        //repositiries count

// console.log(name + repoCount + " Value");   //o/p: rohit40 Value  //old method, not a good coding practice
//modern way of writing strings --> string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}` );   
//use [console.log(${variable name})].. modern way of writing strings.. mostly backend code are written in this manner.
//and the symbol is not ''(single-inverted commas), but backticks(`  `)

//another way to declare a string
const myName = new String('My-Name-is-Rohit-Rathod')     
//when checked and see in browser console.. this give us as indefined, but after typing the variable name(i.e. myName here) in the next line, it shows us the value  of sting {'Rohit Rathod'}
//when checked, it also gives us the index numbers, and the names of the functions that can be tested/used in programs directly

//lets use/test functions/methods from the console we got, incase of photo i'll update that in readme file
console.log(myName [0]);       //accessing variable at particular index
console.log(myName.__proto__);  //o/p: {} //(string) //protoype is nothing but type identifier

console.log(myName.length);     //12

console.log(myName.toUpperCase());  //ROHIT RATHOD
console.log(myName.toLowerCase());  //rohit rathod
//when seen the output, we can see that  this string hasn't changed the original string as seen previously in datatypes_summary.js about call by value in stack memory.

console.log(myName.charAt(3)); //this method gives the character at a particular index  //o/p: i

console.log(myName.indexOf('t'));   //method to know the index no. of a character   //o/p: 4


//substring() method
// const newString = myName.substring(0,4)     //subsrtring will  give u string, from the pre-defined string. here, we are storing  it in a variable(newString)
//here, we have to focus on syntax (variableName.substring and (0, 4)) ---> 0 is starting point of index and 4 is ending point of index
// console.log(newString);      //o/p: Rohi

//slice() method
const anotherString = myName.slice(-2, 4)    
console.log(anotherString);         
//slicing is same as substring but we can give negative values in this, when given negative values, it starts from reverse.

//lets check if we can use negative values in substring:
const newString = myName.substring(-4, 4)
console.log(newString);         //here, it is visible that, even if u give -ve values, the substring(), will not follow it, and use its starting index(0), for substring


//trim() and replace() method
//trim method
const newStringOne = "    hitesh    "   //when making forms for a website, users might input extra space characters, hence to avoid this extra space characters to be not saved in database, we use trim()
console.log(newStringOne);              //o/p:[hitesh]
console.log(newStringOne.trim());       //o/p: [   hitesh   ]
//there are more methods as, trimstart(), and trimend(), check trim() method javascript mdn
//note: trim(): it trims both starting and ending

//replace method
const url ="https://hitesh.com/hitesh%20choudhary"   //in browsers, if there is a space in b/w textx, it directly replaces it with %20, hence we can replace this with whatever special character i want
//such as
console.log(url.replace('%20', '-'));       //o/p: https://hitesh.com/hitesh-choudhary, replaced %20 with (-)

console.log(url.includes('hitesh')) //basically, this .include(), tells if the string contains the following text.  //o/p: true
console.log(url.includes('jam'));   //o/p; false

//if want to convert string into an array, basis on what? it can be any symbol or anything
//split() method
// console.log((myName.split('-')));   //o/p: [ 'My', 'Name', 'is', 'Rohit', 'Rathod' ]
// console.log(myName.split(' '));     //o/p: [ 'My-Name-is-Rohit-Rathod' ]
console.log(myName.split(''));
 //o/p:
/*[
    'M', 'y', '-', 'N', 'a',
    'm', 'e', '-', 'i', 's',
    '-', 'R', 'o', 'h', 'i',
    't', '-', 'R', 'a', 't',
    'h', 'o', 'd'
  ]*/


//summary: follow the backticks syntax for strings, not commas, and plus
//read more about strings on mdn docs, give 15-20 mins learning about more execution of strings,
//... for list of methods, see console, first initialse a string, then see the methods available.
