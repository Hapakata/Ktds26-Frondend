function testFunction() {
  console.log("반갑습니다");
}

testFunction();

function getResult(numberOne, numberTwo, operator) {
  if (operator === "+") {
    return numberOne + numberTwo;
  } else if (operator === "-") {
    return numberOne - numberTwo;
  } else if (operator === "*") {
    return numberOne * numberTwo;
  } else if (operator === "/") {
    return numberOne / numberTwo;
  } else {
    return 0;
  }
}

var result = getResult(10, 20, "+");
console.log(result);

function print(msg) {
  console.log(arguments);
  console.log(msg);
}

print(); //undefined
print("hello"); // hello
print("hello", "hi"); //hello

function print() {
  console.log("Print 함수 살행");
  var number = 10;

  function info() {
    console.log("Info 함수 실행!");
    console.log(number);
  }
  info();
}
//info(); // 함수내 함수는 접근할 수 없음  -> Java 의 Private 와 같음
print();

////////////////////////////////////////
/////////////// Callback ///////////////
////////////////////////////////////////

// 함수를 변수에 할당하는 방법

// 익명함수 -> 이름이 없는 함수
/*
    익명함수를 실행시키는 방법 2가지
    1. 즉시 실행 함수.
    2. 익명함수를 변수에 할당.
*/

// -> 즉시 실행 함수
(function () {
  console.log("안녕하세요? 즉시실행함수입니다 선언과 동시에 실행했어요");
})();

(function (msg) {
  console.log(
    "안녕하세요? 파라미터를 받는 즉시실행함수입니다 선언과 동시에 실행했어요"
  );
  console.log(msg);
})("반갑습니다 파라미터에요");

// -> 익명함수를 변수에 할당
var anonymousFunction = function (msg) {
  console.log("함수표현식");
  console.log("익명함수를 변수에 할당했어요");
  console.log(msg);
};
anonymousFunction("파라미터를 받아요");

// Callback function
// 비동기통신 할떄 사용 -> 시작시점과 종료시점을 모르는 통신
function asyncFunction(otherFunction) {
  console.log("엄청나게 오래걸리는 함수입니다.");
  otherFunction();
}
asyncFunction(function () {
  console.log("엄청나게 오래걸리는 함수가 끝나면 이 함수가 실행될 예정입니다.");
});

// 함수로 하게되는 일?
// HTML Tag, CSS를 제어하는 일
