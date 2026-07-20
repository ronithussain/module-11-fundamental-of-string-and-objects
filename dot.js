const person = {
    name: 'Amal Malik',
    student: true,
    age: 25,
    isRegular: false,
    'home-address': 'Dhaka',
    favouriteFood: 'Jackfruits'
}
// console.log(person)
// console.log(person.name)
// console.log(person['age'])
// console.log(person['home-address'])

person.name = 'Ronit Hussain';
// person.age = 28;
person['age'] = 28;
person['home-address'] = 'Dinrajpur';
// console.log(person)

// loop:
for(const p in person){
    console.log(p)
}
