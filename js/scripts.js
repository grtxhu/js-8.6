var a = prompt ('wpisz wartość a');
alert('value a =' + a);
var b = prompt ('wpisz wartość b');
alert('value b =' + b);
var value = (a * a) - (2 * a * b) - (b * b);

if (value > 0) {
  alert ('wartość dodatnia'); 
  console.log('wartość dodatnia'); 
}
else if (value < 0) {
  alert('wartość ujemna');
  console.log('wartość ujemna');
} 
else {
  alert('wynik równy 0');
  console.log('wynik równy zero');
}

