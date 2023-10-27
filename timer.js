// Set the date and time of your event
const eventDate = new Date("2023-12-31T00:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(function() {
    const currentDate = new Date().getTime();
    const timeRemaining = eventDate - currentDate;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeRemaining < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "Event has started!";
    }
}, 1000);

