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


const hashMap = (string) => {
    const mappedObj = {}
    for (const i of string) {
        if (mappedObj[i] === undefined) mappedObj[i] = 1
        else mappedObj[i] += 1
    }
    return mappedObj
}
const checkAnagram = (string1, string2) => {
    if (string1.length !== string2.length) return false
    const obj1 = hashMap(string1)
    const obj2 = hashMap(string2)

    for (const key in obj1) {
        if (obj2[key] !== obj1[key]) return false
    }
    return true
}

console.log(checkAnagram('amor', 'roma')) // true
console.log(checkAnagram('mora', 'amor')) // true
console.log(checkAnagram('amor', 'ramo ')) // false
console.log(checkAnagram('amor', 'rama')) // false
console.log(checkAnagram('baba', 'aaba')) // false
console.log(checkAnagram('aaaa', 'aaaa')) // false