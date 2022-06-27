// 예제 2-3) 출력문 예제
// 자바스크립트에서의 기본 출력은 console, alert, document 입니다. 실제 웹 프로그램 개발에는 DOM과 CSS를 조작하해서 콘텐츠를 변경하거나 디자인을 변경하는 방법을 사용합니다. 여기서는 세가지 방법을 이용한 출력을 예제를 통해 살펴 봅니다.

var name = 'HongGilDong';
//document.write(name);
document.getElementById("result").innerHTML = name;
alert(name);
console.log(name);

// 코드 설명
// HTML의 <h3> 태그는 id=result 로 선언되고 내용은 비어 있음.
// document.write() 를 이용하면 원래 HTML 내용을 지우고 출력.
// document.getElementById() 는 id가 result 인 태그를 찾아 이름을 출력


// html 코드
// <!doctype html>
// <html>

//   <body>
//     <h2>Hello World</h2>
//     <h3 id="result"></h3>
//   </body>

// </html>