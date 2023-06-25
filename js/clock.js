const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// interval vs timeout
//setInterval(sayHello, 2000); // run sayHello every 2sec (2000ms)
//setTimeout(sayHello, 2000); // run sayHello after 2sec 

getClock();
setInterval(getClock, 1000);