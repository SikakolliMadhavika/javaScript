//  Question - 1

function findLarger(num1, num2, callback){
    return callback(num1, num2)
}
console.log(findLarger(12, 20, (num1, num2) => {
    if (num1>num2){
        return num1 + 5
    }
    return num2 + 5
}))


//  Question - 2

function calculate(num1, num2, callback){
    console.log(callback(num1, num2))
}
calculate(10, 5, (num1, num2) => {
    if(num1 > num2){
        return (num1 + num2)*3
    }
    if(num2 > num1){
        return (num2 - num1)*3
    }
    return 0
})

// Question - 3

function checkEvenOdd(num, callback){
    if (callback(num) == 'even'){
        return "Even Number"
    }
    return "Odd Number"
}
console.log(checkEvenOdd(8, num => {
    if (num%2 == 0){
        return 'even'
    }
    return 'odd'
}))

//  Question - 4

function checkSign(num, callback){
    return callback(num) + " Value"
}
console.log(checkSign(-10, num => {
    if(num>0){
        return "Positive"
    }
    if (num<0){
        return "Negative"
    }
    return "Zero"
}))

//  Question - 5

function multiplyConditionally(num1, num2, callback){
    console.log(callback(num1, num2))
}
multiplyConditionally(4, 6, (num1, num2) => {
    if (num1 > num2 ){
        return num1*num2*4
    }
    if(num2 > num1){
        return (num1 + num2)*4
    }
    return num1 * 4
})
