// // 다양한 배열 선언
// // 기본적인 배열이외 데이터형이 혼합된 배열, 객체형 배열의 선언과 참조 방법을 실습 

// var numbers1 = [10, 30, 50, 70, 90];
// var numbers2 = new Array(20, 40, 60, 80, 100);

// var mixedArr = ['a', 1, 'b', 2, new Date(), "today"];
// var objArr = [
//   {
//     "id" : 20192010,
//     "name" : "HongGilDong",
//     "dept" : "Software"
//   },
//   {
//     "id" : 20192011,
//     "name" : "KimSanrang",
//     "dept" : "Business Management"
//   },
//   {
//     "id" : 20192012,
//     "name" : "KangDongSu",
//     "dept" : "Computer Engineering"
//   }
// ];

// console.log(numbers1);
// console.log(numbers2);
// console.log(mixedArr);
// console.log(objArr[2].name, objArr[2].dept);










// Map 기본 예제
// Map의 기본적인 사용법을 익히고 다양한 방법으로 Map 데이터를 출력해 보는 예제
// forEach() 를 이용해 key, value 값을 각각 출력.
// for-of 에서도 key, value 를 각각 받아와 출력 가능.

// const map = new Map();
// map.set("2019101","HongGilDong");
// map.set("2019102","KimSaRang");
// map.set("2019103","KandDongSu");

// console.log("### Original data: forEach with Arrow")
// map.forEach((value, key) => console.log(key, value));

// console.log("### Original data: for-of")
// for(let item of map ) {
//   console.log(item[0],item[1]);
// }

// console.log("### Original data: for-of with key, map")
// for(let [key, value] of map ) {
//   console.log(key,value);
// }

// console.log("### Original data: map.keys()")
// const keys = map.keys();
// for(let key of keys) {
//   console.log(map.get(key));
// }

// console.log("### Map functions")
// console.log("get 201901: "+map.get("2019101"));
// map.delete("2019103")
// console.log("after delete 201903, has : ", map.has("2019103"));









// Set 기본 예제
// Set의 기본적인 사용법을 익히고 다양한 방법으로 Set 데이터를 출력해 보는 예제
// Array.from() 을 이용하면 Set 을 배열로 변환 가능.

// const set = new Set();
// set.add("HongGilDong");
// set.add("KimSanRang");
// set.add("KangDongSu");

// console.log("## Original Set: forEach")
// set.forEach((value) => console.log(value));

// console.log("## Original Set: for-of")
// for(let item of set ) {
//   console.log(item);
// }

// set.delete("KangDongSu");
// console.log("## After delete KangDongSu has: "+ set.has('KangDongSu'));

// console.log("## new Array from Set")
// let arr = Array.from(set);
// console.log(arr);