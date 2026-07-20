// toUperCase()
// toLowerCase()
// trim()
// trimStart()
// trimEnd()

const email1 = 'ronithussain@gmail.com ';
const email2 = ' RonitHussain@gmail.com';

// if(email1.toLowerCase() === email2.toLowerCase()){
//     console.log('welcome to the website...')
// }else{
//     console.log('DGM--->...')
// }

// if(email1.toLowerCase().trim() === email2.toLowerCase().trim()){
//     // console.log('happy for this')
// }else{
//     // console.log('not happy')
// }

// console.log(email1.toLowerCase().trimEnd())

// if(email1.toLowerCase().trimEnd() === email2.toLowerCase().trimStart()){
//     console.log('happy for this')
// }else{
//     console.log('not happy')
// }

if(email1.toUpperCase().trim() === email2.toUpperCase().trim()){
    console.log('Your are the best')
}else{
    console.log('Fucking beach...')
}