$().ready(function () {
  //쉐도우 돔 생성
  $(".add-input").on("click", function () {
    var newInput = $("<input type='number' />");
    newInput.addClass("new-input-number");

    //쉐도우 돔 이벤트(가능)
    newInput.on("keyup", function () {
      console.log("Keyup!");
    });

    $(this).after(newInput);
  });
  //   //쉐도우 돔 이벤트(불가)
  //   $(".new-input-numberr").on("keyup", function () {
  //     console.log("keyup!");
  //   });
  //   //쉐도우 돔 이벤트(가능)
  //   $(".package").on("keyup", ".new-input-number", function () {
  //     console.log("keyup!");
  //   });

  // #package-ticket-count 에서 keyup 이벤트가 발생하면
  // "KeyUp!" 을 console로 출력한다.
  $("#package-ticket-count")
    .on(" keyup", function () {
      console.log("KeyUp!");

      // 티켓의 가격을 가져와 콘솔로 출력한다.
      var price = $(this).closest(".ticket-purchase").data("price");
      console.log(price);

      // #package-ticket-count 에 입력한 값을 가져온다.
      // document.querySelector("#package-ticket-count").value
      var count = $(this).val();
      count = parseInt(count);

      // 숫자 검증(NaN)
      if (isNaN(count)) {
        count = 0;
      }
      $(this).val(count);

      // 최대, 최소 값 설정
      var min = $(this).closest("#package-ticket-count").data("min");
      var max = $(this).closest("#package-ticket-count").data("max");
      if (count < min) {
        count = min;
        $(this).val(min);
      }
      if (count > max) {
        count = max;
        $(this).val(max);
      }

      console.log(count);

      // price * count 한 결과를 #amount의 text로 변경한다.
      var totalPrice = price * count;
      $("#amount").text(totalPrice);
    })
    .on("change", function () {
      // "#package-ticket-count" 의 값이 변경되었을 때
      // "#package-ticket-count" 의 keyup 이벤트를 실행시킨다!
      $(this).trigger("keyup");
    });
});
