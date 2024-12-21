var compress = function(chars) {
    let currentChar = chars[0];
    let count = 1;
    let writeIndex = 0; 
    
    for (let i = 1; i <= chars.length; i++) {
        if (chars[i] === currentChar) {
            count++;
        } else {
            chars[writeIndex++] = currentChar;
            if (count > 1) {
                const countStr = count.toString();
                for (let j = 0; j < countStr.length; j++) {
                    chars[writeIndex++] = countStr[j];
                }
            }
            currentChar = chars[i];
            count = 1;
        }
    }
    
    return writeIndex; 
};
console.log(compress(["a","a","b","b","c","c","c"]))