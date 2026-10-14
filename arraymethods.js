// let firstprod=['abc','xyz','mno']
// let secprod=['lkm','jhn','jji']

// let third=['ooo']


// // concact()-->join two 0r more arrays and return a new array
// let allprod=firstprod.concat(secprod,third)

// console.log(allprod)


// join()-->converts an array into one string using a seperator

// let firstprod=['abc','xyz','mno']

// let result=firstprod.join('/')


// console.log(result)

// at()

// let fruits=['apple','orange','grapes']

// let res=fruits.at(-1)
// console.log(res)


// isarray()--to find is this actually an array
// let fruits='oo'

// console.log(Array.isArray(fruits))






// forEach()--it is an array method used to execute a funcation once fr every element in an array


// let fruits=[1,2,3]

// fruits.forEach((value)=>{
//     console.log(value*10)
// })





// let mark=[40,32,56,76,23]

// mark.forEach((val)=>{
//   if(val>=40){
//     console.log(val+"pass")
//   }
// })

// let fruits=['apple','orange','grapes']

// fruits.forEach((val,ind)=>{
//     console.log(ind+1,val)
// })


// map()  it is an array method that craete a new array by applying opearions to evry element of an array


// let productprice=[30,40,50,60]


// let updatePrice=productprice.map((val)=>{
// return  val*10
// })

// console.log(updatePrice)

// let fruits=[20,30,40]

// let result=fruits.map((val,ind)=>{
// return "updated amoount" + (ind+1) +" " +val*10
// })

// console.log(result)



// let prices=[500,1000,2000]

// let res=prices.map((val)=>{

//  let discount=val-100

//  return discount
     
// })
// console.log(res)



// let num=[10,20,30]

// let res=num.map((val)=>{
//     return val*10
// })


// let res=num.map((val)=>val*10)

// console.log(res)



// filter ()-> it is an arry method that create a new array containning only th eelements that satisfy specific condn 

// let num=[35,45,64,23,10]

// let pass=num.filter((val)=>{
//   return val>=40
// })

// console.log(
//     pass
// )

// let fruits=['apple','orange','guava','grapes']


// let num =[10,20,30,40,50,60,10,20]


// let res=num.filter((val,ind)=>{
//   return  val+2000

// })
// console.log(res)


// find ()==> its an array method that check each element and return the first eelement athat satisfy the cond
let num=[1,2,3,4,5,6,7,8,9]

let res=num.findLastIndex((val)=>{
  if(val%2==0){
    return val
  }
})

console.log(res)