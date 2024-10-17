/** TypeScript 필수 문법 */

let 이름1 :string[] = ['kim', 'park'];
let 이름2 :{ name? : string } = { name : 'kim' };

type MyType = string | number;

let 이름3 :MyType = 123;

function 함수(x :number) :number {
    return x*2
}
// 함수('123') // 에러뜸

type Member1 = [number, boolean];
let john:Member1 = [123, true]

type Member2 = {
    [key :string] : string
}

let jay:Member2 = { name : 'park' }

class User {
    name :string;
    constructor(name :string) {
    this.name = name;
    }
}