const sing = function(s) {
    let fullSong = []
    function generateFirstString(c) {
        return `${c} bottl${c > 1 ? 'es' : 'e'} of beer on the wall, ${c} bottl${c > 1 ? 'es' : 'e'} of beer.`
    }
    function generateSecondString(c) {
        return `Take one down and pass it around, ${c > 1 ? c-1 : 'no more '} bottles of beer on the wall.`
    }
    for (let i = 99; i > 0; i--) {
        fullSong.push(generateFirstString(i))
        fullSong.push(generateSecondString(i))
    }

    fullSong.push('No more bottles of beer on the wall, no more bottles of beer.')
    fullSong.push('Go to the store and buy some more, 99 bottles of beer on the wall.')

    return fullSong;
};

const songBottlesOfBeer = sing();
console.log(songBottlesOfBeer[0])
console.log(songBottlesOfBeer[1])
console.log(songBottlesOfBeer[3])
console.log('--- --- ---')
console.log(songBottlesOfBeer[196])
console.log(songBottlesOfBeer[197])
console.log(songBottlesOfBeer[198])
console.log(songBottlesOfBeer[199])
