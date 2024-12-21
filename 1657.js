var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }
    
    let map1 = {};
    let map2 = {};

    for (let char of word1) {
        map1[char] = map1[char] + 1 || 1
    }

    for (let char of word2) {
         map2[char] = map2[char] + 1 || 1
    }


    if (String(Object.keys(map1).sort()) !==  String(Object.keys(map2).sort())) {
        return false;
    }


    let freq1 = Object.values(map1).sort((a, b) => a - b);
    let freq2 = Object.values(map2).sort((a, b) => a - b);

    return String(freq1) === String(freq2);
};
console.log(closeStrings("abc","bca"))