// for loop
let sum=0;
for(let i=1; i <=10; i++) {
    sum=sum+i;
}
console.log("The total sum is " + sum);


//while loop
let i=1;
sum=0;
while (i <=10) {
    sum=sum+i;
    
    i++;
}

console.log("The sum is" , sum );


//use of backtick
let student=["anjana","sobha","tinu"];
for (let i of student){
    console.log(`hello ${i}`);
}


// Increment
let a=1;
let b=a++;
console.log(a);
console.log(typeof(b));


// To create an object
let person= {
    name: "anjana", age: 23

}
console.log(person.age)

