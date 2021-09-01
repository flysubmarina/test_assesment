/*
* Let`s say x = 7
* the result for x = 7 = x + 2x + 3x ..... + a*x, where a * x < 1 000 000
* 1 step - find a nearest number to 1 000 000 which divides by 7 but not equal 1 000 000 - a
* factor = a / divider = a / 7
* result = divider + 2*divider + 3*divider ..... + divider * factor = divider * (1 + 2 + 3 + ... + factor)
* the same process for 5
*
* Last thing - get rid of duplicates, numbers which divides by 7 and 5 repeats in sequence,
* we do the same process for 5 * 7 divider and subtract the result from our result sum
* */





function sumOfArithmeticProgression(n) {
    return ((1 + n) / 2) * n;
}

function solve(divider, num) {
    num--; // we need result for numbers less than num
    const factor = getFactor(divider, num); // find a factor

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
    // const n = 40

    const s1 = solve(firstDivider, n);

    const s2 = solve(secondDivider, n);

    const badSum = solve(firstDivider * secondDivider, n)


    console.log(`Result is: ${s1 + s2 - badSum}`)
}

main();