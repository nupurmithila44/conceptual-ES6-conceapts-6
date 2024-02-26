const person = {
    name: "hanifa khatun",
    age: 43,
    phone: "013527584",
    address: "bari nai",
    p: [1, 2, 3, 4, 5],
    address:{
        zilla: "rajshahi",
        village:"rajbari",
    }
}
// const person1 ={...person};
// person1.email='hello@gmail'
// // console.log(person)
// console.log(person1)


// const{name, age, address}=person;
// const {village}=address
// console.log(village)

const {name,...rest}=person;
console.log(name)
