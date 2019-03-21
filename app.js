var test = 'this a very good variable';

var joke = new Promise((resolve, reject) => {
    console.log(test);
    let result = setTimeout(() => {
        console.log("...NOT");
    },1000);
    resolve(result);
})

async function e(testVar) {
    console.log(varTest);
    await joke;
    return;
}

e(varTest);

