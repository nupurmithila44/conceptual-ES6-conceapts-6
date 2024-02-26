const number = [2, 4, 1];
const numbers = number;
numbers.push(20);
number.push(10);
// console.log(number)
// console.log(numbers)


const number1 =[];
for(const num of number){
    number1.push(num);

}
// console.log(number1)


// Spreading Array 
const num = [2, 5, 4, 3, 7,];
const num1 = [...num];
num1.push (3);
// console.log(num)
// console.log(num1)


// rest operator 
const nums = [20, 12, 3, 45, 3,5, 6];
const [a,b,c,...d]=nums;
const as =[3]
console.log(a,b,c,d)
console.log(as)
