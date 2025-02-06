let app = document.getElementById("app");
let input = document.getElementById("input");
let date = document.getElementById("date");
let city = document.getElementById("city");
let imageDiv = document.querySelector(".image-div");
let temp = document.querySelector(".temp");
let highTemp = document.getElementById("high-temp");
let lowTemp = document.getElementById("low-temp");


let dateObj = new Date();

let months = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];

let month = months[Math.floor(dateObj.getUTCMonth())];
let day = dateObj.getUTCDate() + 1;
let year = dateObj.getFullYear();

date.innerHTML = `${day} ${month} ${year}`;

let weather = async () => {
    try{
        let fetchApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=154ce9c4290971119d1e19bac1a4e4ad&units=metric`, {
            Accept: {
                header: 'application/json'
            }
        });
        let data = await fetchApi.json();
        console.log(data);
        city.innerHTML = data.name;
        imageDiv.innerHTML = `<img src='https://openweathermap.org/img/wn/${data.weather[0].icon}.png' alt='Error in image loading'></img>`;
        temp.innerHTML = `<h2>${Math.round(data.main.temp)}°C</h2>`;
        highTemp.innerHTML = `${data.main.temp_max}°C`; 
        lowTemp .innerHTML = `${data.main.temp_min}°C`;
    }catch(error){
        console.log(error);
    }    
};
input.addEventListener('keydown', function(event){
    if(event.key == 'Enter'){
        weather();
    }
})

