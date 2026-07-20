const comitment = 'I will work hard and will never give up';
const parts = comitment.split('');
// console.log(parts)
// console.log(Array.isArray(parts))

const reversedParts = parts.reverse();
// console.log(reversedParts);

const reverseComitment = reversedParts.join('');
// console.log(reverseComitment);

// loop:
let reverseCom = '';
for(const letter of comitment){
    // console.log(letter);

    reverseCom = letter + reverseCom;
    console.log(letter, '=>', reverseCom);
}
console.log(reverseCom);