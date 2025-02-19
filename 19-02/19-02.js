// Question - 1
function processNumbers( num1, num2, callbackfun){
    return callbackfun(num1 , num2)
}
var result = processNumbers(3, 4, function(x,y){
    return x + y
})
console.log("Sum is",result)


// Question - 2
function greet(callbackfun){
    return callbackfun("Alice")
}
var result = greet(function(name){
    return "Hello, ["+name+"]!"
})
console.log(result)


// Question - 3
function calculate(num1, num2, callbackfun){
    return callbackfun(num1,num2)
}
var res=calculate(10,5,function(x,y){
    return "Difference is "+ (x-y)
})
console.log(res)