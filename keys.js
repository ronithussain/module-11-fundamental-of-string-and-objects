const student ={
    name: 'Hussain',
    id: 122,
    class: 'Three',
    subject: 'Management',
    isAPlus: false,
    isRegular: true,
    isSingle: true
}
console.log(student);

delete student.isSingle;
console.log(Object.keys(student));
console.log(Object.values(student))