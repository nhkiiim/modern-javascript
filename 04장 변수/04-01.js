// 4-2 변수 하나에 여러개의 값을 저장하기
var userId = 1;
var userName = 'Zzang';

var user = { id: 1, name: 'Zzang' };

var users = [
   { id: 1, name: 'Zzang' },
   { id: 2, name: 'ZzangGu' }
];


// 4-5 변수 선언의 실행 시점과 변수 호이스팅
console.log(score); // undefined

var score = 80;

console.log(score)  // 80


// 4-10
console.log(score1); // undefined

score1 = 80;
var score1;

console.log(score1); // 80

// 4-18 네이밍 컨벤션
// 카멜 케이스(camelCase)
var firstName;

// 스네이크 케이스(snake_case)
var first_name;

// 파스칼 케이스(PascalCase)
var FirstName;

// 헝가리언 케이스(typeHungarianCase)
var strFirstName;
var $elem = document.getElementById('myId'); // DOM 노드
var observable$ = fromEvent(document, 'click') // RxJS 옵저버블

