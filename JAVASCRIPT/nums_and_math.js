const score=400;
console.log(score);

const num=new Number(400) //object type 
console.log(num.toFixed(3));
console.log(num.toPrecision(2));

//             maths
console.log(Math)

//             dates
const max=20
const min=10
const result = ( Math.floor(Math.random() * (max-min + 1)) + min)
console.log(result);

const specificDate = new Date(); 
console.log(specificDate.toLocaleString());

const date=specificDate.toLocaleString("default",{
    weekday:"long",
})
console.log(date);



//                 array
const arr=[1,2,3,4]
const arr1=new Array(1,2,3,4);
console.log(arr,arr1);

arr.shift()
arr.unshift(5)
console.log(arr);

