/** TypeScript 필수 문법 */

// let 이름1 :string[] = ['kim', 'park'];
// let 이름2 :{ name? : string } = { name : 'kim' };

// type MyType = string | number;

// let 이름3 :MyType = 123;

// function 함수(x :number) :number {
//     return x*2
// }
// // 함수('123') // 에러뜸

// type Member1 = [number, boolean];
// let john:Member1 = [123, true]

// type Member2 = {
//     [key :string] : string
// }

// let jay:Member2 = { name : 'park' }

// class User {
//     name :string;
//     age :number;
//     constructor(name :string, age :number) {
//     this.name = name;
//     this.age = age;
//     }
// }

/** typescript 기본 타입 정리 */

let 이름:string = 'kim';
let 나이:number = 20;
let 결혼했니:null = null;

let 회원들:string[] = ['kim','park']
let 회원들2:{ member1 : string, member2 : string } = { member1 : 'kim', member2 : 'park' }

// 근데 자동으로 타입지정 됨;;

let artist:{ title : string, name : string} = { title : 'kidsing', name : 'kanye'}
let project:{
    member : string[],
    days : number,
    started : boolean,
  } = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
  }