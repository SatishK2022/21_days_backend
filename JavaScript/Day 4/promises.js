// Promise
/* 
let parentDecision = false

const simranPromise = new Promise((resolve, reject) => {
    if (parentDecision) {
        resolve('Yaah!! ab shaadi ki tayaari karo', parentDecision)
    } else {
        reject('Sorry..., Papa ne IAS dhund liya ha', parentDecision)
    }
})

simranPromise
    .then((message) => {
        console.log("Simran Message: ", message)
        console.log("Parent Decision: ", parentDecision)
        console.log("Let's book the wedding venue")
    })
    .catch((message) => {
        console.log("Simran Message: ", message)
        console.log("Parent Decision: ", parentDecision)
        console.log("Tinder kaha ho yaar!!")
    })
    .finally(() => {
        console.log("Simran's Promise is done")
    })
*/

// Promise.all() Example
/*
const f1Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("Friend1 : Hey, I am in for goa")
        } else {
            reject("Friend1 : Sorry, mere pet m dard ho raha ha")
        }
    }, 3000)
})

const f2Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("Friend2 : Hey, I am in for goa")
        } else {
            reject("Friend2 : Sorry, meri billi bimar ha")
        }
    }, 2000)
})

const f3Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("Friend3 : Hey, I am in for goa")
        } else {
            reject("Friend3 : Mere pass paise nhi ha jane ke liye")
        }
    }, 5000)
})

Promise.all([f1Promise, f2Promise, f3Promise])
    .then((message) => {
        console.log(message)
        console.log("Yahh!! we are going to goa")
    })
    .catch((message) => {
        console.log(message)
        console.log("Yaar band karo goa ka plan banana")
    })
*/


// Promise.any()
const gf1Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("GF1 : Hey, I'll come for dinner")
        } else {
            reject("GF1 : Phone is unreachable!!")
        }
    }, 3000)
})

const gf2Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("GF2 : Hey, I'll come for dinner")
        } else {
            reject("GF2 : I am on diet!!")
        }
    }, 2000)
})

const gf3Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("GF3 : Hey, I'll come for dinner")
        } else {
            reject("GF3 : my friends are comming!!")
        }
    }, 2000)
})

Promise.any([gf1Promise, gf2Promise, gf3Promise])
    .then((result) => {
        console.log(result)
        console.log("My Valantine day is sorted")
    })
    .catch((message) => {
        console.log(message)
        console.log("How to be part of the bajrang dal")
    })