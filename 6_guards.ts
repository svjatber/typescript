class MyResponse{
    header = 'response header'
    message = 'response message'
}
const res = new MyResponse()
class MyError{
    header = 'error header'
    message = 'error message'
}
function handle(res: MyResponse | MyError){
    if(res instanceof MyResponse){
        return res.header.toString()
    }
    return res
}

console.log(handle(res));

