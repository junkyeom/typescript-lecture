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
// let 이름:string = 'kim';
// let 나이:number = 20;
// let 결혼했니:null = null;
// let 회원들:string[] = ['kim','park']
// let 회원들2:{ member1 : string, member2 : string } = { member1 : 'kim', member2 : 'park' }
// 근데 자동으로 타입지정 됨;;
// let artist:{ title : string, name : string} = { title : 'kidsing', name : 'kanye'}
// let project:{
//     member : string[],
//     days : number,
//     started : boolean,
//   } = {
//     member : ['kim', 'park'],
//     days : 30,
//     started : true,
//   }
/** Uniontype, any, unknown*/
var 회원 = 'kim';
회원 = 123;
var 회원들 = [1, '2', 3];
var 오브젝트 = { a: '123' };
var 이름;
이름 = 123;
이름 = true;
이름 = {};
var 이름2;
이름 = 123;
이름 = [];
이름 = true;
var 변수1 = 이름;
// let 변수2 :string = 이름2; // 타입쉴드 발동, any보다 안전
// 타입끼리의 연산 엄격함 ex) 수학연산은 any, number, bigint만 가능
var 나이;
// 나이 + 1; // Union이라 에러남 (아예 숫자나 문자면 상관없지만)
var 나이2; // 나이 +1 ; <- 에러
//숙제
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
