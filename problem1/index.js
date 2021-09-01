/*
* Let`s say x = 7
* the result = x + 2x + 3x ..... + a*x, where a * x < 1 000 000
* 1 step - find a nearest number to 1 000 000 which divides by 7 but not equal 1 000 000
* 2nd step 999 999 / 7 = factor
* now we have a factor
* */





function sumOfArithmeticProgression(n) { //for numbers less than n
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

    // const n = 1000000
    const n = 40

    const s1 = solve(firstDivider, n);

    const s2 = solve(secondDivider, n);

    const badCount = solve(firstDivider * secondDivider, n)


    console.log(`Result is: ${s1 + s2 - badCount}`)
}

main();