function main() {
    const array = generateArray(6171);

    const result = array.reduce((acc, val) => acc + val, 0)

    console.log(result)
}

function f(n) {
    if (n % 2 === 0) {
        return n / 2
    }

    return 1 + 3 * n;
}


function generateArray(n) {
    const array = [n];
    let current = n;
    let i = 1;
    while (current != 1) {
        array[i] = f(array[i - 1])
        current = array[i]
        i++;

    }

    return array;
}

main()