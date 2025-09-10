function udclock() {  // here we have taken anonymous function where we will declare at last as anonymous
    let now = new Date; 
    // date represents that it changes date every day now is variable we have where it changes every day
    // here we have declare now in hours that now represends that present time has same for all
    // we have decalre tostring() that represents means padstart these all are declare instring format
    // gethours represents it should represent in hours format same has foloows for every one
    let hours = now.getHours().toString().padStart(2,"0"); 
    let minutes = now.getMinutes().toString().padStart(2,"0");
    let seconds = now.getSeconds().toString().padStart(2,"0");
    let timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerText = timeString;
}

// setinterval represents time-set
setInterval(udclock,1000);
udclock();


