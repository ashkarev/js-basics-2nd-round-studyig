// let marks=[60,50,40]


// let res=marks.every((val)=>{
//     return val>=40
// })

// console.log(res)


// sort() -->used to arrange elemeents in a  particular order

// let num=[10,2,5,1]

// let res=num.toSorted((a,b)=>{
// return b-a
// })

// console.log(num)



// reduce()-->takes all elements pf an array and reduces into one final value


// let numbers=[10,20,30,7]

// let res=numbers.reduce((a,b)=>{
   
//      return a+1
// },0)

// console.log(res)


// method chaining

// let num=[1,2,3,4,5,6,7]

// let result=num.filter((val)=>{
//     return val%2==0
// })
// .map((val)=>{
//     return val*3
// })

// console.log(result)


// array deconstructing 

// let fruits=['apple','orange','guava']

// let [first,...third]=fruits


// console.log(first)
// // console.log(second)
// console.log(third)


// let a=10
// let b=20
// let temp
// temp=a
// a=b
// b=temp
// console.log(a,b)


// let num=[1,2,3,4,5,6]

// let copy=num
// copy[0]=100

// console.log(num)
// console.log(copy)




// for of -->used to get the calues from an array



let fruits=['apple','orange','guaa']

for(let val of fruits){
    console.log(val)
}




// for in-->used to give the index values


for(let val in fruits){
    console.log(val)
}






