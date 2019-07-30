var degrees = 45;
var s = 1;
var m = 1;
var h = 1;


//Timing for seconds
setInterval(secondRotation, 1000);
//timing for minutes
setInterval(minuteRotation, 60000);
//timing for hours
setInterval(hourRotation, 3600000);

function secondRotation() {
  var degree = 6 * s;
  var second = document.getElementById('second');
  second.style.transform = 'rotate(' + degree + 'deg)';
  console.log('tick')
  s++;
}

function minuteRotation() {
  var degree = 6 * m;
  var second = document.getElementById('minute');
  second.style.transform = 'rotate(' + degree + 'deg)';
  console.log('tick')
  m++;
}

function hourRotation() {
  var degree = 6 * h;
  var second = document.getElementById('hour');
  second.style.transform = 'rotate(' + degree + 'deg)';
  console.log('tick')
  h++;
}
