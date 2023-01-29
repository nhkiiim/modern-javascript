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