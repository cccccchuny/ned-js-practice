// function Person(name){
//     this.name =name;
//     this.introduce = function(){
//         return 'My name is ' + this.name;
//     }
// }

const { prototype } = require("./jquery");

// var p1 = new Person('chun');
// document.write(p1.introduce()+"<br />");


// function Person(name){
//     this.name =name;
// }

// Person.prototype.name=null;
// Person.prototype.introduce=function(){
//     return 'My name is ' + this.name;  
// }
// var p1 = new Person('chun');
// document.write(p1.introduce() + "<br />");

// 결과는 같지만 상속을 위한 준비를 마쳤음.. 무슨뜻? 고민필요

// function Person(name){   // 생성자 사용위한 함수
//     this.name = name; 
// }
// Person.prototype.name = null ; 
// Person.prototype.introduce = function(){
//     return 'My name in ' + this.name ;
// }

// function Programmer(name){
//     this.name = name;
// }

// Programmer.prototype = new Person()

// var chun = new Person('chun');
// console.log(chun.introduce());

// var ai = new Programmer('uehara Ai');
// console.log(ai.introduce());

//programmer 가 person 의 기능을 상속.
//단순히 같은 기능만 갖는다면 무의미
//부모 기능을 계승 발전 가능한 것이 상속의 가치

function Person(name){
    this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function(){
    return 'My name is ' + this.name;
}

// var chun = new Person('chun');
// alert(chun.introduce());

function Programmer(name){
    this.name=name;
}

Programmer.prototype = new Person();
Programmer.prototype.coding = function(){
    return "hello world";
}

var ai = new Programmer('uehara ai');
alert("ai coding  " + ai.coding());
alert(ai.introduce());
alert(ai.name);

// ai 가 person 을 상속받아 iutroduce 기능을 사용할수 있으며
// ai 만의 기능인 coding을 사용한다.

function Person(name){
    this.name = name;
}

var chun = new Person('chun');
var ai = new Person();

Person.prototype.test = function(){
    return 'test';
}
Person.prototype.name = null;
Person.prototype.introduce = function(){
    return 'hi my name is ' + this.name;
}

// console.log(chun.test());
// console.log(chun.name);
// console.log(chun.introduce());

function Agile(){};

var Agile = new Person('agile');

// console.log(Agile.introduce());

Agile.do = function(){
    alert("specify only agile");
    return("yes");
}

// console.log(Agile.do());

console.log(prototype.test());   // prototype is not defined 출력..
// prototype 은 객체라고 했다..
// 그러면 최상위인 window 의 하위에 포함되는것 아닐까??
