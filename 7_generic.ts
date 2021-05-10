const arrayOfNumbers = [1,2,3,4,5]
const arrayOfString = ['as','as','as']

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

console.log(reverse(arrayOfString));
