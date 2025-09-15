/*
//window.onload = function () {};
$(document).ready(function () {
  alert("Ready?");
});

//$() 에 기본값을 주지 않는다면 기본적으로 document 가 들어감
$().ready(function () {
  alert("Ready?");
});
*/

$().ready(function () {
  var list = $("li");

  //   // 각 li 태그들의 content 를 text 로 가져온다.
  //   var listItemText = list.text();
  //   console.log(listItemText);

  //   // 각 li 태그들의 content 를 "서울" 로 변경한다
  //   list.text("서울");

  // 1. p 태그의 text를 조회해서 콘솔로 출력한다
  var Pvalue = $("p").text();
  console.log(Pvalue);

  // 2. h2 태그의 text 를 "여행 상세" 로 변경한다
  var h2value = $("h2");
  h2value.text("여행 상세");

  // 3. 클래스가 "promo" 인 li의 택스트를 "리오" 로 변경한다
  var promo = $(".promo");
  promo.text("리오");

  // li의 첫 번째 항목의 텍스트를 "부산" 으로 변경한다.
  // $("li:first-child").text("부산");
  // Dom Traversing 을 통해서 li의 첫 번째 항목의 텍스트를 "부산" 으로 변경한다
  $("li").first().text("부산");

  // li의 마지막 항목의 텍스트를 "속초" 로 변경한다.
  // $("li:last-child").text("속초");
  // Dom Traversing
  $("li").last().text("속초");

  // li의 두 번째 항목의 텍스트를 "경주" 로 변경한다
  // $("li:nth-child(2)").text("경주");
  // Dom Traversing
  // 방법 다양
  // nth-child 와 대응
  // $("li").eq(1).text("경주(eq)");
  // $("li").first().next().text("경주");
  $("li").last().prev().text("경주");

  // h1 태그로 시작해서 ul을 찾는다
  // ul 태그 아래의 두번째 li 텍스트를 "양평" 으로 바꾼다
  $("h1").next().next().next().find("li").first().next().text("양평");
});
