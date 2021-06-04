

function updateClock(){
    //current date
    let currentTime = new Date()
    // extract hour minute second
    let currentHour = currentTime.getHours()
    let currentMinutes = currentTime.getMinutes()
    let currentSeconds = currentTime.getSeconds()
// Pad 0 if single digit
    currentHour = (currentHour < 10 ? '0' : '') + currentHour;
    currentMinutes = (currentMinutes < 10 ? '0' : '') + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? '0' : '') + currentSeconds

    // AM / PM
    currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour == 0) ? 12 : currentHour;

    //Choose AM/PM
    let timeOfDay = (currentHour < 12) ? 'AM' : 'PM';
    // hr. min. sec
    let currentTimeStr = currentHour + ':' + currentMinutes + ':' + currentSeconds + ' ' + timeOfDay;
    //Insert time string inside DOM
    document.getElementById('clock').innerHTML = currentTimeStr;
    
}