//object creation
let rectangle={
    length:1,
    breadth:2,

    draw: function(){
        console.log('draw');
    }
};
console.log(rectangle.draw());
console.log(rectangle.draw);//both are different
rectangle.draw();


//factory function for object creation
function createRectangle(len,brea){ //depends upon user
    return rectangle={
        length:len,
        breadth:brea,
    
        draw: function(){
            console.log('draw');
        }
    };  
}

let createRec=createRectangle(1,2); //returns objects that is rectangle
createRec.breadth=3;
console.log(createRec.breadth);

//constructor function and it follows pascal notation and for object creation
//i.e first letter of every word is Capital
function Rectangle(len,brea){
    //this represents that jis bhi object pr work ho rha hai
    this.length=len;
    this.breadth=brea;
    this.draw=function(){
        console.log('drawing');
    }
}

let rectangleObject=new Rectangle(4,6); //by constructor


//Object cloning 

//can be done by creating an empty object and copy the key of original object by (1st) iteration

//Iteration
let copy={};
for(let key in rectangle){
    copy[key]=rectangle[key];
}
console.log(copy.breadth);
