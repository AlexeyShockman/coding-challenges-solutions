/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const frequencyDictionary = new Array(26).fill(0); //a-z
    const charCodeOfA = 'a'.charCodeAt(0);


    for (let i = 0; i < s.length; i++) {
        frequencyDictionary[s.charCodeAt(i)-charCodeOfA]++;
        frequencyDictionary[t.charCodeAt(i)-charCodeOfA]--;
    }

    return frequencyDictionary.every((letter) => letter === 0);
}

console.log(isAnagram('car', 'rca'));
console.log(!isAnagram('car', 'tar'));
console.log(!isAnagram('', 'rca'));
console.log(!isAnagram('car', ''));
console.log(!isAnagram('car', 'c'));
console.log(!isAnagram('', ''));

