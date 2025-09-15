console.log(window);
window.onbeforeunload = function (event) {
  // 페이지를 벗어날 때 발생하는 이벤트
  // 블로그에 글을 작성하는 중에 뒤로가기를 누른다.
  //   "이 페이지를 벗어나시겠습니까? 저장되지 않는 정보는 사라집니다."
  var userInput = document.querySelector(".user-input");
  if (userInput.value !== "") {
    event.returnValue = true;
  }
};

window.onblur = function () {
  // 태그를 생성.
  var newDiv = document.createElement("div");
  // 태그에 스타일 부여
  newDiv.className = "block";

  var body = document.querySelector("body");

  // body태그 아래에 newDiv를 추가한다.
  // newDiv에 대한 Rendering 수행.
  body.append(newDiv);
};

window.onfocus = function () {
  var blockDiv = document.querySelector(".block");
  console.dir(blockDiv);
  blockDiv.remove();
};

// 04_events.html에 있는 button 태그 가져오기

// 브라우저가 04_events.html 파일의 렌더링을 완료했을 때
// 실행되는 콜백함수.
window.onload = function () {
  var openLayerPopup = document.querySelector(".open-layer-popup");
  openLayerPopup.onclick = function () {
    var layerPopup = document.querySelector(".layer-popup");
    layerPopup.showModal();
  };

  var openWindowPopup = document.querySelector(".open-window-popup");
  openWindowPopup.onclick = function () {
    window.open(
      "https://coupang.com",
      undefined, // 브라우저를 생성할 위치
      "left=100,top=100,width=320,height=320"
    );
  };

  var moveToNaver = document.querySelector(".move-to-naver");
  moveToNaver.onclick = function () {
    window.location.href = "https://www.naver.com";
  };

  var clickMe = document.querySelector(".click-me");
  var showNumbers = document.querySelector(".show-numbers");
  clickMe.onclick = function () {
    for (var i = 1; i < 1000; i++) {
      console.log("반복중...........");
      showNumbers.innerText += i + " ";
    }
  };

  // interval을 이용한 타이머
  var intervalSeconds = 30;
  var intervalId = setInterval(function () {
    var minutes = intervalSeconds / 60;
    var seconds = intervalSeconds % 60;
    intervalSeconds--;

    var intervalTimer = document.querySelector(".interval-timer");
    var minutesElement = intervalTimer.querySelector(".minutes");
    var secondsElement = intervalTimer.querySelector(".seconds");
    minutesElement.innerText = parseInt(minutes);
    secondsElement.innerText = seconds;

    if (intervalSeconds === -1) {
      clearInterval(intervalId);
    }
  }, 1000);
  console.log(intervalId);

  // timeout을 이용한 타이머
  // 함수의 실행을 지연시키는 역할.
  var timeoutSeconds = 20;
  var timeoutId = setTimeout(function () {
    function timer() {
      if (timeoutSeconds > 0) {
        setTimeout(timer, 1000);
      }

      var minutes = timeoutSeconds / 60;
      var seconds = timeoutSeconds % 60;
      timeoutSeconds--;

      var timeoutTimer = document.querySelector(".timeout-timer");
      var minutesElement = timeoutTimer.querySelector(".minutes");
      var secondsElement = timeoutTimer.querySelector(".seconds");
      minutesElement.innerText = parseInt(minutes);
      secondsElement.innerText = seconds;
    }
    timer();
  }, 1000);
  console.log(timeoutId);

  var userInput = document.querySelector(".user-input");
  var userInputText = document.querySelector(".user-input-text");

  userInput.onkeyup = function (event) {
    console.dir(event);
    console.log(event.target.value);
    console.dir(userInputText);
    userInputText.innerText = event.target.value;
  };

  console.dir(userInput);

  var resultNodeList = document.querySelectorAll(".result");
  for (var i = 0; i < resultNodeList.length; i++) {
    resultNodeList[i].onclick = function (event) {
      var clickedResult = event.target;
      if (clickedResult.className.includes("clicked")) {
        clickedResult.className = "result";
      } else {
        clickedResult.className = "result clicked";
      }
    };

    // resultNodeList[i].onclick = (function (index) {
    //   return function () {
    //     if (resultNodeList[index].className.includes("clicked")) {
    //       resultNodeList[index].className = "result";
    //     } else {
    //       resultNodeList[index].className = "result clicked";
    //     }
    //   };
    // })(i);
  }

  var button = document.querySelector("button");
  console.dir(button); // undefined

  button.onclick = function () {
    var div = document.querySelectorAll(".result");
    console.dir(div);

    for (var i = 0; i < div.length; i++) {
      if (div[i].className.includes("clicked")) {
        div[i].className = "result";
      } else {
        div[i].className = "result clicked";
      }
    }
  };

  //   button.addEventListener("click", function () {});
};
