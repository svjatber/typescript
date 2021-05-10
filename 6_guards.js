var MyResponse = /** @class */ (function () {
    function MyResponse() {
        this.header = 'response header';
        this.message = 'response message';
    }
    return MyResponse;
}());
var res = new MyResponse();
var MyError = /** @class */ (function () {
    function MyError() {
        this.header = 'error header';
        this.message = 'error message';
    }
    return MyError;
}());
function handle(res) {
    if (res instanceof MyResponse) {
        return res.header.toString();
    }
    return res;
}
console.log(handle(res));
