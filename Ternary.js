/**
 * Ternary --->Three Parts 
 * condition ? do something when true : do something when false 
 */



// simple ternary 
const age=20 
age>=18 ? console.log("vote dio ") : console.log("ghumai thako")



// complex ternary

let price =500 
const isLeader =true 

// if(isLeader===true){
//     price=0 
// }
// else{
//     price=price+100
// }
// console.log(price)
price=isLeader==true?0 : price+100
console.log(price)


// semiAdvance ternary (optional)


// if (isLeader===true){
//     if(price>1000){
//         price=price/2
//     }
//     else{
//         price=0
//     }
   
// }
// else{
//     price=price+1000
// }



price=isLeader==true?price>1000?price/2:0:price+1000

console.log(price)