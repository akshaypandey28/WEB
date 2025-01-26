const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); //this refers the current context that is user
    }

}
//user.welcomeMessage   it won't print
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  this gives empty because current context is empty because we are in the node environment

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

const addTwo1 = (num1, num2) => {
    return num1 + num2
}

const addTwo2 = (num1, num2) =>  num1 + num2  //implicit return 

const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo3 = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))
console.log(addTwo1(3, 4))
console.log(addTwo2(3, 4))
console.log(addTwo3(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()