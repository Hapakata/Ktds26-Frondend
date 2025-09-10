//배열
var scroes = [100, 200, 300];

/*
 Java의 배열과 차이점
 Java의 배열
    배열이 만들어진 이후 값을 추가하거나 삭제하는것이 불가능
 JavaScript의 배열
    배열이 만들어진 이후 값을 추가하거나 삭제하는 것이 자유롭다
*/

console.log(scroes);

for (var i = 0; i < scroes.length; i++) {
  console.log(scroes[i]);
}

// Java : for-each
// Js : for in
console.log("여기는 for in");
for (var i in scroes) {
  console.log(scroes[i]);
}

// 배열에 값 추가
scroes[3] = 90;
console.log(scroes);

// 배열에 값 추가
scroes.push(500);
scroes.unshift(10);
console.log(scroes);

// 배열에 값 삭제
scroes.pop(); //배열의 마지막 인덱스를 삭제
scroes.shift(); //배열의 첫 번째 인덱스를 삭제
console.log(scroes);

scroes.splice(1, 2); //scroes 배열에서 1번 인덱스 부터 2개를 지워라  -> slice 와 splice는 다름~
console.log(scroes);
