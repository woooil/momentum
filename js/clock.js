const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    let col;
    if (seconds % 2) {
        col = ":";
    } else {
        col = " ";
    }
    clock.innerHTML = hours + col + minutes;
}

getClock();
setInterval(getClock, 1000);