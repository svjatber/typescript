interface Rect{
    readonly id: string,
    color?: string,
    size: {
        width: number,
        height: number
    }
}
const rect1: Rect = {
    id: '1',
    size: {
        width: 23,
        height: 123
    }
}
const rect2: Rect = {
    id: '1',
    size: {
        width: 23,
        height: 123
    }
}
rect2.color = '23123'
rect2.size.height = 21323132

const rect3 = {} as Rect
const rect4 = <Rect>{}
rect3.color = '#ccc'
console.log(rect3)
console.log(rect4)

// =====================
interface ReactWithArea extends Rect{
    // getArea(): number
    getArea: () => number
}

const react5: ReactWithArea = {
    id: '4',
    size: {
        width: 32,
        height:43
    },
    getArea(): number {
        return this.size.height
    }
}
console.log(react5.getArea())

// ====================
interface IClock{
    time: Date,
    setTime(date: Date): void
}

class Clock implements IClock{
    time: Date = new Date()
    setTime(date: Date) {
        this.time = date
    }
}
const clock = new Clock()
clock.setTime(new Date());
console.log(clock.time)
// =====================
interface IStyles {
    [key: string]: string
}
const css: IStyles = {
    border: '1px solid black',
    marginTop: '2px'
}
