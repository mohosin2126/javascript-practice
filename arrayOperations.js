// write a function to give me the sum of all number in an array 
// step-1: declare a function 
// step-2: call check whether the function is called properly 
// step-3:set a parameter 
// step-4: pass the parameter , check whether parameter is passed in a proper format 

function sumOfNumbers(numbers){
    let sum = 0
for(const number of numbers){
    sum=sum+number
}

return sum
}

const numbs=[54,62,12,6]
const sum = sumOfNumbers(numbs)
console.log("sum of the number is ",sum)