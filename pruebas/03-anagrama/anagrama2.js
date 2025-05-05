//Anagram 
function anagrama(palabra1, palabra2) {
    if (palabra1.length !== palabra2.length) {
        return false
    }
    let letterCount = {};

    for (const letter of palabra1) {
        let lowerChar = letter.toLowerCase();
        letterCount[lowerChar] = (letterCount[lowerChar] || 0) + 1;

    }
    for (const letter of palabra2) {
        let lowerChar = letter.toLowerCase();
        if (!letterCount[lowerChar]) {
            return false
        }
        letterCount[lowerChar] -= 1;
    }
    return true

}

console.log(anagrama('amor', 'roma')) // true
console.log(anagrama('mora', 'amor')) // false
console.log(anagrama('amor', 'ramo ')) // false
console.log(anagrama('amor', 'rama')) // false
console.log(anagrama('amar', 'rama')) // false