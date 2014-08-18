/**
* Created with Algorithm-Implementations.
* User: hienchu
* Date: 2014-08-18
* Time: 08:40 AM
* Copyright (c) 2014 by hienchu
* Licensed under the MIT license http://opensource.org/licenses/MIT
*/

var N = 50;

for(var i = 1; i < N; i++){
  if(is_harshad_number_n(i, 10)){
    console.log(i + " is 10-hardshad.");
  }
}

function is_harshad_number_n(num, n) {
  //using toString method here, n must be within [2, 36]
  var sum = 0;
  num.toString(n).split('').forEach(function(d) {
    sum += parseInt(d);
  })    
  return num % sum == 0;
}