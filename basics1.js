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


//
let student=["anjana","soba","tinu"];
for (let i of student){
    console.log(`hello ${i}`);
}