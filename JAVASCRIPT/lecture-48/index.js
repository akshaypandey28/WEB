document.addEventListener('click',function(){
    console.log('i have clicked on the document');
});

/* the event object */
const content=document.querySelector('#wrapper');
content.addEventListener('click',function(event){ //i can also write akshay in place of event
    console.log(event);
});

/* the default action */
const anchor=document.querySelector('a');
anchor.addEventListener('click',function(event){
    event.preventDefault();
    console.log('maza aya');
});

/* avoid too many events */
/* let myDiv=document.createElement('div');
function paraStatus(event){
    console.log('I have clicked on para');
}
myDiv.addEventListener('click',paraStatus);
for(let i=0; i<=100; i++){
    let newElement=document.createElement('p');
    newElement.textContent='This is para ' + i;

    //by making paraStatus all paragraph are referring to the same function due to this no new function is created 
    myDiv.appendChild(newElement);//here only by clicking on the div listener is executed
//because of this i lost the access of individual paragraph tag so for solving this phases of an event is used 
}
document.body.appendChild(myDiv); */

let myDiv=document.createElement('div');
function paraStatus(event){
    console.log('Para ' + event.target.textContent); //using for particular paragraph
}
myDiv.addEventListener('click',paraStatus);
for(let i=0; i<=100; i++){
    let newElement=document.createElement('p');
    newElement.textContent='This is para ' + i;

    //by making paraStatus all paragraph are referring to the same function due to this no new function is created 
    myDiv.appendChild(newElement);//here only by clicking on the div listener is executed
//because of this i lost the access of individual paragraph tag so for solving this phases of an event is used 
}
document.body.appendChild(myDiv);