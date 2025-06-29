/*
// Notes on slicing and array copying:
//
// - The result of slice() must be typed as an Array.
// - slice() returns a **shallow copy** of the array.
// - Shallow copies duplicate the top-level array structure,
//   but nested objects or arrays still share references.
// - Deep copies recursively **clone** all nested values.
// - Most standard methods (slice, spread, Array.from, etc.) create shallow copies.

interface StringNumberPair {
    length: 2; // enforces length
    0: string; // index 0 must be a string
    1: number; // index 1 must be a number

    // these 2 options don't work because they don't return an array
        // slice(start?: number, end?: number): StringNumberPair;
        // slice(start?: number, end?: number): [string, number];
    // slice returns a shallow copy of an array
    slice(start?: number, end?: number): Array<string | number>;

    //[Symbol.iterator](): Iterator<string | number>
    [Symbol.iterator](): IterableIterator<string | number>;
}

let pair: StringNumberPair = ['hello', 10];
let [str, num] = pair;
pair.slice(0, 1);
const index: number = 0;
//pair[index] = 'goodbye'; // ts only knows this is a number
// ts knows this will always be 0
pair[0] = 'goodbye'; // where 0: string is accepted here
console.log(pair);


// three most common primitive types
    // string, number, boolean


// Array types
    // number[] == Array<number>
    // string[] == Array<string>
    // boolean[] == Array<boolean>
    // T<U>[] == Array<T<U>> // generic array

    // tuple types (fixed-length arrays)
    // [string, number] == Array<string | number>

// Promises
let listOfIngredients = [];

function doSomething() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Do something");
            resolve("https://example.com")
        }, 200);
    })
}

// synchronous code
doSomething()
    .then((url) => fetch(url))
    .then((res) => res.json())
    .then((data) => {
        listOfingredients.push(data);
    })
    .then(() => console.log(listOfIngredients))

console.log('hello world');

// asynchronous code
async function logIngredients() {
    const url = await doSomething();
    const res = await fetch(url);
    const data = await res.json();
    listOfIngredients.push(data);
    console.log(listOfIngredients);
}

*/
/*
// 6/12/2025

// function expression
function Hello(name: string) {
    console.log("Hello " + name);
}
const myName = "Michael";
Hello(myName);

// Hi(myName); // error (function expressions are not hoisted)
// Hi2(myName);// error (function expressions are not hoisted)
// function expressions
const Hi = (name: string) => console.log("Hi " + name);

// unnamed function expression
const Hi2 = function (name: string) { console.log("Hi2 " + name) }
Hi(myName);
Hi2(myName);

// named function expression
const myObject = {
    factorial: function factorial(n: number): number {
        console.log(n);
        if (n <= 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
};
*/
// 6/15/25
/*
let myArray = [1, 2, 3, 4]

const newArray = myArray.splice(0, 2)
//console.log(newArray)
//console.log(myArray)

const arrayLike = {
    0: "a",
    1: "b",
    length: 2,
};
console.log(Array.prototype.join.call(arrayLike, "+")); // 'a+b'

let map = new Map()
map.set(0, 1)
console.log(map[Symbol.iterator])
*/
/*
let nums= [2,20,4,10,3,4,5]
split(nums)
function split(arr: number[]) {
    let len = arr.length;
    let left = arr.slice(0, Math.ceil(len / 2))
    let right = arr.slice(Math.ceil(len / 2), len + 1)

    if (left.length > 1) split(left)
    if (right.length > 1) split(right)

    if (left[0] > right[0]) left = swap(left)

    if (right[0] > right[1]) right = swap(right)
    console.log(left, right)

    let combined = left.concat(right)
}

function swap (arr: number[]) {
    let placeholder = arr[0];
    arr[0] = arr[1]
    arr[1] = placeholder
    
    return arr
}
*/

// 6/24/25
/*
let a = 1 + 2
let b = a + 3
let c = {
    apple: a,
    banana: b
}
let d = c.apple * 4

class MyStack<ValType> {
    private stack: ValType[] = [];

    push(value: ValType) {
      this.stack.push(value);
    }

    pop() {
        return this.stack.pop();
    }

    top() {
        const lastIndex = this.stack.length - 1
        return this.stack[lastIndex]
    }

    empty() {
        return this.stack.length === 0;
    }

}
const x = 2;
var obj = new MyStack()
obj.push(x)
var param_2 = obj.pop()

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// 6/28/25
//
const height = [1, 2, 3, 4, 5]
const threshold = 2
function stableMountains(height: number[], threshold: number): number[] {
    const len = height.length
    let result: number[] = [];
    for (let i = 0; i < len; i++) {
        if (height[i] > threshold) {
            if (i < len - 1) {
               result.push(i + 1)
            }
        }
    }
    return result
}

//console.log(stableMountains(height, threshold));


// http server project

// open a TCP socket and listen for connections
// set up the TCP server
import net from 'node:net';
import {RequestObjI, RequestObj} from './Request';
import {generateResponse} from "./Response";

// create the TCP server
const server = net.createServer((socket) => {
   console.log('client connected');

   // handle the server disconnecting
   socket.on('end', () => {
       console.log('client disconnected');
   });

   // handle the server receiving data
   socket.on('data', (data) => {
       const requestData = data.toString().trimEnd().split("\r\n")
       let myRequest: RequestObjI = new RequestObj(requestData);

       //console.log(myRequest);
       socket.write(generateResponse((myRequest)))
   });

   // handle server errors
   server.on('error', (err) => {
       throw err;
   });

   // write to the stream
   //socket.write('hello world');

   // sends a readable stream (socket.write buffer) to the writeable (socket) stream
   //socket.pipe(socket);

});

server.listen(8124, () => {
    console.log('server bound');
});
