// Vanilla Script를 이용해서
// 모든 li를 가져와 텍스트를 변경한다
window.onload = function () {
  var list = document.querySelectorAll("li");
  for (var i = 0; i < list.length; i++) {
    var listItem = list[i];
    listItem.innerText = "서울";
  }
};
