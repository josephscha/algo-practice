// Capitalize first letter of each word in a string. 

function capitalizeFirstLetter(string) {
    splitStr = string.split(" ")
    for (i=0; i < splitStr.length; i++){
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
    }
    return splitStr.join(" ")
}

var testStr = "hello world!"

console.log(capitalizeFirstLetter(testStr))