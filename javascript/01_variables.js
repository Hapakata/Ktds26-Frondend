/*
Javascript : 개발목적 - 웹 블아줘에서 동작하는 함수형 언어
 - 이름이 Javascript - Java와 아무런 관련이 없다!!
 - 이 언어가 발표되던 시점에 흥행하던 언어가 Java 여서 이 인기 편승하기 위해

 - 개발 초기
    - 성능이 매우 안좋았음 --> VBScript
    - Google Chrome 브라우저가 발표되면서 Javascript의 성능이 매우매우매우 좋아졌다.
        - Javascript Engine -> V8 Engine 
        - V8 Engine -> 일반 OS에도 이식 --> OS Application 개발, Game(FPS), Server Program(Node.js), MongoDB

-Javascript 의 특징
    - Interpretor 언어
        - Javascript, Python, ASP, PHP
        - 작성하는 언어가 컴파일 되지 않는 언어
            - JIT Compiler (한줄한줄 마다 컴파일)
        - 속도가 비교적 느리다
        - 자료형이 없다
    - Compile 언어 
        - C++, C, C#, Java 코드를 기계어로 컴파일 하는 언어. 
        - 작성하는 언어와 컴파일된 언어가 별도로 존재하는 언어
        - 자료형 존재. (숫자, 문자, 블린, 등등)
    
    - Java와 문법이 매우 유사 (for, while, if...)
*/

var name = "Javascript";
console.log(name);
alert(name);
//document.write(name);

var name = 10;
console.log(name);
alert(name);
