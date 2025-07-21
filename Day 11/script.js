// array
// array type in javascript is object

let a = [1,2,3,4,5,6,7,8,9,10]

for(i=0; i<a.length ;i++)
{
    console.log(a[i])
}

let day = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

for(i=0; i< day.length ;i++)
{
    console.log(day[i])
}


let colors = ["red","green","blue","yellow","orange","white" , "black", "pink" , "brown" , "purple", "grey" , "silver" , "gold" , "platinum" , "titanium" , "diamond"]

for(i=0; i< colors.length ;i++)
{
    console.log(colors[i])
}


// we add element before array 

let arr = [1,2,3,4,5,6,7,8,9,10]

arr.unshift(111) //add element in array in array first  .......... [ unshift method return a new array length ]
arr.shift() //remove element from array
console.log(arr)


// Push() : add element in array last element
// Pop() : remove element in array last element 

let arr1 = [1,2,3,4,5,6,7,8,9,10]

arr1.push(111) //add element in array in array first
arr1.pop() //remove element from array

console.log(arr1)



let fruts = ['mango' , 'apple' , 'banana' , 'orange' , 'grapes']

fruts.splice(1,2,'kiwi','pineapple') 

console.log(fruts)


// 6 . number.sort()

let arr2 = [1,5,1,4]

arr2.sort()

console.log(arr2[arr2.length-1])

let a1 = arr2.indexOf(1)
console.log(a1)


arr2.includes(1)
console.log(arr2.includes(1))
