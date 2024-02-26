const countValue=document.querySelector('#counter');

const increment =() => {
    let value=parseInt(countValue.innerText); //get the value from ui 
    value=value+1;//update the value
    countValue.innerText=value; //set the value onto ui
};


const decrement =() => {
    let value=parseInt(countValue.innerText); //get the value from ui 
    value=value-1;//update the value
    countValue.innerText=value; //set the value onto ui
};