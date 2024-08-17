const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    const exprToString = `${expr}`;
    let result = "";
    for (let i = 1; i <= exprToString.length / 10; i++) {
        let tmp = "";
        for (let j = 10 * (i - 1); j < 10 * i - 1; j += 2) {
            if (exprToString[j] === "*") {
                tmp += " ";
                break;
            }
            if (exprToString[j] === "1" && exprToString[j + 1] === "0") {
                tmp += ".";
            } else if (exprToString[j] === "1" && exprToString[j + 1] === "1") {
                tmp += "-";
            }
        }
        if (tmp === " ") {
            result += " ";
            continue;
        }
        result += MORSE_TABLE[tmp];
    }
    return result;
}

module.exports = {
    decode
}