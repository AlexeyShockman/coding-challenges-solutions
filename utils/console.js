function compareInConsole(expected, fn, args, isActive = true) {
    if (!isActive) return;

    const [green, red] = ['\x1b[32m%s\x1b[0m', '\x1b[31m%s\x1b[0m']

    try {
        const result = fn(args);
        const isEqual = deepEqual(result, expected);
        const textColor = isEqual ? green : red

        console.log(textColor ,'\n==============================');
        console.log(textColor, `Function: ${fn.name || '(anonymous)'}`);
        console.log(textColor, `Args:`, JSON.stringify(args));
        console.log(textColor, `Expected:`, expected);
        console.log(textColor, `Received:`, result);

        if (isEqual) {
            console.log(textColor, '✅ Test passed');
        } else {
            console.log(textColor, '❌ Test failed');
        }

        console.log(textColor, '==============================\n');
        return isEqual;

    } catch (e) {
        console.log('\n==============================');
        console.log(red, `===== Error: ${e.name} =====`);
        console.log(e.message);
        console.log('Args:', args);
        console.log('==============================\n');
        return false;
    }
}

function deepEqual(a, b) {
    if (a === b) return true;

    if (typeof a !== typeof b) return false;
    if (a && b && typeof a === 'object') {
        if (Array.isArray(a) !== Array.isArray(b)) return false;
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        if (keysA.length !== keysB.length) return false;
        return keysA.every(key => deepEqual(a[key], b[key]));
    }

    return false;
}

module.exports = { compareInConsole };
