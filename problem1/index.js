function sumOfArithmeticProgression(n) {
    return ((1 + n) / 2) * n;
}

function solve(divider, num) {
    num--;
    const factor = getFactor(divider, num);

    if (factor == 0) {
        return 0;
    }

    return sumOfArithmeticProgression(factor) * divider
}

function getFactor(divider, num) {
    let result = 0;
    while (num > 0) {
        const n = num;

        if (n % divider === 0) {
            result = n / divider;
            break;
        }

        num--;

    }

    return result;
}


function main() {

    const firstDivider = 5;
    const secondDivider = 7;

    const n = 1000000

    const s1 = solve(firstDivider, n);

    const s2 = solve(secondDivider, n);

    const badSum = solve(firstDivider * secondDivider, n)


    console.log(`Result is: ${s1 + s2 - badSum}`)
}

main();