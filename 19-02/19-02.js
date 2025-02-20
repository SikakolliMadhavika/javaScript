// Question - 1
// using anonymous
function processNumbers( num1, num2, callbackfun){
    return callbackfun(num1 , num2)
}
var result = processNumbers(3, 4, function(x,y){
    return x + y
})
console.log("Sum is",result)

// using arrow
function processNumbers(num1, num2, arrowfun){
    return arrowfun(num1, num2)
}
var res = processNumbers(3,4,(x,y) => x+y)
console.log("Sum:",res)



// Question - 2
// using anonymous
function greet(callbackfun){
    return callbackfun("Alice")
}
var result = greet(function(name){
    return "Hello, ["+name+"]!"
})
console.log(result)

// using arrow
function greet(arrowfun){
    return arrowfun("Alice")
}
var res = greet(name => "Hello, ["+name+"]!")
console.log(res)


// Question - 3
// using anonymous
function calculate(num1, num2, callbackfun){
    return callbackfun(num1,num2)
}
var res=calculate(10,5,function(x,y){
    return "Difference is "+ (x-y)
})
console.log(res)


// using arrow
function calculate(num1, num2,arrowfun){
    return arrowfun(num1, num2)
}
var res = calculate(10,5,(x,y) => x-y)
console.log("Difference:",res)