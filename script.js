// var let const
// var firstName = "Kingsley"
// let secondPersonFirstName = "23"
// const petAge = 3

// values type
// string number
// "Kingsley" "23" 26

// console.log(petAge)

// console.log(typeof (firstName))
// console.log(typeof (secondPersonFirstName))
// console.log(typeof (petAge))

// console.log(firstName)
// console.log(firstName)
// console.log(perName)
// const petName = "Mimi"
// console.log(secondPersonFirstName)
// console.log(secondPersonFirstName)


// Day 2
//Basic operators
// const bornYear = 1984
// const currentYear = 2024

// const age = currentYear - bornYear
// console.log(age)

// const nextYearAge = age + 1
// console.log(nextYearAge)

// const number1 = 1546
// console.log(number1 / 2)

// console.log(3 * 4)

// 2 * 2 * 2 = 8

// console.log(2 * 4)

// 10 + 5 = 15
// let x = 10 + 5
// console.log(x)

// let x = 0

// let y = x + 10
// let z = x += 10
// console.log(x)
// console.log(y)
// console.log(z)

// let x = 15
// console.log(x += 10)

// compare operators

// const x = 5
// const y = 7

// console.log(x > y)
// console.log(x < y)


//Operator precedence (优先级)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence


// Template Literals
// const age = 14
// const teacherName = 'Mia'

// Mia is teaching 14 years old boy programming

// const texts = teacherName + ' is teaching' + age + ' years old boy programming'


// const textTwo = `${teacherName} is teaching ${age} years olds boy programming, and we have ${x - y} hours time to study`

// console.log(textTwo)

// If else statement

// if (5 > 6) {
//     console.log('it is true')
// } else {
//     console.log('it is false')
// }

// const x = 5
// const y = 4

// console.log(x - y)
// console.log(y - x)


// Truthy and Falsy Values:
// Truthy: All positive numbers, negative numbers, and non - zero numbers are "truthy."
// Falsy: 0, null, undefined, NaN, false, and ""(empty string).

// if (x - y) {
//     console.log('it is true')
// } else {
//     console.log('it is false')
// }


// type Conversion and coercion
//Conversion - manually convert from one type to another

// const inputYear = '1991';
// const inputYearNumber = 1991;

// console.log(inputYearString)
// console.log(inputYearNumber)
// console.log(Number(inputYearString) + 18);
// console.log(Number(inputYearString), inputYearString);
// console.log(Number('Mia'))
// console.log(String(23), 23)

//Coercion - JS automatically converts types behind the scense
// console.log('I am ' + 23 + ' years old')
// console.log('I am ' + '23' + ' years old')

// let n = '2' + 6
// n = n - 1
// console.log(n)





// Truthy and Falsy value

// false value : 0, '', undefined, null, NaN
// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean('Mia'))
// console.log(Boolean(''))
// console.log(Boolean(null))
// console.log(Boolean(NaN))

// const money = 0;
// if (money) {
//     console.log('we have money')
// } else {
//     console.log('we dont have money')
// }

// let height = 0;
// if (height) {
//     console.log('height is defined')
// } else {
//     console.log('height is NOT defined')
// }


// == vs ===
// === strict equality operator
// == loose equality operator
// const age = '18';

// if (age == 18) console.log('you become an adult (strict)')

// const favNumber = prompt('whats your fav number?')
// console.log(typeof favNumber)

// if (Number(favNumber) === 23) {
//     console.log('23 is a good number')
// } else {
//     console.log('23 is not a good number')
// }

// Boonlean logic

//  && : and
//  || : or
//  ! : not

// and &&

// let isRaining = true;
// let hasUmbrella = true;

// if (isRaining && hasUmbrella) {
//     console.log('you can go outside without wet')
// } else {
//     console.lolg('you must get wet')
// }

// let isWeekend = true;
// let isHoliday = false;

// let canRelax = isWeekend && isHoliday

// && must be A is true and B is true
// console.log(canRelax)

// if (A && B) {
//     console.log('A and B can be both as a condition and return when A and B are satisfaile' )
// }

// OR ||

// let isWeekend = true;
// let isHoliday = false;

// if (isWeekend || isHoliday) {
//     console.log('you can relex')
// } else {
//     console.log('you must work')
// }

// let userInput = null;
// let defaultInput = userInput || 'this is a value';
// console.log(defaultInput)

// let result = "" || 0 || false || true || 'hello';
// console.log(result)


// let result = '' || false || null || 0
// console.log(result)

// let isLoggedIn = false;
// let isAdmin = true;

// if (isLoggedIn || isAdmin && true) {
//     console.log('access granted')
// } else {
//     console.log('access deined')
// }

// ! : not
// let isSunny = true;
// console.log('before not operator', isSunny)

// let isNotSunny = !isSunny;
// console.log('after NOT operator', isNotSunny)

// if (!isSunny) {
//     console.log('it is not sunny outside')
// } else {
//     console.log('it is sunny outside')
// }

// swithc statament
// const day = 'wednesday';

// switch (day) {
//     case 'monday':
//         console.log('BBQ day')
//         console.log('and we are so happy')
//     case 'tuesday':
//         console.log('we are stay home')
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('today is rainning')
//         break;
//     case 'friday':
//         console.log('Yay, today is friday')
//     case 'saturday':
//     case 'sunday':
//         console.log('the weekend is end now...')
//     default:
//         console.log('not a valid day')
// }


// let day;
// console.log(new Date().getDate())
// switch (new Date().getDate()) {
//     case 19:
//         day = 'sunday';
//         break;
//     case 20:
//         day = 'Monday';
//         break;
//     case 2:
//         day = 'Tuesday';
//         break;
//     case 3:
//         day = 'Wesnesday';
//         break;
//     case 4:
//         day = 'Thursday';
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
// }

// document.getElementById("demo").innerHTML = "Today is " + day;


// Statements and Expressions
//Expressions is provid a value
// 3 + 4
// 1991
// ture && false && !false
// //Statements
// if (23 > 10) {
//     const str = '23 is bigger'
// }


