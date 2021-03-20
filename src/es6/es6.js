let myInteger = 123//variable is defined based on what we assigned
let myString = "QWE"
let someObject = {
  anIntegerProp: 123,
  aStringProp: "123123",
  anObjectProperty: {
    anotherObjectProp: {q: 111, w: 222},
    anotherArrayProp: [321, 432, 543]
  },
  aNumberArrayProp: [1, 2, 3],
  anObjectArrayProp: [
    {a: 123, b: 234}, {a: 321, b: 432}]
}

// console.log(someObject.anObjectProperty.anotherObjectProp.q)
console.log(someObject["anObjectProperty"].anotherObjectProp.q)

//the advantage of being string in here is we can dynamically remove or change the property on the fly.
let anotherObject = {}
anotherObject["newProp"] = 123
console.log(anotherObject.newProp)

function addEs5(a, b) {
  return a + b
}
let ewq = addEs5(2,3)
console.log(ewq)

// const addEs6 = (a, b) => {
//   console.log(a, b)
//   return a + b
// }
const addEs6 = (a, b) => a + b

ewq = addEs6(2, 3)
console.log(ewq)

// const square = (b) => b * b
// const square = b => b * b
// ewq = square(4)
// console.log(ewq)


let all = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let even = all.filter((i) => {
//   return i % 2 === 0
// })
// let even = all.filter(function (i) {
//   return i % 2 === 0
// })
let even = all.filter(i => i % 2 === 0)//if lambda function returns true, print that, otherwise skip that.
let odd  = all.filter(i => i % 2 !== 0)
console.log(all, even, odd)

//long version of lambda function for filter.
// let even3 = all.filter(function (i) {
//   return i % 2 === 0
// })

let even2 = all.filter( i => i % 3 === 0)

// let even2 = all.filter( i => {
//   console.log(i);
//   return i % 3 === 0
// })
console.log("here I am:" + even2)

all = [1, 2, 3, 4]
let square = all.map(i => i * i)
console.log(all, square)

let cube = all.map(i => i * i * i)
console.log("---->" + cube)

//If we don't send y and z parameter to the function, it uses 7 and 42 instead.
const f = (x, y=7, z = 42) => {
  return x + y + z
}

console.log(f(1))//prints 50

let array = [1,3,4,2,5]
console.log(array.find(x => x > 3))
console.log(array.findIndex(x => x > 3))
console.log(array.filter(x => x > 3))

// var customer = {name:"Alice"}
// var card = {amount:7, product: "Bar", unitprice: 42}
// var message = "Hello" + ${customer.name} + ", want to buy " + ${card.amount} ${card.product} + " for a total of " + ${card.amount * card.unitprice} + " bucks?"
// console.log(message)

var list = [1,2,3]
var [a,,b] = list
var a, b
[b,a] = [a,b]
console.log("b = " + b)
console.log("a = " + a)

var tmp = {a:"123", b:"234", c:"345", d:"456"}
var {a, c} = tmp
console.log("a = " + a)
console.log("c = " + c)


//When the parameter is object, the order of parameters in the function header can be changed and also they can be renamed
const h = ({ val:v, name:n }) => {
  console.log(n, v)
}
h({name: "bar", val: 39})


//When the parameters are given as array, the order cannot be changed and parameters cannot be renamed, order does matter
function func ([name, val]){
  console.log(name, val)
}
func(["bar", 28])


x = 0, y = 0
obj = {x,y}
console.log(obj)

a = {"b": 1, "c": 2};
x = a["c"];
console.log(x)

