$(document).on("ajaxStart", function () {
  $(".spinner").show();
});

$(document).on("ajaxComplete", function () {
  $(".spinner").hide();
});

$().ready(function () {
  // Git API 호출

  $(".load-git-users").on("click", function () {
    // 클릭 했을때 원래 내용 지우기
    $(".posts").html("");

    $.get("https://jsonplaceholder.typicode.com/posts", function (users) {
      // $.get() => JSON (text) ==> Object Literal (자동)
      //$(".git-users").text(users.login);
      // $.get() => JSON (text) ==> Object Literal => JSON(다시 json으로)
      //$(".git-users").text(JSON.stringify(users));

      //template 안쓰는 버전
      //   for (var i = 0; i < users.length; i++) {
      //     var post = users[i];
      //     var listItem = $("<li>");
      //     listItem.data("user-id", post.userId);
      //     listItem.data("id", post.id);

      //     var title = $("<div>");
      //     title.addClass("title");
      //     title.text(post.title);
      //     listItem.append(title);

      //     var body = $("<div>");
      //     body.addClass("body");
      //     body.text(post.body);
      //     listItem.append(post);

      //     $(".posts").append(listItem);
      //   }

      for (var i = 0; i < users.length; i++) {
        var post = users[i];
        // html 구조를 가져오기
        var template = $("#post-item-template").html();

        // html 구조에 각 data 의 값을 post에서 가져와서 변경
        template = template
          .replace("#data-id#", post.userId)
          .replace("#id#", post.id)
          .replace("#title#", post.title)
          .replace("#body#", post.body);

        var listItem = $(template);
        listItem.children(".title").on("click", function () {
          $(this).closest("li").children(".body").slideToggle();
        });

        //그대로 박아넣기
        $(".posts").append(listItem);
      }

      console.log(users);
    });
  });

  $(".load-comments").on("click", function () {
    $(".comments").html("");

    $.get("https://jsonplaceholder.typicode.com/comments", function (comments) {
      for (var i = 0; i < comments.length; i++) {
        var comment = comments[i];
        var template = $("#comments-item-template").html();
        template = template
          .replace("#post-id#", comment.postId)
          .replace("#id#", comment.id)
          .replace("#body#", comment.body);

        var listItem = $(template);
        $(".comments").append(listItem);
      }
    });
  });
});
