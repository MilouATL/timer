var endDate = new Date("Jun 28, 2019 12:00:00").getTime();

var timer = setInterval(function() {

    let now = new Date().getTime();
    let t = endDate - now;
    
    if (t >= 0) {
    
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);
    
        document.getElementById("timer-days").innerHTML = days + " " +
        "<span class='label'>dagen </br></span>";
    
        document.getElementById("timer-hours").innerHTML = ("0" +hours).slice(-2) + " " +
        "<span class='label'>uren </br></span>";        
        
        document.getElementById("timer-mins").innerHTML = ("0"+mins).slice(-2) + " " +
        "<span class='label'>minuten </br></span>";
    
        document.getElementById("timer-secs").innerHTML = ("0"+secs).slice(-2) + " " +
        "<span class='label'>seconden</span>";

    
    } else {

        document.getElementById("timer").innerHTML = "School is out forever, eat my shit fuckheads.";
    
    }
    
}, 1000);