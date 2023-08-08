// {exercise1}
// let name="dhruvi";

// {exe2}
// let age=20;

// {ex 3}
// let strnumber="42";
// let age=Number(strnumber);

// {ex 4}
// let x=5;
// let y=7;
// console.log(x+y);

// {ex 5}
// let m=10
// let n=3
// console.log(m-n);

// {ex 6}
// let x=4
// let y=6
// console.log(x*y);

// {ex 7}
// let p=15
// let q=3
// console.log(p/q);

// {ex 8}
// let j=10
// let k=3
// console.log(j % k);

// {ex 9}
// let a="4"
// let b="2"
// console.log(a>b)

// {ex 10}
// let h="apple"
// let k="banana"
// console.log(h>k)

// {ex=11}
// let ismorning=true;
// if(ismorning){
// console.log('hello')
// }

// {ex=12}
// let isEvening=true
// if(isEvening){
// console.log('goodbye')
// }

// {ex=13}
// let x=2
// let y=3
// if(x > 0 && y>0){
// console.log('both greater than zero')
// }

// {ex=14}
// let a=5
// let b=10
// if(a===10 || b===10){
// console .log('a or b is eual to 10')
// }

// {ex =15}
// let x=7
// let y=5
// let z=8
// if(x > y || z < 10)
// console.log('x grater than y')

// ex= 16
// let x;
// x=('"Hello,world!"')
// alert(x)

// ex=17
// let username= prompt('what is your name?')
// console.log(username)

// ex=18
// let isadult=confirm('are you 18 years older?');
// if(isadult){
// console.log('you are adult')
// }
// else{
// console.log('you are not an adult')
// }

// ex=19
// let name;
// console.log('Hello Dhruvi')

// ex=20
// let fnumber=prompt('enter first number')
// let number=prompt('enter second number')
// consol.log(fnumber+number)

// always => return
function xyz() {
  // hoisting
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
      console.log(i, j);
    }
    // console.log(j);
  }
  // console.log('i is: ', i);
  return 10;
}
const a = xyz();
console.log(a);
// console.log(i)

function sum(num1, num2) {
  const ans = num1 + num2;
  return ans;
}

function Sum(num1, num2) {
  return num1 + num2;
}

function mul(num1, num2) {
  const ans = num1 * num2;
  return ans;
}

function div(no1, no2) {
  const ans = no1 / no2;
  if (ans === 2) {
    return 50;
  } else if (ans === 5) {
    return 10;
  }
  return 5 * 2 + (9 / 20) * 30; // expression => evulate
}

const x = sum(10, 20);
const y = sum(20, 20);
const z = mul(20, 20);
// console.log(y)
// console.log(z)
const w = div(10, 5); // 2
console.log(w);
console.log(sum(10, 200));

let i=1;
while(i<=10);
alert(i);
i++;

for(let i=0;i<=10;i++)
console.log(i);