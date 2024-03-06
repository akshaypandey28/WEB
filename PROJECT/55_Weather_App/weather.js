const API_KEY="95bb3afe5825d5f426e03f544c03c971"
function renderWeatherInfo(data){
        let newPara = document.createElement('p');
        newPara.textContent = `${data[0]?.main?.temp.toFixed(2)} °C`; // Access temperature from the first result
        document.body.appendChild(newPara);
        //console.log(data.temp)
}
async function fetchWeatherDetails() {
    try{
        
        let city = "delhi";
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        
        console.log("weather data ", data);

        renderWeatherInfo(data)
    }
    catch(err){
        //handle the error here
    }
}

async function getCustomWeatherDetails(){
    try{
        let latitude = 17.3333;
        let longitude = 18.0833;
        let result=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        let data=await result.json()
        console.log(data)
        renderWeatherInfo(data)
    }
    catch(err){
        console.log(err)
    }
        
}
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }
    else{
        console.log("no location found")
    }
}

function showPosition(position){
    let lat=position.coords.latitude
    let longi=position.coords.longitude
    console.log(lat ,longi)
}