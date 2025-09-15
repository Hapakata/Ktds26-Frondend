$().ready(function () {
  // li 들의 배경색을 변경한다
  $("#destinations > li").css({
    backgroundColor: "#FF0",
  });

  // 아이디가 destinations 인 UL 태그들의
  // 모든 li 태그들의 글자 색상을 #f00 으로 변경

  $("#destinations").find("li").css({
    color: "#f00",
  });

  // 아이디가 destionations 인 ul 태그의 li child 만 찾아서
  // 글자 색상을 #0ff 로 변경한다

  $("#destinations").children("li").css({
    color: "#0ff",
  });

  // 아이디가 france인 ul의
  // 부모태그 (ul 아이디 destinations > li.nth-child(1))
  // 의 형제 태그중 가장 마지막 태그의 텍스트를 "양평" 으로 변경한다.
  $("#france").parent().next().text("양평");

  // 아이디가 france 인 ul 의 부모의 부모의 부모의 자식중
  // h1 태그의 텍스트를 "어디로 가고싶으세요?" 로 변경한다
  $("#france")
    .parent()
    .parent()
    .parent()
    .children("h1")
    .text("어디로 가고싶으세요?");

  document.querySelector("#france").parentElement.nextElementSibling.innerText =
    "양평1";
});
