var waitingFor = new Date("jan 5, 2022 15:37:25").getTime();
console.log(waitingFor);


var x = setInterval(function() {
    var nowdate = new Date().getTime();
    console.log(nowdate);

    var distance = waitingFor - nowdate;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var
})