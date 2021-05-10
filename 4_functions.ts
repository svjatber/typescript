interface MyPosition {
    x: number | undefined
    y: number | undefined
}
interface MyDefaultPosition extends MyPosition{
    default: string
}

function position(): MyPosition
function position(a: number): MyDefaultPosition
function position(a: number, b: number): MyPosition

function position (a?: number, b?: number){
    if(!a && !b){
        return {x: undefined, y: undefined}
    }
    if (a && !b){
        return {x: a, y: undefined, default: a.toString()}
    }
    return {x: a, y: b}
}

console.log(position());
console.log(position(42));
console.log(position(10, 15));
