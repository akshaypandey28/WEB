/* setTimeout(function(){
    console.log('third');
},3000);

function sync(){
    console.log('first');
}

sync();

console.log('second'); */


// let meraPromise=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside promise');
//     },3000);
//     resolve(2233);
//     //reject(new Error('error aya hai'));
// })
// meraPromise.then((value)=>{console.log(value)});

// meraPromise.catch((error)=>{console.log("received an error")});
// console.log('pahla');


// let waada1=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('settimeout1 started');
//     },2000);
//     resolve(true);
// })

// let output=waada1.then(()=>{
//     let waada2=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log('settimeout2 started');
//         },3000);
//         resolve('waada2 resolved');
//     })
//     return waada2; //returning a promise to output
// })

// output.then((value)=>console.log(value));


// async function abcd(){
//     return 7; //async function returns promise
// }


// async function utility(){
//     let delhiMausam=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("delhi me bhut garmi hai");
//         },1000);
//     });
    
//     let hydMausam=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("hyderabad is cool");
//         },5000);
//     });

//     let dM=await delhiMausam; //line no.66 execute nhi hogi jb tk 65 execute na ho jaye
//     let hM=hydMausam;

//     return [dM,hM];
// }

// async function utility(){
//     let content=await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output=await content.json(); //javascript object notation
//     console.log(output);
// }

// utility();


// async function helper(){
//     let options={
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'foo',
//           body: 'bar',
//           userId: 1,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//     };

//     let content=await fetch('https://jsonplaceholder.typicode.com/posts',options);
//     let response=await content.json();
//     return response;
// }


// async function utility(){
//     let ans=await helper();
//     console.log(ans);
// }

// utility();



//  function outerFunction() {
//     var outerVariable = 'I am from the outer function';
  
//     function innerFunction() {
//       console.log(outerVariable); // innerFunction has access to outerVariable
//     }
  
//     // Returning the inner function
//     return innerFunction;
//   }
  
//   var closure = outerFunction(); // closure now holds the inner function
  
//   closure(); // This will log: "I am from the outer function"
  