var newDate1 = new Date("feb-28-2025");
var newDate2 = new Date();
var fullTime1 = newDate1.getTime();
var fullTime2 = newDate2.getTime();
var ramdanDate = fullTime1 - fullTime2;
ramadan = ramdanDate / (1000 * 60 * 60 * 24);
var ramadan = Math.floor(ramadan);
document.write(
  "<h1 style='font-size:10vw; padding-top:5vw;'>" +
    "Ramadan Timer" +
    "</h1>"
);
document.write("<h1 style = 'font-size:7vw; translate:8vw -4vw;'>" + ramadan+" Days" + "</h1>");