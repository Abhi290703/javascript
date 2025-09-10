let totaltime = 3 * 24 * 60 * 60 * 1000; // here we have given day dours minutes seconds * 1000 milli seconds
function flipclock () { // anonymous function
    let days = Math.floor(totaltime / (1000 * 60 * 60 * 24)); // for days

    let hours = Math.floor(totaltime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    // hours divide by milliseconds * seconds * minutes

    let minutes = Math.floor((totaltime % (1000 * 60 * 60)) / (1000 * 60));
    // minutes didvde by milliseconds * seconds

    let seconds = Math.floor((totaltime % (1000 * 60)) / 1000);
    // seconds divided by milliseconds 

       let timeString =
        days.toString().padStart(2, "0") + "d:" +   // here d represents day
        hours.toString().padStart(2, "0") + "h:" +    // here h represents day
        minutes.toString().padStart(2, "0") + "m:" +    // here m represents day
        seconds.toString().padStart(2, "0") + "s";    // here s represents day


      document.getElementById("clock").innerText = timeString;    // here we given id 

      totaltime -= 1000;          // we are saying reduce time 

       if (totaltime < 0) {     // if totaltime is 0 than clearinterval and generate output time is up
        clearInterval(timer);
        document.getElementById("clock").innerText = "Time is up!";
      }
    }

    let timer = setInterval(flipclock, 1000);
    flipclock();            // we have set interval upto 1000 and generate output
