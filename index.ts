
console.log('Hello World');

// Inferred types 
let age = 30
age = 35

let untypedAge: any = 24
untypedAge = 'Thirty'

// Create new type 
type Age = number

let myAge: Age = 30

interface Persn {
  firstName: string,
  lastName: string,
  [key: string]: any
}

// Typing functions 
function add(a: number, b: number): number {
  return a + b
}

const arr: number[] = [1, 2, 3]
arr.push(3)


// TypeScript generics 
class Observable<T> {                 // Allows us to specify the type later
  constructor(public value: T) {}     // 
}
