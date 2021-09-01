function hasLeapDay(year) {
    if (year % 400 === 0) {
        return true;
    }

    return year % 4 === 0 && year % 100 !== 0;
}

function solve(){
    const days = ['Mon', 'Tue', 'Wed', "Thu", "Fri", "Sat", "Sun"];

    const result = {
        Mon: 0,
        Tue: 1,
        Wed: 0,
        Thu: 0,
        Fri: 0,
        Sat: 0,
        Sun: 0,
    }

    let currentDay = 1

    for (let i = 1996; i > 1900; i--){
        const leapDay = hasLeapDay(i);

        if(leapDay){
            let day = currentDay - 5 > 0? currentDay - 5: 7 + (currentDay - 5)
            if(day === 7){
                day = 0
            }
            result[days[day]] ++;

            currentDay = day
        }
    }

    return result;
}


function main(){
    const result = solve()
    console.log(`Result is =>`, result)

    return 0;
}


main()