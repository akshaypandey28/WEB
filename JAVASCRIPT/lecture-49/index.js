/* let fragment=document.createDocumentFragment();
for(let i=1; i<=100; i++){
    let newElement=document.createElement('p');
    newElement.textContent='This is para '+i;
    fragment.appendChild(newElement);
}
document.body.appendChild(fragment); //1 reflow and 1 repaint */

function addPara(){
    let para=document.createElement('p');
    para.textContent='Js is single';
    document.body.appendChild(para);
}

function appendNewMessage(){
    let para=document.createElement('p');
    para.textContent='Akshay pandey';
    document.body.appendChild(para);
}

addPara(); //invoke
appendNewMessage(); //invoke

//setTimeOut ( callback function , time );