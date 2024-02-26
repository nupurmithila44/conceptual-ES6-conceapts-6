const numbars = [12, 32, 3, 5, 7,4];

// for (const num of numbars){
//     console.log(num);
// }

// const a = numbars.forEach(item=> item +1);
// console.log(a)

const b = numbars.map(item => item + 1);
console.log(b)


// find hosche khoje ber kora
const c = numbars.find(item=> item===32)
console.log(c)

// Filter 
const d =  numbars.filter(item => item>3)
console.log(d)

const e = numbars.filter(item=> item%2===1)
console.log(e)

// Reduce 
const f = numbars.reduce((preValue, currValue) => preValue+ currValue, 0)
console.log(f)
