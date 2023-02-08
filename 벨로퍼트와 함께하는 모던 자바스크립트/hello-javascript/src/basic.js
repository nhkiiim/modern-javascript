// 화살표 함수
const add1 = (a, b) => {
   return a + b;
}

const add2 = (a, b) => a + b;

console.log(add1(1, 2));
console.log(add2(1, 2));


// 객체 비구조화 할당 (객체 구조 분해)
// 이 코드가 객체에서 값들을 추출해서 새로운 상수로 선언
const ironMan = {
   name: '토니 스타크',
   actor: '로버트 다우니 주니어',
   alias: '아이언맨'
};

const captainAmerica = {
   name: '스티븐 로저스',
   actor: '크리스 에반스',
   alias: '캡틴 아메리카'
};

function print(hero) {
   const { alias, name, actor } = hero;
   const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor}입니다`;
   console.log(text);
}

print(ironMan);

// 파라미터 단계에서 객체 비구조화 하기
function print2({ alias, name, actor }) {
   const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor}입니다.`;
   console.log(text);
}

print2(captainAmerica);



// 객체 안에 화살표 함수를 선언할 경우 this를 가르킬 수 없음!
const dog = {
   name: '멍멍이',
   sound: '멍멍!',
   say: () => {
      console.log(this.sound);
   }
};

dog.say();


// Getter Setter 함수
// JS에도 Getter Setter가 있구만?
const numbers = {
   a: 1,
   b: 2,
   get sum() {
      console.log('sum 함수가 실행됩니다!');
      return this.a + this.b;
   }
};

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);


// for...of문 (forEach문 같은 건데 잘 사용 안함)
let numbers2 = [10, 20, 30, 40, 50];
for (let number of numbers2) {
   console.log(number);
}


// 객체를 배열 형태로 가져오기
const doggy = {
   name: '멍멍이',
   sound: '멍멍',
   age: 2
};

console.log(Object.entries(doggy)); // [ [ 'name', '멍멍이' ], [ 'sound', '멍멍' ], [ 'age', 2 ] ]
console.log(Object.keys(doggy)); // [ 'name', 'sound', 'age' ]
console.log(Object.values(doggy)); // [ '멍멍이', '멍멍', 2 ]

//for...in 문
for (let key in doggy) {
   console.log(`${key}: ${doggy[key]}`);
}

// 배열 내장함수 forEach
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

superheroes.forEach(hero => {
   console.log(hero);
})

// map
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const square = n => n * n;
const squared = array.map(square);


// findIndex, find, filter
const todos = [
   {
      id: 1,
      text: '자바스크립트 입문',
      done: true
   },
   {
      id: 2,
      text: '함수 배우기',
      done: true
   },
   {
      id: 3,
      text: '객체와 배열 배우기',
      done: true
   },
   {
      id: 4,
      text: '배열 내장함수 배우기',
      done: false
   }
];

const index = todos.findIndex(todo => todo.id === 3);
console.log(index);

const todo = todos.find(todo => todo.id === 3);
console.log(todo); // { id: 3, text: '객체와 배열 배우기', done: true }

const tasksNotDone = todos.filter(todo => !todo.done);
console.log(tasksNotDone);

// reduce
const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current) => {
   console.log({ accumulator, current });
   return accumulator + current;
}, 0);

console.log(sum);