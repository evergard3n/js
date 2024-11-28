// const promiseReturn = new Promise((resolve,reject) => {
//     let returner = true;
//     setTimeout(()=> {
//         if(returner) {
//             resolve('resolved')
//         } else {
//             reject('rejected')
//         }
//     },1000)
// })
function walkDog(condition) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            condition ? resolve('walked the doggo') : reject('doggo nuh uh')
        }, 1500)


    })
}
function cleanKitchen(condition) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            condition ? resolve('cleaned the kitchen') : reject('kitchen nuh uh')
        }, 3000)


    })
}
function takeTrash(condition) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            condition ? resolve('took the trash out') : reject('trash nuh uh')
        }, 500)


    })
}
// walkDog(true).then((data) => { console.log(data); return cleanKitchen(true) })
//     .catch((err) => {console.error(err); return "error handled"})
//     .then((data) => { console.log(data); return takeTrash(true) })
//     .then((data) => { console.log(data) })
async function doChores() {
    try {
        let a = await walkDog(true);
    console.log(a)
    let b = await cleanKitchen(false);
    console.log(b);
    let c = await takeTrash(true);
    console.log(c);
    } catch (err) {
        console.error(err);
    }
    
    
}
doChores()
