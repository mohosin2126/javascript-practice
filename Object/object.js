const person={
    name:"sodor uddin",
    age:25,
    profession:"developer",
    salary:3500,
    married:true
}

// --access the property value--

// dot notation 
console.log(person.name)

// bracket notation 
console.log(person['age'])


// --update the value --

person.salary=3000 
console.log(person)

person['age']=25 
console.log(person)