async function futureAdd(a, b) {
    console.log('will calculate: ' + a + ' + ' + b)
    return new Promise(resolve => {
        setTimeout(function () {
            resolve(a + b)
        }, 1000)
    })
}

async function run() {
    if ((await futureAdd(1, 1)) === 2) {
        const value = await futureAdd(1, 10)
        console.log(`1+10 = ${value}`)
        for (const num of [100, 1000, 10000]) {
            const value = await futureAdd(1, num)
            console.log(`1+${num} = ${value}`)
        }
    }
    const value = await futureAdd(2, 2)
    console.log(`2+2 = ${value}`)
}

run()



