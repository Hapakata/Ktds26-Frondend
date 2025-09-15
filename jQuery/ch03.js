window.onload = function () {
  // 아이디가 france인 ul의
  // 부모태그 (ul 아이디 destinations > li.nth-child(1))
  // 의 형제 태그중 가장 마지막 태그의 텍스트를 "양평" 으로 변경한다.

  var france = document.querySelector("#france");
  console.dir(france);

  var parent = france.parentElement;
  console.dir(parent);

  var next = parent.nextElementSibling;
  next.innerText = "양평";

  this.document.querySelector(
    "#france"
  ).parentElement.nextElementSibling.innerText = "양평";
};
