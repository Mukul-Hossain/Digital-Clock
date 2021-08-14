function digitalClock(){
    let date = new Date();
    let hours = date.getHours();
    let mintues = date.getMinutes();
    let seconds = date.getSeconds();
    let year = date.getFullYear();
    let month = date.getMonth();
    let monthlist = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let day = date.getDate();
    let days = date.getDay();
    let daylist = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    let timeFormat = 'AM';
    
    if(hours >= 12){
        hours = hours -12;
        timeFormat = 'PM';
    }
    if(hours==0){
        hours = 12;
    }
    hours = hours < 10 ? '0' + hours:hours;
    mintues = mintues < 10 ? '0' + mintues:mintues;
    seconds = seconds < 10 ? '0' + seconds:seconds;


    let finalTime = `${hours}:${mintues}:${seconds}`;
    let finalDate = `${day} ${monthlist[month]} ${year} ${daylist[days]}`;

    document.getElementById('time').innerText = finalTime;
    document.querySelector('small').innerText = timeFormat;
    document.getElementById('dates').innerText = finalDate;

    setInterval(digitalClock, 1000);
    
}
digitalClock();
