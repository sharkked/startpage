var c = setInterval(function() {
  tick();
}, 1000);

var date = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

function tick() {
  var now = new Date();
  var greet = "go to bed";
  var hour = now.getHours();
  if (hour > 18) {
    greet = "good night";
  }
  else if (hour > 16) {
    greet = "good evening";
  }
  else if (hour > 11) {
    greet = "good afternoon";
  }
  else if (hour > 5) {
    greet = "good morning";
  }
  
  document.getElementById("greeting").innerHTML = greet;
  document.getElementById("clock").innerHTML = now.toLocaleTimeString('en-GB');
  document.getElementById("date").innerHTML = date.format(now).toLowerCase();
}
