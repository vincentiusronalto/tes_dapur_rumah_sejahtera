/*
2) Buatlah function untuk menentukan kalimat palindrome terpanjang dalam suatu string, jika ada 2 atau lebih kalimat dengan panjang yang sama maka ambil kalimat yang pertama. (case insensitive dan abaikan spasi)
Co:
input “aku suka makan nasi” output “aku suka”
Input “di rumah saya ada kasur rusak” output “kasur rusak”
Input “abcde edcbza” output “bcde edcb”
*/

//Jawaban no 2
function longestPalindrome (str) {
    const string = str.toLowerCase();
    if (str.length < 2) return null;
    let palindrome = '';
  
    function stringReverser (start, length) {
      const reversed = string.substr(start, length).split('').reverse().join('');
      return reversed;
    }
  
    for (let i = 0; i < string.length; i++) {
      for (let j = 1; j <= string.length - i; j++) {
        if (string.substr(i, j) === stringReverser(i, j)) {
          if (j > palindrome.length) {
            palindrome = string.substr(i,j);
          }
        }
      }
    }
  
    if (!palindrome) return null;
    return palindrome;
  }