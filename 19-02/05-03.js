// create an array
var arr1 = [1, 27, 37, 749, 26]
console.log(arr1)


// access an element
var arr2 = ['hii', 12, false, 5565, 'hlo']
console.log(arr2[2])


// change an element
var arr3 = [1,45,6,8,89]
arr3[1] = 4757
console.log(arr3)


// find length
function findLength(arr4){
    return arr4.length
}
console.log(findLength([12,345,567,899]))


// add an element
arr5 = [1,2,3,4,45]
arr5.push(324)
console.log(arr5)



// pop an element
arr6 = [1,2,3,4,5,6,7,78]
arr6.pop()
console.log(arr6)


// loop to print array
arr7 = [1,2,3,4,5,6,7]
for(var i=0; i<arr7.length;i++){
    console.log(arr7[i])
}
console.log('------------------------------------')

// orr
for( var element of arr7){
    console.log(element)
}

console.log('------------------------------------')
// orr
for( var index in arr7){
    console.log(arr7[index])
}



// check the element
arr8 = [1,235,667,7989]
var val = 12
var bool = false
for( var element of arr8){
    if (element === val)
        bool = true
}
if(bool)
    console.log('Element Exists')
else
    console.log('Element Not exists')



// copy an array
arr9 = [1,'good', 3.77, 646]
arr_copy = arr9.slice()
console.log(arr_copy)


// convert array to string
arr10 = ['hello', true, 1244, 'hii', function(){}, '2.34']
console.log(arr10.join())