$().ready(function () {
  var p = $("<p>");
  p.addClass("total-price");
  p.text("From $220.33");

  //   $(".package-green-button").parent().append(p);
  $(".package-green-button").after(p); // 위와 같은 방법

  // 버튼 삭제
  $(".package-green-button").remove();

  $(".add-license").on("click", function () {
    var licenseBox = $("<div>");
    licenseBox.css({
      padding: "10px",
      display: "flex",
    });

    var input1 = $("<input type ='text'/>");
    input1.css({
      flexGrow: 1,
      padding: "10px",
    });
    var input2 = $("<input type ='text'/>");
    input2.css({
      flexBasis: "100px",
      padding: "10px",
    });
    var input3 = $("<input type ='text'/>");
    input3.css({
      flexBasis: "100px",
      padding: "10px",
    });

    licenseBox.append(input1);
    licenseBox.append(input2);
    licenseBox.append(input3);
    $(".package-button-area").append(licenseBox);
  });
});
