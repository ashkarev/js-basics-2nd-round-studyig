// loop in an array
// let fruits=['apple','banana',"grapes"]

// let num=[1,2,3,4,5]

// for(let i=0;i<num.length;i++){
//     console.log(num[i])
// }

// for(let i=num.length-1;i>=0;i--){
//     console.log(num[i])
// }

// let num=[1,4,6,7,8,10]

// let evencount=0

// for(let i=0;i<=num.length-1;i++){

//     if(num[i]%2==0){
//   evencount++
//     }

// }

// console.log(evencount)

// let fruits=['apple','orange','grapes']

// let newfruits=[...fruits]

// newfruits.push('guava')

// console.log(newfruits)

// console.log(fruits)

// spread opeartor

let num = [2, 4, 8, 1, 7, 9];
let largest;
let secondlargest;
if (num[0] > num[1]) {
  largest = num[0];
  secondlargest = num[1];
} else {
  largest = num[1];
  secondlargest = num[0];
}
for (let i = 0; i <= num.length - 1; i++) {
  if (num[i] > largest) {
    secondlargest = largest;
    largest = num[i];
  } else if (num[i] > secondlargest) {
    secondlargest = num[i];
  }
}
console.log(largest);
console.log(secondlargest);

