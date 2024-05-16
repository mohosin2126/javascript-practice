//example-1
 function square(number){
console.log(number)
const borgo=number*number
console.log(borgo)
 }
 square(12)


//example-2
 function add(num1,num2){
    const sum=num1+num2
    console.log(sum)
 }
 add(23,34)


//example-3 (return)

function tenTimes(number){
   const result=number*10
   return result
}
const number=10
const result=tenTimes(number)
console.log(result)

// example-4 (return[recap])
function add(price1,price2){
   const total=price1+price2
return total
}
const bill =add(5,80)
console.log(bill)

// example-5 

function doMath(num1,num2){
   const sum = num1+num2
   const diff =num1+num2 
   const multiply=sum * diff
   const result = multiply /2 
   return result

}

const result2 = doMath(10,5)
console.log(result2)


// example-6 [conditional return]

function isEven(){
   if(number %2 === 0){
      return true
   }
   else{
      return false
   }
}

console.log(isEven(5))
console.log(isEven(101))