// 함수, 객체 종합 실습 예제
// 함수와 객체는 실제 프로그램을 설계하고 개발하는데 핵심적인 역할을 담당합니다.
//  간단한 함수 예제와 함께 객체를 활용한 응용 예제들을 실습




//  함수 관련 예제

//  calc1 변수는 함수로 선언되고 calc2 함수는 인자로 함수를 받는다.
// calc2(calc1)과 같이 함수의 인자로 함수를 전달 한다.
// funcArr 은 배열의 원소에 함수를 사용하는 방법을 보여준다.
// map의 원소로도 함수를 사용할 수 있다.

//  function calc(a, b) {
//     let sum1 = a + b;
//     sum2 = a + b;
//     return sum1;
//   }
  
//   console.log(calc(20, 30)); // 50
  
  
//   var calc1 = function(a, b) {
//     return a+b;
//   }
  
//   function calc2(func) {
//     console.log(func(20,30));
//   }
  
//   console.log(calc1(20,30));
//   calc2(calc1);
  
//   // 배열원소로 함수 선언.
//   let funcArr = [function() {console.log("v1")},"v2"];
  
//   // 맵원소로 함수 선언.
//   let mapArr = new Map();
//   mapArr.set("calcFunc",function(n1,n2) {return n1*n2});
  
//   console.log(funcArr[0]());
//   console.log(mapArr.get("calcFunc")(20,10));








// 객체 이니셜라이저
// 객체 선언은 {} 블럭으로 이루어 짐.
// `key`:value 구조
// getTotalScore 는 메서드로 배열의 reduce() 를 이용해 원소들의 합을 구한다.

// let student = {
//     'id': 2019101,
//     'name': 'HongGilDong',
//     'scores': [95,80,91,85],
//     'getTotalScore': function() {
//       return this.scores.reduce((prev, curr) => prev + curr);
//     }
//   }
  
//   console.log(student.getTotalScore());









//   생성자, 클래스
//   생성자를 이용한 Product 객체 선언과 Product 클래스 선언.
//   주석을 바꿔 가며 생성자, 클래스 각각 테스트

//   function Product(name, price) {
//     this.name = name;
//     this.price = price;
//     this.getInfo = function() {
//       return this.name + " , " + this.price;
//     }
//   }
  
  
//   /*
//   class Product {
//     constructor(name, price)  {
//       this.name = name;
//       this.price = price;
//     }
  
//     getInfo() {
//       return this.name + " , " + this.price;
//     }
//   }
//   */
  
//   let p1 = new Product("애플 아이폰",1000000);
//   let p2 = new Product();
//   p2.name = "삼성 갤럭시"
//   p2.price = 1100000;
  
//   console.log(p1.getInfo());
//   console.log(p2.getInfo());
