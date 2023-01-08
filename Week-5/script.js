console.log("connected")


const sum = (a,b) => {

    return new Promise((resolve, reject) => {
        resolve (a+ b)
    })
    // return a + b;
}


const first = async (second) => { 
    const result = await sum(4,6)

    return result
 }

 let res = first().then((r) => console.log(r))

 console.log(res)