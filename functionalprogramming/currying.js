const lodash = require('lodash')
import _ from lodash;

let dragon = (name, size, element) => //non curried  version of the function
  name + ' is one of  ' +
  size + ' dragons from that TV show '  +
  element + '!'

console.log(dragon('Drogon','Daenarys','Game of Thrones'))

let dragon2 = //this is the same function as above, but using currying.
  name =>
    size =>
      element =>
       name + ' is one of ' +
       size + ' dragons from that TV show ' +
       element + '!'

console.log(dragon2('Viserion')('Daenarys')('Game of Thrones'))

let dragon3 =
  name =>
    size =>
      element =>
      name + ' is one of ' +
      size + ' dragons from that TV show ' +
      element + '!'

let rhaegal = dragon3('Rhaegal') //you can break out the arguments and assign it to a variable and then refer to it when you call the function.
let gotCharacter = rhaegal('Daenarys') //because the variable rhaegal refers to the dragon3 function, you

console.log(gotCharacter('Game of Thrones'));

let dragons = [
  {name: 'fluffykins', element: 'lightning'},
  {name: 'noomi',      element: 'lightning'},
  {name: 'karo',       element: 'fire'},
  {name: 'doomer',     element: 'timewarp'}
]

let hasElement =
(element, obj) => obj.element === element

let lightningDragons =
  dragons.filter(x => hasElement('lightning', x)) //filter takes a call back that gets every item in the array, and that item will be checked against the hasElement() function, passing in the arguments 'lightning' and the object.

/*curried version of the same thing

let hasElement =
_.curry((element, obj) => obj.element === element) 'Currying this function, means that when we call 'hasElement' with lightning as an 'argument, hasElement will return a new function. Which in turn, expects to be passed the object to check
                                                    if it has that element 'lightning'. this allows us to pass it as the call back function, to filter directly.

let lightningDragons =
  dragons.filter(hasElement('lightning') currying allowed us to remove the wrapped function here.


let dragon4 = (name, family, region) => //non curried  version of the function where we will use a curry() function
  name + '  of house ' +
  family + ' is from the region of '  +
  region + '!'

let dragon5 = _.curry(dragon4)

This section isnt working

console.log(dragon4('Jamie','Lannister','Westeros'))*/
