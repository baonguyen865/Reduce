function extractValue(arr, key) {
    return arr.reduce(function (ac, nextValue) {
        ac.push(nextValue[key]);
        return ac;
    }, [])
}

function vowelCount(str) {
    const vowel = "aeiou"
    return str.split('').reduce(function (ac, next) {
        let lowerCased = next.toLowerCase()
        if (vowel.indexOf(lowerCased) !== -1) {
            if (ac[lowerCased]) {
                ac[lowerCased]++;
            } else {
                ac[lowerCased] = 1;
            }
        }
        return ac;
    }, {})
}

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function (acc, next, idx) {
        acc[idx][key] = value;
        return acc;
    }, arr)
}

function partition(arr, callback) {
    return arr.reduce(function (acc, next) {
        if (callback(next)) {
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[], []])
}