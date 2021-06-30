/*
2) Buatlah function untuk menentukan kalimat palindrome terpanjang dalam suatu string, jika ada 2 atau lebih kalimat dengan panjang yang sama maka ambil kalimat yang pertama. (case insensitive dan abaikan spasi)
Co:
input “aku suka makan nasi” output “aku suka”
Input “di rumah saya ada kasur rusak” output “kasur rusak”
Input “abcde edcbza” output “bcde edcb”
*/

//Jawaban no 2
function expandAroundCenterSolution(s) {
    let start = 0, end = 0;
    for (let i = 0; i < s.length; i++) {
        let center = getCenter(s, i);
        let bounds = expandAroundCenter(s, center[0], center[1]);
        let L = bounds[0], R = bounds[1];
        if (R - L > end - start) {
            start = L;
            end = R;
        }

        i = center[1]; //move to the end of center, i++ will then shift pointer to index right after current center
    }
    return s.substring(start, end + 1);
}

function expandAroundCenter(s, left, right) {
    let L = left, R = right;

    while (L >= 0 && R < s.length && s[L] === s[R]) {
        L--;
        R++;
    }
    
    return [++L, --R];
}

function getCenter(s,c){
    let L = c, R = c;

    while(s[L] === s[++R] && R <= s.length );

    return [L, --R];
}


function isPalindrome(s) {
    let k = 0;
    let l = s.length - 1;
    let isPalindrome = true;
    while(k<=l) {
        if (!(s.charAt(k) === s.charAt(l))) {
            isPalindrome = false;
            break;
        }
        k++;
        l--;
    }
    return isPalindrome;
}



function longestPalindrome(s) {


    let maxPalindrome = expandAroundCenterSolution(s);

    return maxPalindrome;
}

let testCase = "akusukamakannasi";

console.log(longestPalindrome(testCase))