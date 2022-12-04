console.log("connected")

/* ******************************************************************************************************************/
// Excersize 4.1
const text = document.querySelector("#text")
const button = document.querySelector("#button")

// console.log(text,button)
const getNumber = () => 
    new Promise ((resolve,reject) => {
        const randomNumber =parseInt(Math.random()*100,10)
        setTimeout(() => {
            if(randomNumber % 5 ===0) {
                reject(`Rejected with Number :${randomNumber}`)
            }
            resolve(`Resolved with Number :${randomNumber}`)
            
        },randomNumber *10)
    })

    const clickHandler = async () => {
        display("Loading...")
      
        try {
            const numberPromise = await getNumber()
            display(numberPromise)
        }
        catch (e){
            console.error(e)
            display(e)
        }

    } 

const display = (content) => { text.innerText = content }
button.addEventListener("click" ,clickHandler)

/* ******************************************************************************************************************/
// Excersize 4.2
var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

// TODO: create the class Teacher and a method teach
var Teacher = function() {
    this.teach = function(subject){
        console.log(this.name + " is now teaching " + subject);
    }
}
Teacher.prototype = new Person();
var him = new Teacher();

him.initialize("Kushal", 28);
him.teach("Inheritance");

/* ******************************************************************************************************************/
// Excersize 4.3
const Fib = (n) => ({
    [Symbol.iterator]:() => {
        let i =1;
        let old =0,new1 = 0;
        return {
            next : () => {
                if(i++ <= n) {
                    [old, new1] = [new1, (old + new1) || 1]
                    return { value :old , done: false }
                }
                else {
                    return { done: true }
                }
            }
        }
    }
})

console.log([...Fib(7)])

console.log("The Fibonacci Series is")
for (const num of Fib(7)) {
    console.log(num)
    
}

/* ******************************************************************************************************************/
