/* 
1) Buatlah api untuk melakukan convert bilangan, diharuskan membuat logic function sendiri. Tidak diperkenankan menggunakan function decbin & bindec di php atau function sejenis di bahasa pemrograman lain.
a) Binary to decimal, co: input 1001, output 9
b) Decimal to binary, co: input 19, output 10011 
*/


//JAWABAN 1 A
function binaryToDecimal(binaryInput) {
  //split string to array
  let binaryArr = binaryInput.split("");

  //reverse the array so we can convert the smallest value first
  let reversed = binaryArr.reverse();

  let sum = 0;
  //loop through every digit , convert to decimal and get the sum
  
  for (let i = 0; i < reversed.length; i++) {

    //ignore zero and continue
    if (reversed[i] == 0) {
      continue;
    } else {

    //get 2 to the power of i and add to the sum
      sum += Math.pow(2, i);
    }
  }
  return sum;
}


//JAWABAN 1B
function decimalToBinary(input) {
    //algorithm: we use while loop
    //every loop we divide the input by 2 and get the remainder and the remainder string 
    //we append to binary result (can be 1 / 0), the remainder is used for 2nd , 3rd, ... n input for next loop
    //until the remainder is 0

    let binary = 0;
    let remainder; 
    let counter = 1;
    while (input != 0) {
        remainder = input % 2;
        input = parseInt(input / 2);
        binary = binary + remainder * counter;
        counter = counter * 10;
    }
  
    return binary;


}
