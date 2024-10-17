let hr = document.getElementById('hour');
let minute = document.getElementById('minute'); // Changed 'min' to 'minute' to avoid conflict with JavaScript keyword
let second = document.getElementById('second'); // Changed 'sec' to 'second' for clarity

function displayTime() {
    let date = new Date();

    // Getting hour, mins, secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`; // Updated variable name
    second.style.transform = `rotate(${sRotation}deg)`; // Updated variable name
}

setInterval(displayTime, 1000);
