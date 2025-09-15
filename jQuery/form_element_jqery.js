$().ready(function () {
  // #jobs 의 선택된 값을 콘솔로 출력
  var selectedValue = $("#jobs").val();
  console.log(selectedValue);

  // #jobs 를 "교수" 로 선택한다
  $("#jobs").val(3);

  // type 이 radio 이고 name 이 age 인 input 태그 중
  // 선택된 값만 가져와 콘솔로 출력
  var checkedAge = $("input[type = 'radio'][name='age']:checked").val();
  console.log(checkedAge);

  // type 이 radio 이고 name 이 age 인 input 태그 중 하나를 선택하면
  // 선택된 값만 가져와 콘솔로 출력
  $("input[type = 'radio'][name='age']").on("change", function () {
    var checked = $(this).val();
    console.log(checked);
  });

  // type 이 checkbox 이고 name 이 favorate-genre 인 태그 중
  // 선택된 값만 가져와 콘솔로 출력.
  var checkedGenre = $(
    "input[type ='checkbox'][name ='favorate-genre']:checked"
  ).val();
  console.log(checkedGenre);

  // 펑크와 알앤비 체크박스를 강제로 체크한다
  $("#punk").prop("checked", true);
  $("#rnb").prop("checked", true);

  // 락 체크박스를 강제로 체크 해제한다
  $("#rock").prop("checked", false);

  $("input[type ='checkbox'][name ='favorate-genre']").on(
    "change",
    function () {
      console.log("checked", $(this).val());
      var uncheckedLength = $(
        "input[type ='checkbox'][name ='favorate-genre']:not(:checked)"
      ).length;

      $("#checked-all").prop("checked", uncheckedLength === 0);
      //   if (uncheckedLength === 0) {
      //     $("#checked-all").prop("checked", true);
      //   } else {
      //     $("#checked-all").prop("checked", false);
      //   }
      console.log(uncheckedLength);
    }
  );

  $("#checked-all").on("change", function () {
    $("input[type ='checkbox'][name ='favorate-genre']").prop(
      "checked",
      $(this).prop("checked")
    );
  });
});
