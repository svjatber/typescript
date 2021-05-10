var rect1 = {
    id: '1',
    size: {
        width: 23,
        height: 123
    }
};
var rect2 = {
    id: '1',
    size: {
        width: 23,
        height: 123
    }
};
rect2.color = '23123';
rect2.size.height = 21323132;
var rect3 = {};
var rect4 = {};
rect3.color = '#ccc';
console.log(rect3);
console.log(rect4);
var react5 = {
    id: '4',
    size: {
        width: 32,
        height: 43
    },
    getArea: function () {
        return this.size.height;
    }
};
console.log(react5.getArea());
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var clock = new Clock();
clock.setTime(new Date());
console.log(clock.time);
