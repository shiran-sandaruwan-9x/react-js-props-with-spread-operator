function sum(a,b,...rest){
    console.log(rest) // result == [3,4,5]
}
sum(1,2,3,4,5)

// function sum(a,b,...rest,e){
//   ...rest ekata piti passen monawath thiyanna ba error
// }

//------------------------------------------------------------------------------
let minValue=Math.min(1,2,3,4)
console.log(minValue) // result 1
//------------------------------------------------------------------------------
let array1= [4,5,6,7,8]
// convert array into list of items == [4,5,6,7,8] == 4,5,6,7,8
let minValue1=Math.min(...array1)
console.log(minValue1) // meka answer = 4
//------------------------------------------------------------------------------
let minValue2=Math.max(5,6,7)
console.log(minValue2) // meka 7
//------------------------------------------------------------------------------
let num1 = [1,2,3]
let num2 = [...num1,4,5,6]
console.log(num2) // result = [1,2,3,4,5,6]
//------------------------------------------------------------------------------
let obj1 = {
    name:'kamal',
    age:23
}
let obj2={
    ...obj1,
    address:'colombo',
    phone:77
}
console.log(obj2) // result = {name: 'kamal', age: 23, address: 'colombo', phone: 77}
//------------------------------------------------------------------------------




