/*
undefined의 의미
변수는 존재하지만 해당 변수에 값이 할당되어있지 않은 상태.
*/

/*
변수의 정의는 아래에 있는 상태에서
변수의 값을 출력할 경우 어떤 일이 벌어지는가?

-- 변수의 Hosting 현상이 발생.
*/

/**
 * 함수 내에서 생성된 변수들은 항상 호이스팅된다.
 * 변수가 어디에 정의되어있더라도 항상 함수의 가장 위쪽으로 호이스팅 한다.
 */
function test(number) {
  if (number < 100) {
    var result = number + "는 100보다 작습니다.";
  } else {
    var result = number + "는 100보다 크거나 같습니다.";
  }

  console.log(result); // ?
}

test(100);
