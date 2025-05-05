//Anagram 
function anagrama(palabra1, palabra2) {
    let reomveSpacesAndToLowerCase = function (str) {
        let result = ''
        for (const element of str) {
            if (element !== ' ') {
                result += element.toLowerCase()
            }
        }
        return result
    }
}