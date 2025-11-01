function createSecretHolder(secret) {
    let value = secret;

    function createSecret() {
        return {
            getSecret() {return value},
            setSecret(newValue) {value = newValue}
        }
    }

    let obj = createSecret()

    return  obj
}

// Кажется, я переборщил с обертками. Вот короткое решение:
function createSecretHolder2(secret) {
    return {
        getSecret: function() { return secret; },
        setSecret: function(v) { secret = v; }
    };
}



obj = createSecretHolder(5)
console.log(obj.getSecret())
obj.setSecret(2)
console.log(obj.getSecret())


