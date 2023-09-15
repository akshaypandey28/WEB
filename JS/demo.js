let saveEL=document.getElementById("save button")
let countEL=document.getElementById("increment button")
let count = 0;

function increment(){
    count++;
    saveEL.textContent=count
}
increment();
function save(){
    let countstr=count+"-"
    saveEL.textContent+=countstr
    countEL.textContent=0;
    count=0
}