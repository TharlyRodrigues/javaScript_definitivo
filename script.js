/*
console.log("hellos");
var a;
a = 3;
console.log(a);

var then = new Date();
console.log(then);

// Trabalhando com strings

const msg = "hello " + "world";
// console.log(msg);
console.log(msg.length);

// for
for (var i = 1; i <= 10; i++) console.log(i);
// for (var i = 0, j = 10; i < 10; i++, j--) console.log(i * j);
// for (var p in o) console.log(p);


// Escopo de variável
// variável local
const scope = "global";
function checkScope() {
  const scope = "local";
  return scope;
}
console.log(checkScope());

*/
// As definições de função podem ser aninhadas. Cada função tem seu próprio escopo local; portanto,
// é possível ter várias camadas de escopo local aninhadas. Por exemplo

const scope = "global scope";
function checkScope() {
  const scope = "local scope";
  function nested() {
    const scope = "nested scope";
    return scope;
  }
  return nested();
}

console.log(checkScope());
