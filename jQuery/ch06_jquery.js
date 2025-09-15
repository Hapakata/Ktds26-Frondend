$().ready(function () {
  $(".vacation-title")
    .children("img")
    .on("mouseenter", function (event) {
      console.log(event);
      // .ticket 이 보이도록 한다.
      $(".ticket").css({
        top: event.pageY + "px" + 5,
        left: event.pageX + "px" + 5,
      });
      $(".ticket").show();
    })
    .on("mousemove", function () {
      $(".ticket").css({
        top: event.pageY + "px" + 5,
        left: event.pageX + "px" + 5,
      });
    })
    .on("mouseleave", function (event) {
      $(".ticket").css({
        top: event.pageY + "px" + 5,
        left: event.pageX + "px" + 5,
      });
      // .ticket 이 보이지 않도록 한다
      $(".ticket").hide();
    });
});
