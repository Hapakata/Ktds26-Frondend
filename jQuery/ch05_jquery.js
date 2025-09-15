$().ready(function () {
  $(".package-green-button").on("click", function () {
    console.log(event.target); // target 은 클릭한 당사자를 가르킴 this로도 쓸 수 있음
    var price = $(this).closest(".package").data("price");

    var p = $("<p>");
    p.addClass("total-price");
    p.text("From $" + price);

    $(this).closest(".package-button-area").append(p);
    $(this).remove();
  });

  // 클래스가 package-title 인 것을 클릭하면
  // 형제 태그 중 클래스가 package-deal 인 태그의
  // 자식 태그 중 클래스가 package-deal-comment-title 인 것의 텍스트를
  // 콘솔로 출력한다.

  $(".package-title").on("click", function () {
    var parent = $(this).closest(".package");
    var pdeal = parent.children(".package-deal");
    var pdealCT = pdeal.find(".package-deal-comment-title").text();
    console.dir(pdealCT);
  });

  // 클래스가 package-deal-comment 인 것 중 하나를 클릭하면
  // 클릭한 여행의 package-title 을 콘솔로 출력한다.
  $(".package-deal-comment").on("click", function () {
    console.dir($(this).closest(".package").children(".package-title").text());
  });
});
