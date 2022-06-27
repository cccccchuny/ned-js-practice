// 1~4 : classical , 5 : prototypal

// 1. 기본 방법.
// 부모에 해당하는 함수를 이용하여 객체를 생성
// 자식에 해당하는 함수의 prototype 속성을 부모 함수를 이용해 생성한 객체 참조

function Person(name){
    this.name =name || '형춘';
}

Person.prototype.getName = function(){
    return this.name;
}

function Korean(name){}
Korean.prototype = new Person();

var kr1 = new Korean();
console.log(kr1.getName());

var kr2 = new Korean('지수');
console.log(kr2.getName());

// 2. 생성자 빌려쓰기
// 기본 방법의 문제점인 자식 함수에서 받은 인자를 부모함수로 인자를 전달하지 못했던
// 부분을 해결함, 부모함수의 this에 자식 객체를 바인딩하는 방식
// 하지만 이 방법은 부모 객체의 this로 된 멤버들만 물려받게 되는 단점.
// 따라서 부모객체 프로토타입 객체의 멤버는 물려받지 못함.

function Person(name) {
    this.name = name || "형춘";
}

Person.prototype.getName = function(){
    return this.name;
};

function Korean(name){
    Person.apply(this, arguments);
}

var kr1 = new Korean("지수");
// console.log(kr1.getName());
console.log(kr1.name)

// 3. 생성자 빌려쓰고 프로토타입 지정해주기
// 1,2 문제점을 보안
// 이 방법에도 문제가 있음,, 이유는 부모 생성자를 두번 호출한다는것
// 생성자 빌려쓰기 방법과 달리 getName()은 제대로 상속 되었지만
// name에 대해서는 kr1 객체와 부모함수를 이용하여 생성한 객체에도 있는 것을 볼수 있다.

function Person(name) {
    this.name = name || "형춘";
}

Person.prototype.getName = function(){
    return this.name;
}

function Korean(name){
    Person.apply(this, arguments);
}

Korean.prototype = new Person();

var kr1 = new Korean("탈리야");
console.log(kr1.getName());

// 4. 프로토타입 공유
// 이번 방법은 부모 생성자를 한 번도 호출하지 않고 프로토타입 객체를 공유하는 방법

function Person(name){
    this.name = name || "형춘";
}

Person.prototype.getName = function(){
    return this.name;
}

function Korean(name){
    this.name = name;
}

Korean.prototype = Person.prototype;

var kr1 = new Korean("지수");
console.log(kr1.getName());

// 5. prototypal 방식의 재사용
// 이 방법은 Object.create()를 사용하여 객체를 생성과 동시에 프로토타입 객체를 지정
// 이 함수는 첫 번째 매개변수는 부모객체로 념겨주고 , 두 번째 인자는 선택적 매개변수
// 로써 반환되는 자식객체의 속성에 추가되는 부분이다. 이 함수를 사용함으로서
// 객체 생성과 동시에 부모객체를 지정하여 코드의 재활용을 간단하게 구현 가능

// 소스 1라인에서 부모 객체에 해당하는 person을 객체 리터럴 방식으로 생성했다. 
// 그리고 11라인에서 자식 객체 chun은 Object.create() 함수를 사용해 첫번째 매개변수로
// person을 넘겨받아 chun 객체를 생성하였다. 한 줄로 객체를 생성함과 동시에 부모 객체의
// 속성도 모두 물려받았다. 위의 1~4 번에 해당하는 classical 방식보다 간단하면서 여러 가지
// 상황을 생각할 필요도 없다. JS 에서는 new 연산자와 함수를 통해 생성한 객체를 
// 사용하는 classical 방식 보다 prototypal 방식을 더 선호한다. 
var person = {
    type : "인간",
    getType : function(){
        return this.type;
    },
    getName : function(){
        return this.name;
    }
};

var chun = Object.create(person);
chun.name = "형춘";

console.log(chun.getType());
console.log(chun.getName());