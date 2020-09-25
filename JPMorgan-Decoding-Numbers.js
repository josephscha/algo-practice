// https://www.ideserve.co.in/learn/count-possible-decodings-of-a-given-digit-sequence
// Let's say there is an encoding scheme where integer 1 encodes character 'A', integer 2 encodes character 'B' and so on till integer 26 which encodes character 'Z'. With this encoding scheme, write a program to count all possible decodings of a given digit sequence.

// For example, if the digit sequence is "12" then there are two possible decodings for this  -  One of them is 'AB' when we decode 1 as 'A' and 2 as 'B'. Now we can also decode this digit sequence "12" as 'L' when we decode digits 1 and 2 taken together as an integer 12.
// Similarly, for digit sequence "1223" there are five possible decodings.
// 1, 2, 2, 3 - ABBC
// 1, 2, 23   - ABW
// 1, 22, 3   - AVC
// 12, 2, 3   - LBC
// 12, 23     - LW

// For digit sequence "1234" there are three possible decodings.
// 1, 2, 3, 4 - ABCD
// 1, 23, 4   - AWD
// 12, 3, 4   - LBD
// Note that because integer 34 does not have any valid decoding, we cannot decode "1234" as 1,2,34 or as 12,34 where digits 3 and 4 are decoded together(as an integer 34) to some character.

// Few assumptions that we can make here -
// 1. Number of possible decodings for an empty sequence = 0.
// 2. There would be no 0's at the very beginning of digit sequence. That means, no digit sequence would start from digit 0.
// 3. There would be no two or more consecutive 0's in the digit sequence.  
// 4. The digit sequence would be formed by only using digits from 0-9.

function decodeMessage (input){
    count = 0
    splitInt = [...input.toString()]
    if(input <= 10 && input > 0){
        count = 1
    }
    if(input >= 11){
        count = splitInt.length
    }
}

let testInput = 12
let testInput2 = 1234
let testInput3 = 11027

console.log(decodeMessage(testInput))
console.log(decodeMessage(testInput2))
console.log(decodeMessage(testInput3))