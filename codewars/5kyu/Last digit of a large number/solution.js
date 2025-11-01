function lastDigit(n, m) {
    if (m === 0n) return 1n;

    const template = {
        0n: [0n],
        1n: [1n],
        2n: [2n, 4n, 8n, 6n],
        3n: [3n, 9n, 7n, 1n],
        4n: [4n, 6n],
        5n: [5n],
        6n: [6n],
        7n: [7n, 9n, 3n, 1n],
        8n: [8n, 4n, 2n, 6n],
        9n: [9n, 1n]
    }

    const lastNumber = n % 10n;
    const pattern = template[lastNumber];
    const index = (m - 1n) % BigInt(pattern.length)

    return pattern[index];
}

// Более короткое решение без шаблонов. Как по мне, чуть менее понятный, если не погружаться в математику.
// При желании его можно упаковать вообще в 1 строчку.
const lastDigit2 = (n, m) => {
    let base = n % 10n;
    let rem = m % 4n;
    let exp = (rem === 0n && m !== 0n) ? 4n : rem;
    return base ** exp % 10n;
};

console.log('тест lastDigit:', lastDigit(44n, 86n), 'ожидаемый результат: ', 6)
console.log('тест lastDigit2:', lastDigit2(44n, 86n), 'ожидаемый результат: ', 6)
