var endDate = new Date("Jun 28, 2019 12:00:00").getTime();

var timer = setInterval(function() {

    let now = new Date().getTime();
    let t = endDate - now;
    
    if (t >= 0) {
    
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);
    
        document.getElementById("timer-days").innerHTML = days +
        "<span class='label'>hele lange dagen</span>";
    
        document.getElementById("timer-hours").innerHTML = ("0" +hours).slice(-2) +
        "<span class='label'>uren</span>";
    
    } else {

        document.getElementById("timer").innerHTML = "School is out forever, eat my shit fuckheads.";
    
    }
    
}, 1000);