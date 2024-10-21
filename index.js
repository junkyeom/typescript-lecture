/** TypeScript 필수 문법 */
var 함수 = function () {
    return 10;
};
var 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne: function (a) {
        return 5;
    },
    changeName: function () { }
};
회원정보.plusOne(4);
var cutZero = function (a) {
    if (a[0] === '0') {
        return a.slice(1);
    }
    else {
        return a;
    }
};
var removeDash = function (a) {
    var result = a.replace(/-/g, "");
    return parseFloat(result);
};
var 만들함수 = function (x, y, z) {
    var result = z(y(x));
    console.log(result);
};
만들함수('010-1111-2222', cutZero, removeDash);
