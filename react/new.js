// var person ={}
// person.name = 'chun';
// person.introduce = function(){
//     return 'My name in  ' + this.name;
// }

// document.write(person.name);
// document.write(person.introduce());

// 객체 정의하면서 값 매핑
var person= {
    'name' : 'chun',
    'introduce' : function(){
        return 'My name is ' + this.name;
    }
}

console.log(person.name);
console.log(person.introduce());

// 생성자 (여러 사람의 이름을 담을 객체가 필요하다면
// 객체의 정의를 반복해야 할것. 객체 구조 재활용필요)
function Person(){}    
var p = new Person();  //함수 호출시 new 붙이면 새 객체를 만듬
p.name = 'chun';
p.introduce = function(){
    return 'My name is ' + this.name;
}

console.log(p.name);
console.log(p.introduce());

//여러 사람 객체를 만들려면 introduce 반복이 생김
//introduce를 new 객체 생성시에 박아넣자

function Person(name){
    this.name = name;
    this.introduce = function(){
        return 'My name is ' + this.name;
    }
}

var p1 = new Person('chun');  // chun > 'chun' 주의
console.log(p1.introduce());
var taliya = new Person('Taliya');
console.log(taliya.introduce());

// 생성자 내에서 이 객체의 프로퍼티를 정의하고 있다. 이러한 작업을 초기화라고 한다. 이를 통해서 코드의 재사용성이 대폭 높아졌다.
// 코드를 통해서 알 수 있듯이 생성자 함수는 일반함수와 구분하기 위해서 첫글자를 대문자로 표시한다.
