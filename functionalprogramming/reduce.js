var orders = [{
    amount: 250
  },
  {
    amount: 400
  },
  {
    amount: 100
  },
  {
    amount: 325
  }
]

/*var totalAmount = orders.reduce(function(sum, order) {
  console.log("This is the sum: " + sum + " and this is the order: " , order)
  return sum + order.amount
}, 0)*/

//the function above is the same as the function below, but it is written with a function array.

var totalAmount = orders.reduce((sum: order) => sum + order.amount)
console.log(totalAmount);

/*Like map and filter, it takes a 'callback' function.
But unlike map and filter, it wants an object. That object will be zero
You can think of this object as a starting point for our sum.
sum is passed as the first argument to the reduce() call back.
just like map and filter it will receive the iterated item, but its going to be the second argument - order
*/
/*var totalAmount = 0
for(var i = 0; i < orders.length; i++) {
    totalAmount += orders[i].amount
}*/
