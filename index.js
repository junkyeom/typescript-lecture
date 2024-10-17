/** TypeScript 필수 문법 */
var 이름1 = ['kim', 'park'];
var 이름2 = { name: 'kim' };
var 이름3 = 123;
function 함수(x) {
    return x * 2;
}
var john = [123, true];
var jay = { name: 'park' };
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
