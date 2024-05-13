/**
 * multi level condition in if else
 */

const price =5000
if(price>=5000){
    // 10%discount
    const discount =price*10/1000
    const payAmount=price-discount
    console.log(payAmount)
}
else if (price>2500){
// 5% discount 
const discount =price*5/100 
const payAmount=price-discount
console.log(payAmount)
}

else{
    console.log(price)
}


// another one 
 const age =17 
 const foodPrice =500 
if(age<=12){
    
    console.log("you can eat for free")
}
else if(age>=60){
    const discount =price * 50 /100
    const payAmount =price-discount 
    console.log(payAmount)
}
else{
    console.log(price)
}