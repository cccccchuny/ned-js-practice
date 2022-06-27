// // 제어문을 실습하기 위한 간단한 예제 모음 입니다.

// // switch
// // 화면이 로딩되면 등급을 물어보고 입력된 등급에 따른 메시지를 브라우저 화면에 출력해 줍니다.
// // 입력값이 A,B,C가 아닌경우 No Level 을 출력 합니다

// let level = prompt("Enter your level(A/B/C)");

// switch(level) {
//   case 'A' :
//     console.log('VIP Level');break;
//   case 'B' :
//     console.log('Basic Level');break;
//   default :
//     console.log('No Level');break;
// }



// // for
// // 중첩 for 문을 사용해 구구단을 출력 합니다

// // for(let dan=2;dan<=9;dan++) {
// //     console.log("## "+dan+" times table ##");
// // for(let i=1;i<=9;i++) {
// //     console.log(dan+" * "+i+" = "+dan*i);
// // }
// // }



// for, while, forEach
// 배열 데이터를 이용한 for, while, forEach 예제 입니다.
// 집합형 데이터를 처리하는 경우 일반적인 for 문 보다 forEach 가 편리한 경우가 많습니다
// 배열데이터 처리를 위해 for, while 은 인덱스로 접근.
// forEach 의 경우 ES6 의 => 연산자 사용으로 간결한 코드 사용 가능.

// console.log('## for ##');
// const colors = ['red', 'blue', 'green'];
// for (let i = 0; i < colors.length; i++) {
// 	console.log( colors[i] );
// }

// console.log('## while ##');	
// var i=0;
// while (colors[i] != null) {
//   console.log( colors[i] );
//   i++;
// }

// console.log('## forEach ##');
// colors.forEach(function(value) {
//   console.log(value);
// });

// console.log('## forEach with Arrow ##');
// colors.forEach( value => console.log(value));





// for-in, for-of-for
// 배열 데이터를 이용한 for, while, forEach 예제 입니다.
//  집합형 데이터를 처리하는 경우 일반적인 for 문 보다 forEach 가 편리한 경우가 많습니다
//  for-in 에서 index 변수는 객체의 속성(배열의 경우 인덱스가 됨)이 전달됨.

//  const colors = ['red', 'blue', 'green'];

// console.log('## for-in ##');
// for (var index in colors) {
// 	console.log( colors[index] );
// }

// console.log('## for-of-for ##');
// for (var value of colors) {
// 	console.log( value );
// }