let varTest = 'this a very good variable';

let joke = new Promise((resolve, reject) => {
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