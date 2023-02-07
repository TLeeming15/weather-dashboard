function getInfo(){
    const newName= document.getElementById("cityInput");
    const city= document.getElementById("city");
    city.innerHTML = "--"+newName.value+"--"
}

fetch("https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=bc0f2816c174f2ba8b293f15351d5ce4")
.then(response => response.json())
.then(data => {
    for(i=0;i<5;i++){
        document.getElementById("day" +(i+1)+"Min").innerHTML="Min:" + Number(data.list[i].main.wind.speed-5.03).toFixed(1)+"°";
    }
    for(i=0;i<5;i++){
        document.getElementById("day" +(i+1)+"Temp").innerHTML="Temp:" + Number(data.list[i].main.temp-270.64).toFixed(1)+"°";

    for(i=0;i<5;i++){
            document.getElementById("day" +(i+1)+"humidity").innerHTML="Humidity:" + Number(data.list[i].main.humidity-80).toFixed(1)+"°";  

    for (i=0;i<5;i++){
        document.getElementById("image" +(i+1)).src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";
    }
}

// .catch(err => alert("Ooops"))
function defaultScreen(){
    document.getElementById("cityInput").defaultValue = "Toronto";
    getInfo();
}
const d = new Date();
const weekday = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];

function checkDay(day){
    if(day +d.getDay()>6){
        return day +d.getDay()-7;
    }
    else{
        return day +d.getDay();
    }
}

for (i=0;i<5;i++){
    document.getElementById("day"+(i+1)).innerHTML = weekday[checkDay(i)];
}
