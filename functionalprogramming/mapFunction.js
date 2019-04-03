var animals = [
  { name: 'fluffykins', species: 'rabbit'},
  {  name: 'Murphy', species: 'dog'},
  {  name: 'Milo', species: 'cat'},
  {  name: 'Jimmy', species: 'fish' },
  {  name: 'Jack', species: 'dog'}
  ]

  /*var names = []
  for(var i = 0; i < animals.length; i++) {
      names.push(animals[i].name)
  } loops through the animals array and pushs the name property of each of the KVPs at index i of the array until complete*/

/*  var names = animals.map(function(animal){
    return animal.name + ' is a ' + animal.species
  })
*/

//Lets rewrite the function using an arrow functions and on one line

var namesMapExample = animals.map(function(animal) { return animal.name})
var names = animals.map((x) => x.name + " is a " + x.species) //its common in functional prorgamming to shorten the variable names to x
var namesLoopExample = []; for(var i = 0; i < animals.length; i++) { namesLoopExample.push(animals[i].name) }


console.log('namesMapExample: ', namesMapExample);
console.log('namesFatArrowExample', names);
console.log('namesLoopExample', namesLoopExample);

/*Map is different from filter.
Filter function returns a boolean value to say if the returned item should be included in the array or not.
But map will expect the call back function to return a 'transformed' array
Since map expects the callback to return any object, we can use it to return completely new objects
So we can add the 'is a ' animal.species line to return statement

*/
