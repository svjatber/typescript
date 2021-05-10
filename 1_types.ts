let int = 42
const numberArray: Array<number> = [2,3,4,5]

// Tuple
const contact: [string, number] = ['Vladilen', 1234567]

// ====
function sayMyName(name: string): void{
    console.log(name);
}
sayMyName('svjat')
// Never
function throwNever(message: string): never{
    throw new Error(message)
}
// Type
type Login = string;
const login: Login = 'admin'
type ID = string | number
type Id2 = 1 | 2 | '2'
const id1: ID = 'dasdsasd';
const id2: ID = 2
const idTest: Id2 = 2
