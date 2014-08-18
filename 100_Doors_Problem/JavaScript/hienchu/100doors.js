/**
 * Created with Algorithm-Implementations.
 * User: hienchu
 * Date: 2014-08-14
 * Time: 04:13 AM
 */
//Number of total doors
var N = 100;
//Use one bit to indicate the status of one door.
//Create an array of number for N doors with minimum length
var bits = Array(Math.ceil(N / 31))
//Initialize every bit to zero
for(var i = 0; i < bits.length; i++) {
  bits[i] = 0;
}
console.log("bits length=" + bits.length);
log_status(0);
for(var j = 1; j <= N; j++) {
  for(var k = 1; k <= N; k++) {
    //flip the door if k % j == 0
    if(k % j == 0) {
      flip_door(k);
    }
  }
  log_status(j);
}

function flip_door(n) {
  var idx = Math.floor(n / 32);
  bits[idx] = bits[idx] ^ (1 << ((n - 1) % 31));
}

function log_status(n) {
  var reversed = Array(bits.length);
  for(var i = 0; i < bits.length; i++) {
    reversed[i] = bits[i].toString(2).split('').reverse().join('');
    if(i + 1 < bits.length) {
      reversed[i] = reversed[i] + (1 << (31 - reversed[i].length)).toString(2).substr(1);
    }
  }
  console.log("Round #" + n + ": " + reversed.join(''));
}