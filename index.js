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
// let 회원 :string | number = 'kim'
// 회원 = 123
// let 회원들 :(number | string) [] = [1,'2',3]
// let 오브젝트 : { a : string | number} = { a : '123'}
// let 이름 :any;
// 이름 = 123; 이름 = true; 이름 = {};
// let 이름2 :unknown;
// 이름 = 123; 이름 = []; 이름 = true;
// let 변수1 :string = 이름;
// // let 변수2 :string = 이름2; // 타입쉴드 발동, any보다 안전
// // 타입끼리의 연산 엄격함 ex) 수학연산은 any, number, bigint만 가능
// let 나이 :string | number;
// // 나이 + 1; // Union이라 에러남 (아예 숫자나 문자면 상관없지만)
// let 나이2:unknown; // 나이 +1 ; <- 에러
// //숙제
// let user:string = 'kim';
// let age:number|undefined = undefined;
// let married:boolean = false; 
// let 철수:(string|number|undefined|boolean)[] = [user, age, married];
// let 학교 :{
//     score : (number|boolean)[],
//     teacher : string,
//     friend : string | string[]
// } = {
//     score : [100, 97, 84],
//     teacher : 'Phil',
//     friend : 'John'
// }
// 학교.score[4] = false;
// 학교.friend = ['Lee' , 학교.teacher]
/** 함수 타입 지정, void 타입 */
// function 함수(x :number) :number {
//     return x*2
// };
// function 함수2(x :number) :void{
//     1+1;
// };
// 함수(2)
// function 숙제1(x : string | undefined):void {
//     if (x) {
//         console.log('안녕하세요' +x)
//     } else {
//         console.log('이름이 없습니다.')
//     }
// }
// function 숙제2(x :number | string) :number {
//     x = x.toString()
//     return x.length
// }
// 숙제2(2)
// function 결혼가능하냐(x:number,y:boolean,z:string) :string | undefined {
//     let score = 0;
//     score += x;
//     if(y===true) {
//         score += 500;
//     }
//     if(z==='상') {
//         score += 100;
//     }
//     if (score>=600) {
//         return '결혼가능'
//     } 
// }                  
/** narrowing / assertion */
// function 내함수(x: number | string) {
//     if (typeof x === 'string') {
//         return x+'1'
//     } else {
//         return x+1
//     }  
// }
// 내함수(123)
// function 내함수2(x: number | string) {
//     let array :number[] = [];
//     if (typeof x === 'number') {
//         array[0] = x;
//     } else {
//         return '문자 안돼요'
//     }
// }
// 내함수2(123)
// function 내함수3(x: number | string) {
//     let array :number[] = [];
//     array[0] = x as number;
// }
// 내함수2(123)
// function 클리닝함수(x : (number | string)[]) {
//     let arr:(number | string)[] = [];
//     x.forEach((a)=>{
//         if (typeof a === 'string') {
//             arr.push(parseInt(a))
//         } else {
//             arr.push(a)
//         }
//     })
//     console.log(arr)
// }
// 클리닝함수(['1',2,'3'])
// function 만들함수(x:{ subject : string|string[] }):string {
//     if(typeof x.subject === 'string') {
//         return x.subject;
//     } else if(Array.isArray(x.subject) === true) {
//         return x.subject[x.subject.length -1];
//     } else {
//         return '없음'
//     }
// }
// console.log(만들함수( { subject : 'math' } ))  //이 경우 'math'를 return
// console.log(만들함수( { subject : ['science', 'art', 'korean'] } )) //이 경우 'korean'을 return
// console.log(만들함수( { hello : 'hi' } ))  //이 경우 타입에러 나면 됩니다 
/** type 변수에 담아쓰기 & readonly */
// type Animal = string | number | undefined;
// let 동물 : Animal = 123;
// type AnimalType = { name : string, age : number};
// let 동물2 : AnimalType = { name : 'kim', age : 4}
// // const 변수 특징 -> object 자료 수정 가능
// const 출생지역 = { region : 'Seoul'}
// 출생지역.region = 'Busan'
// type Girlfriend = { readonly name : string };
// const 여친:Girlfriend = { name : 'amber' }
// 여친.name = '유라' // readonly 써서 에러남
// type Name = string;
// type Age = number;
// type Person = Name | Age;
// type PositionX = { x : number };  // type 변수 재정의 불가능
// type PositionY = { y : number };
// type NewType = PositionX & PositionY;  // & 연산자로 object 타입 extend 하기
// let position:NewType = { x:10, y:20 }
// // 숙제
// // -> object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면
// type 숙제obj1 = {name:string, age:number}
// type 숙제obj2 = {name:string, married:boolean}
// type 숙제obj = 숙제obj1 & 숙제obj2
// let 숙제오브제:숙제obj = {name : 'ㅇ', age : 29, married : true}
// type 숙제2 = {
//     color? : string,
//     size : number,
//     readonly position : number[]
// }
// type 숙제3 = { 
//     name : string, phone : number, email : string 
// }
// let 인포:숙제3 = { name : 'kim', phone : 123, email : 'abc@naver.com' }
// type 숙제4 = { adult: boolean }
// type 숙제34 = 숙제3 & 숙제4
/** Literal types */
// let 이름:'kim'; 
// let 접니다:'대머리'|'솔로';
// function 함수(a:'hello') :1|0 {
//  return 1
// }
// 함수('hello')
// var 자료 ={
//     name : 'kim'
// } as const
// function 내함수(a :'kim') {
// }
// 내함수(자료.name)
/** 함수와 method에 type alias 지정하는 법 */
// type 함수타입 = (a :string) => number
// let 함수:함수타입 = function(){
//     return 10
// }
// type member = {
//     name : string,
//     age : number,
//     plusOne : (a :number) => number
//     changeName : () => void
// };
// let 회원정보:member = {
//     name : 'kim',
//     age : 30,
//     plusOne(a:number) :number{
//         return 5
//     },
//     changeName : () => {}
// }
// 회원정보.plusOne(4)
// type CutZeroType = (a:string) => string;
// let cutZero:CutZeroType = (a) => {
//     if(a[0] === '0') {
//         return a.slice(1)
//     } else {
//         return a
//     }
// }
// type RemoveDashType = (a:string) => number;
// let removeDash:RemoveDashType = (a) => {
//     let result = a.replace(/-/g,"")
//     return parseFloat(result);
// }
// type 만들함수타입 = (
//     x : string,
//     y : CutZeroType,
//     z : RemoveDashType
// ) => void;
// let 만들함수:만들함수타입 = function(x, y, z) {
//     let result = z(y(x));
//     console.log(result)
// }
// 만들함수('010-1111-2222', cutZero, removeDash)
// 10/22 여기까지 
/** ts로 html 조작 */
var 제목 = document.querySelector('#title');
if (제목 != null) {
    제목.innerHTML = '반갑다';
}
if (제목 instanceof Element) { // 가장 많이 쓰게 될것.
    제목.innerHTML = '반갑다';
}
var 제목1 = document.querySelector('#title'); //assertion
제목1.innerHTML = '반갑다';
if ((제목 === null || 제목 === void 0 ? void 0 : 제목.innerHTML) != undefined) {
    제목.innerHTML = '반갑다';
}
var 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com';
}
var 버튼 = document.querySelector('#button');
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
    console.log('야호');
});
//숙제
var 사진 = document.querySelector('img');
if (사진 instanceof HTMLImageElement) {
    사진.src = "new.jpg";
}
var link = document.querySelectorAll('.naver');
link.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = 'https://kakao.com';
    }
});
