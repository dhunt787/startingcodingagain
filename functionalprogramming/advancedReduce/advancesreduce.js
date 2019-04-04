var fs = require('fs')
//The functions applied to the string output are executed from left to right. Syntax wise the functions are written the same as var output = fs.readFileSync('data.txt', 'utf8').trim().split.('\n').map etc, its just that are on different lines for presentation reasons. This is called 'Chaining'
var output = fs.readFileSync('data.txt', 'utf8') //You need to specify the characting encoding, otherwise the read in file will be read out as a line of bytes. utf8 is probably the most familiar character encoding.
  .trim() //removes line breaks etc at the start of a string
  .split('\n') // \n is a line break (or carriage return). The split method will split the read in file by line breaks
  .map(line => line.split('\t')) //converts the objects into a more manageable object. maps every line and then splits it via \t (tab characters). The paramater does not need to be declared because the function is called after the .split() function, so the parameter is the output from that function.
  .reduce((customers /*object we are constructing*/, line /*What we are iterating*/) => {
    customers[line[0]] = customers[line[0]] || [ /*This means to use the existing array, if there is one. If not create a new array*/ ] //Creates a new array for each of the fist elements in the output from the .map() function. output will be { 'mark johannsson': [], 'Nikkita Smith': [] }
    customers[line[0]].push({ //pushes the item at index 0 to the existing or new array.
      name: line[1],
      price: line[2],
      quantity: line[3]
    })
    return customers
  }, {}) //We are using an 'object literal' as our starting point, instead of a number.

console.log('output', JSON.stringify(output, null, 2)); //We created a JS
