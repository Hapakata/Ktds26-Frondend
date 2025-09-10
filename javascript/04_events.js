// 04_events.html 에 있는 button 태그 가져오기

// 브라우저가 04_events.html 파일의 렌더링을 완료했을 때
// 실행되는 콜백함수
window.onload = function () {
  var button = document.querySelector("button");
  console.dir(button);
  button.onclick = function () {
    var div = document.querySelector(".result");
    console.dir(div);

    // Java : contains     Js : includes
    if (div.className.includes("clicked")) {
      div.className = "result";
    } else {
      div.className = "result clicked";
    }
  };
  //   button.addEventListener("click", function () {});
};
