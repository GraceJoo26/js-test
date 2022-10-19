//산술연산자 (arithmetic operator +,-,*,/)

//let a = 2 // = 할당연산자
//a = a + 1
//a /= 1

console.log(a)


//비교연산자 (conparison operator)

/* const a = 1
const b = 3 */

/* console.log(a === b) 

function isEqual(x,y){
    return x === y
}


console.log(isEqual( 1, 1 ))
console.log(isEqual( 2, '2' ))
 */
//console.log(a < b)

//논리 연산자 (logical operator)

/* const a = 1 === 123
const b = 'AB' === 'ABc'
const c = false

console.log(a)
console.log(b)
console.log(c)

console.log('&&: ', a && b && c)
console.log('||: ', a || b || c)
console.log('!: ',!a) */ //not 연산자



//삼항연산자 (ternary operator)

/* const a = 1<2
if (a) {
    console.log('true')
} else {
    console.log('false')
}

console.log(a ? 'true' : 'false') */


import random from './getRandom'
// 조건문 (If statement)

const a = random()

if (a === 0) {
    console.log('a is 0')
} else if ( a === 2){
    console.log('a is 2')
} else {
    console.log('rest...')
}