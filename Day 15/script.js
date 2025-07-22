
//  arrow function

let sum = (a,b)=> {
    return a+b
}

console.log(sum(10,20))

// reverse function 

var arr = [1,2,3,4,5,6,7,8,9]
let reverse = ()=>{
    return arr.reverse()
}

console.log(reverse())

// higher order funstion 

// higher order nc is use to receive a another func is caled as higher order function
// func as an parameter as receive a another func 

let add = (a,b)=>{
   console.log(a+b)
}

let mul = (a,b)=>{
   console.log(a*b)
}

let div = (a,b)=>{
    console.log(a/b)
}

let sub = (a,b)=>{
    console.log(a-b)
}

operation = (add,sub,mul,div)=>{  // this operation finc is a higher order function 
    add(10,20)
    mul(10,20)
    div(10,20)
    sub(10,20)

}

operation(add,sub,mul,div)

const higherOrderFunction = (func)=>{
    console.log("Higher order function")

    const add = (a,b)=>{
        console.log(a+b)
    }
    func(add(10,20))
}

higherOrderFunction(add)