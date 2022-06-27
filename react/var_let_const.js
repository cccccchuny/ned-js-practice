var txt1 = 'text1';
console.log(txt1);

if (true) {
  var txt2 = 'text2';
  console.log(txt2);
}

console.log(txt1);
console.log(txt2);

let txt1_1 = 'text1_1';
const txt3 = 'hello';
console.log(txt1_1);

if (true) {
  let txt2_2 = 'text2_2';
  console.log(txt2_2);
}

console.log(txt1_1);
//console.log(txt2_2);  //error
//txt3 = 'world'; //error
console.log(txt3);



// 코드 설명
// 일반적인 언어에서는 if 블럭안에 쓰인 txt2는 블럭 밖에서 사용할 수 없으나 자바스크립트는 가능.
// let으로 선언된 txt2_2 는 블럭 밖에서 참조 불가능.
// const로 선언된 txt3는 값 변경 불가능.
// 실행결과는 콘솔로 출력(브라우저 f12 -> console 에서 확인)


// hoisting
// 자바스크립트에서 호이스팅은 정의된 변수의 선언문을 유효범위의 최상단으로 끌어올리는것.

// 즉 변수의 선언과 할당이 동시에 일어나지 않고 분리된다는 의미이고
//     변수가 함수 내에서 정의된 경우 : 선언이 함수의 최상위로 호이스트됨.
//     변수가 함수 밖에서 정의된 경우 : 선언이 전역 컨텍스트의 최상위로 호이스트됨.

//     호이스팅된 변수의 선언이 할당과 동시에 일어나는 것이 아니라 선언부만 최상단으로 호이스트되어 가장 먼저 해석되는데 중요

// 선언과 할당
//     선언 : 변수를 초기화하는 구문
//     할당 : 변수에 값이 부여됨을 의미

//         console.log('log1:'+txt);   txt가 초기화 안되어있음 다른언어에서는 에러출력하지만 자스는 언디파인 출력

//         if (true) {

//         console.log('log2:'+txt);   역시 초기화 안되어있지만  언디파인

//         var txt = 'text';           txt 초기화 되는 구문이 뒤에있어도 
//         }

//         console.log('log3:'+txt);