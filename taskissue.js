// let word='programming'

// let ch='r'

// let first=-1
// let last=-1

// for(let i=0;i<word.length;i++){
//     if(word[i]==ch){
//        if(first==-1){
//         first=i
//        }
//        last=i
//     }

// }

// console.log(first,last)

// let word1="listen"
// let word2="silent"

// let ans1=word1.split("").sort().join("")

// console.log(ans1)

// let sentence="apple banana orange eat grape"

// let word=sentence.split(' ')
// console.log(word)
// let count=0

// for(let i=0;i<word.length;i++){
//     if(word[i][0]=="a" || word[i][0]==)
// }

// let sentence = "apple mango banana apple garpes apple guava";
// let word = sentence.split(" ");
// let result = "";

// let maxCount = 0;

// for (let i = 0; i < word.length; i++) {
//   let count = 0;
//   for (let j = 0; j < word.length; j++) {
//     if (word[i] == word[j]) {
//       count++;
//     }
//   }

//   if (count > maxCount) {
//     maxCount = count;
//     result = word[i];
//   }
// }
// console.log(result, maxCount);

// let word2="missisippi"

// let marks = [85, 34, 56, 76, 32, 40, 45];

// highest lowest,avg,passed coutn

// let highest = marks[0];
// let lowest = marks[0];
// let sum = 0;
// let passed = 0;

// for (let i = 0; i < marks.length; i++) {
//   if (marks[i] > highest) {
//     highest = marks[i];
//   }

//   if (marks[i] < lowest) {
//     lowest = marks[i];
//   }

//   sum = sum + marks[i];

//   if (marks[i] >= 40) {
//     passed++;
//   }
// }

// let avg = sum / marks.length;

// console.log(highest);
// console.log(lowest);
// console.log(avg);
// console.log(passed);

// let prices = [300, 450, 600, 100];
// let total = 0;
// let discount = 0;

// for (let i = 0; i < prices.length; i++) {
//   total = total + prices[i];
// }

// if (total > 1000) {
//   discount = total * 0.1;
// }

// let finalAmout = total - discount;

// console.log(discount);
// console.log(finalAmout);

// let numbers=[1,2,3,5,9,10]

// for(let i=0;i<=10;i++){
//     if(!numbers.includes(i)){
//         console.log(i)
//     }
// }

// let marks=[95,34,72,97,88,65,45]
// let A=0
// let B=0
// let C=0
// let fail=0

// let array1=[10,20,30,40,50]
// let array2=[40,30,60,70,80]

// let common=[]

// for(let i=0;i<=array1.length;i++){
//     if(array2.includes(array1[i]) && !common.includes(array1[i])){
//         common.push(array1[i])
//     }
// }
// console.log(common)

// let sales=["monitor","mouse","laptop","mouse","keyboard","mouse"]

// let numbers = [2, 4, 3, 5, 7, 8, 1];
// let target = 9;

// for (let i = 0; i < numbers.length; i++) {
//   for (let j = i + 1; j < numbers.length; j++) {
//     if (numbers[i] + numbers[j] == target) {
//       console.log(numbers[i], "+", numbers[j], "=", target);
//     }
//   }
// }

let numbers = [3, 2, 4, 6, 7, 8, 10, 12, 5, 14];

let longest = [];

let curent = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    curent.push(numbers[i]);
  } else {
    curent = [];
  }

  if (curent.length > longest.length) {
    longest = [...curent];
  }
}

console.log(longest);
