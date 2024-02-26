const inputSlider=document.querySelector("[data-lengthSlider]");
const lengthDisplay=document.querySelector("[data-lengthNumber]");
const passwordDisplay=document.querySelector("[data-password-display]");
const copyBtn=document.querySelector("[data-copy]");
const copyMsg=document.querySelector("[data-copyMsg]");
const uppercaseCheck=document.querySelector("#uppercase");
const lowercaseCheck=document.querySelector("#lowercase");
const numbersCheck=document.querySelector("#numbers");
const symbolsCheck=document.querySelector("#symbols");
const indicator=document.querySelector("[data-indicator]");
const generateBtn=document.querySelector("#generateButton");
const allCheckBox=document.querySelectorAll("input[type=checkbox]"); //provides list and saved in this particular variable
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

let password="";
let passwordLength=10;
let checkCount=0;
handleSilder();
//set strength circle color to grey
setIndicator("#ccc")
//set password length 
function handleSilder(){
    inputSlider.value=passwordLength;
    lengthDisplay.innerText=passwordLength;
    const mini=inputSlider.min;
    const maxi=inputSlider.max;
    inputSlider.style.backgroundSize=((passwordLength - mini) * 100) / (maxi - mini) + "% 100%";
    /* ((passwordLength - mini) * 100) / (maxi - mini)  this reprsents the slider width */
}

function setIndicator(color){
    indicator.style.backgroundColor=color;
    //shadow
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

function getRndInteger(min,max){ //this function gives the number of single digit
    return Math.floor( Math.random() * (max-min) ) + min; //math.random gives random integer between 0 and 1 after multiplication range is 0 to (max-min)
    //+ min set the values between min and max
    //Math.floor use for integer value
}

function generateRandomNumber(){
    return getRndInteger(1,10); 
}

function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97,123));//a random generates between 97 to 122 and this is converted 
    //to a to z by the help of fromCharCode
}

function generateUpperCase(){
    return String.fromCharCode(getRndInteger(65,91));//a random generates between 65 to 90 and this is converted 
    //to A to Z by the help of fromCharCode
}

function generateSymbol(){
    const randNum=getRndInteger(0,symbols.length); //generates random number between 0 to symbols.length
    return symbols.charAt(randNum);
}

function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;

    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(numbersCheck.checked) hasNumber = true;
    if(symbolsCheck.checked) hasSymbol = true;

    if(hasUpper && hasLower && (hasNumber || hasSymbol) && passwordLength >= 8){
        setIndicator("#0f0");
    }
    else if((hasUpper || hasLower) && (hasNumber || hasSymbol) && passwordLength >= 6){
        setIndicator("#ff0");
    }
    else{
        setIndicator("#f00");
    }
}

async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);//this is an async operation it return a promises
        //if copied successfully then 
        copyMsg.innerText="Copied";
    }
    catch(e){
        copyMsg.innerText="Failed";
    }
    //to make copy wala span visible
    copyMsg.classList.add("active");

    setTimeout( () =>{
        copyMsg.classList.remove("active");
    },2000);
}

function shufflePassword(array){
    //fisher yates method
    for (let i = array.length - 1; i > 0; i--) {
        // find out random j
        const j = Math.floor(Math.random() * (i + 1));
        // swap 2 numbers
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach((el) => (str += el));
    //str = array.join("");
    return str;
}

function handleCheckBoxChange(){
    checkCount=0;
    allCheckBox.forEach( (checkbox) => {
        if(checkbox.checked) checkCount++;
    })

    //special condition
    if(passwordLength < checkCount) {
        passwordLength=checkCount;
        //whenever passwordLength gets changed then handleSlider function gets called
        handleSilder();
    }
}

allCheckBox.forEach( (checkbox) =>{
    checkbox.addEventListener('change',handleCheckBoxChange);
} )

//this helps in changing the slider value and password length 
inputSlider.addEventListener('input',(e) => {
    passwordLength=e.target.value; //value gets updated and copied in password length 
    handleSilder();
})

copyBtn.addEventListener("click", () => {
    if(passwordDisplay.value) {
        copyContent();
    }
});

generateBtn.addEventListener('click',()=>{
    //none of the checkbox are selected
    if(checkCount<=0) return ;

    //special condition
    if(passwordLength < checkCount) {
        passwordLength=checkCount;
        //whenever passwordLength gets changed then handleSlider function gets called
        handleSilder();
    }

    //let's start the journey to find the new password

    //remove old password
    password="";

    //let's put the stuff mentioned by checkboxes
    // if(uppercaseCheck.checked) password+=generateUpperCase();
    // if(lowercaseCheck.checked) password+=generateLowerCase();
    // if(numbersCheck.checked) password+=generateRandomNumber();
    // if(symbolsCheck.checked) password+=generateSymbol();

    let funcArr=[];
    if(uppercaseCheck.checked) funcArr.push(generateUpperCase);
    if(lowercaseCheck.checked) funcArr.push(generateLowerCase);
    if(numbersCheck.checked) funcArr.push(generateRandomNumber);
    if(symbolsCheck.checked) funcArr.push(generateSymbol);

    //compulsory addition
    for(let i=0; i<funcArr.length; i++){
        password+=funcArr[i]();
    }

    //remaining addition
    for(let i=0; i<passwordLength-funcArr.length; i++){
        let randIndex=getRndInteger(0,funcArr.length);
        password+=funcArr[randIndex]();
    }

    //shuffle the password
    password=shufflePassword(Array.from(password));

    //show in UI
    passwordDisplay.value=password;

    //calculate strenth
    calcStrength();
})