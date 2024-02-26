// primitive datatipe 
const x =5;
const y = true;
const a = "methila";

let c=x;
c=10;
console.log("c", c);
console.log("x", x)


// non primitive datatype

// part 1
const b = {name: "mededy"};
let d =b;
d.age=25;
console.log("b", b)

// part 2
const nums = [1, 2,3]
let nums1 =nums;
nums1.push(7);
console.log(nums1)

// part 3
const num =[1, 3,5, 6, 4];
const num2 = num;
num2.push(12)
console.log(num2)


// truthy and falsy value :-
// part 1
// falsey value => false, 0, ""empty String, undefined, null, NaN;
// truety value => true, "methila", 1231, 1, [],{},"false", "0";

const value = 123
console.log(!!value)

