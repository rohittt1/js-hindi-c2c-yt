const acountId = "144553"
let accountEmail = "rohit@google.com"       
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;           //o/p : undefined in js, if not given value

// it is not mandatory to use semi-colon in JS..Completely optional.
//  theoretical basic: in javascript, there are some constant keywords.
//  In (.txt) file and (.js) file, the main difference is of this keywords, this keywords, In a compiler(like nodejs for JS or  v8)...there are some syntax defined... like console.log for output and var, let, const--->assign it to a memory

// accountId =2 --> const cant be changed, not allowed.

accountEmail = "hchc@hc.com"
accountPassword = "212121"
accountCity = "Bengaluru"  //Prefer not to use var, bcoz of issue in block scope or functional scope

console.table([accountEmail, accountPassword, accountCity, accountState]);    //used for logging multiple values at one time using table method