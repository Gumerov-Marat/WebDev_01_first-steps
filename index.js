function a1() {
  console.log('work a1');
  f22();
}

function f22() {
  console.log('f22 working');
  console.trace()
}
a1();

const c = {
  one: 1,
  two: 2,
  3: 'hello'
}

console.log(c);
console.table(c);

console.group();
console.log('hello');
console.warn('f22 working');
console.groupEnd()

let p = document.querySelector('p')
console.dir(p);

console.dir(one3) // айди хранится в глобальных переменных