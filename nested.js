const college = {
    name: 'Titumir collage',
    address: 'Dhaka',
    student: 800,
    events: ['21 feb', 'Independent Day', 'Victory day'],
    people: {
        count: 200,
        principle: {
            name: 'Jotindro Mukul',
            yearOfExperience: 25,
            degree: 'English'
        }
    }
}
// console.log(college);
// console.log(college.people.principle.degree);
// console.log(college['people'].principle['degree'])

college.name = 'Adarsha college'
college['people']['principle']['degree'] = 'Mathmatics';
college.events[2] = 'Eid ul fitor';
console.log(college);

// console.log(Object.entries(college));
const entries = Object.entries(college);
console.log(entries);

for(const [key, value] of entries){
    console.log( key + ' => ' + value);
}