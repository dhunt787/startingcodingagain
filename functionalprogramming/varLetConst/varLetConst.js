"use strict"; /* we use this decleration because in ECMA script 6, immediately declared variables in a function
var i = 99999
;(function () {
  for (var i = 0; i < 10; i++){
    console.log(i);;
  }
})() //this is an example of an immediately invoked function or IIFE. Notice the () immediately after the function block ends.
  console.log('after loop' , i); output will be 9999 because the variable i in the function is 'scoped' to the function, because the value of i as the index of the loop is not available outisde the function.

 var i = 99999
  ;(function () {
    for (i = 0; i < 10; i++){
      console.log(i);;
    }
  })()
    console.log('after loop' , i); //But it we remove the 'var'keyword from the function, the value of the variable becomes 10, throughout the script, because that makes it globally available.
                                    This is because the non declared variables are 'hoisted' to the top of the script of the functional chain
var i = 99999;
  (function() {
    for (i = 0; i < 10; i++) {
      console.log(i);;
    }
    var i; //In this example, we are declaring the variable in the function. But remember the i will be hoisted to the top of the function, before the loop. So the change of the value of i in the loop will not be available outside the loop
  })()
  console.log('after loop', i);


var i = 99999;
    (function() {
      for (let i = 0; i < 10; i++) {
        console.log(i);;
      }
      if (true){
        let i = 888888
      }
    })()
console.log('after loop', i);  //Value will still be 99999 because you have used 'let' in the function, so the variable change is scoped to the function scope

var i = 99999;
    (function() {
      for (let i = 0; i < 10; i++) {
        console.log(i);;
      }
      if (true){
        i = 888888 //If I do not use let here, the value of i is overwriting the decleration of i at the top of this secion of script
      }
    })()
console.log('after loop', i);

//use of const decleration

let y = 8
y = 5

console.log("this is y: " , y); //variables declared with let can be reassigned. So the output from this will be 5.

const x = 8
x = 10 //this will give you an error to say that reassignment of a const is not possible

But if use an object literal

const x = {
  y: 5
}
x.y = 6 //x plus y = 6

You can change the property of a object literally that is a constant, but you cannot completely ressign it. like below. That will give you an error.

*/

const x = {
  y: 5
}
x.y = 6
x = {
  z: 9
}
console.log(x);
