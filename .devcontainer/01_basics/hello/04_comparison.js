// console.log(2 > 1);     //true
// console.log(2 >= 1);    //true
// console.log(2 < 1);     //false
// console.log(2 == 1);    //false
// console.log(2 != 1);    //true

console.log("2" > 1);    //true   //JS automatic changes this 2 strings as numbers, hence takes only numeric values but is actually a string
console.log("02" > 1);   //true


console.log(null > 0); //false
console.log(null ==0);  //false

console.log(null >= 0);  //true
//the reason is that an equality check == and comparisons >, <, >=, <= work differently in JS
//Comparisons convert null to a number, treating it as 0. that's why line 14 null>= 0 is true and line 11 null>0 is false.

console.log(undefined == 0);    //false
console.log(undefined > 0);     //false
console.log(undefined < 0);     //false //undefined will give FALSE with every of the comparisons operator

//we should mostly avoid the comparison of undefined and null due to its inconsistency

// strick check (===): this 3 equality operation not only checks(==), but strictly checks the expression/operation
//it also checks its datatypes, values very strictly
console.log("2" === 2);  //hence in reference of line 4, the o/p of this expression will be FALSE, because the datatypes are not same(i.e. strict check)

