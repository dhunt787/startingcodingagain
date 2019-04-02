//Here is an example of functional programming.
//Functional programming is good for 'composition'- i.e. that we can compose a function, assign it to a variable and then pass it into another function.

var triple = function(x) { //In functional programming, you can declare an anonymous function and then assign that function to a variable. You can then pass that functiona around in your script/app.
  return x * 3
}

var waffle = triple

waffle(30)

console.log('This is the function waffle: ', waffle)

var animals = [
  { name: 'fluffykins', species: 'rabbit'},
  {  name: 'Murphy', species: 'dog'},
  {  name: 'Milo', species: 'cat'},
  {  name: 'Jimmy', species: 'fish' },
  {  name: 'Jack', species: 'dog'}
  ]

/*we want to pull out the dogs from the animals array and push it to a new array called dogs. manually looping through the array and return the items that are dogs, would be the way of achieving this with non-functional programming.
var dogs = []
for(var i = 0; i < animals.length; i++) {
  if (animals[i].species === 'dog')
    dogs.push(animals[i])
}

//but lets rewrite this using the filter function

var dogs = animals.filter(function(animal) {
 return animal.species === 'dog'
})*/



var isDog = function(animal) { //We are breaking out the call back into a seperate function.
  return animal.species === 'dog' //All this does is check that an object is a dog. Its completely decoupled from the filter() method
}

var dogs = animals.filter(isDog) //you are passing the 'isDog' function as an argument into the new function 'dogs' and then using the filter() method
//var otherAnimals = animals.reject(isDog)

console.log('This is the new dogs array: ' , dogs);
//console.log('There are the other animals in the array: ' , otherAnimals);

/* filter() accepts one argument - another function
functions where you pass in another function are called 'callback' functions.
This is because the host function will call back to them.
filter will loop through each item in the array
for each item, it is going to pass it into the 'callback' function
It will expect the callback function to return either a true or false, to specify if the the item should or should not be in the new dog array
You a function, with a call back function, slot it into each other, so they are composable.
with functional programming, you can break down your code into small, simple functions and reuse them to write less code with less bugs.
*/
