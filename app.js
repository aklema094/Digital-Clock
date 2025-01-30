let hourel = document.querySelector("#hours");
let minutel = document.querySelector("#minutes");
let secel = document.querySelector("#seconts");

function getTime(){
let currentTime = new Date();

let hour = currentTime.getHours();
let min = currentTime.getMinutes();
let sec = currentTime.getSeconds();

hourel.innerText = hour.toString().padStart(2,"0");
minutel.innerText = min.toString().padStart(2,"0");
secel.innerText = sec.toString().padStart(2,"0");
}

setInterval(getTime,1000);

