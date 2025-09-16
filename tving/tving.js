$().ready(function () {
  const settings = {
    async: true,
    crossDomain: true,
    url: "",
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2MwYzQ2YjdmZDYxODFiMTJhNWQ4OWQyYTQwYzBhOCIsIm5iZiI6MTY3Nzg4NjE5OS41MjEsInN1YiI6IjY0MDI4MmY3Njk5ZmI3MDBlNmZmMDE2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fBH_IVWue-P47P_uquwyO3lmeCaJxdhEdhVXZBWq10c",
    },
  };

  settings.url = $(".special-program").data("filter");
  $.ajax(settings).done((res) => {
    var results = res.results;
    var randomIndex = parseInt(Math.random() * results.length);

    var randomProgram = results[randomIndex];

    var imagePath =
      "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces" +
      randomProgram.backdrop_path;

    var image = $("<img />");
    image.attr("src", imagePath);
    $(".special-program").append(image);
    $(".special-program").children(".title").text(randomProgram.name);
  });

  $(".program-list").each(function () {
    // .each() -> 반복문
    settings.url = $(this).data("filter");
    var view = $(this).data("view");

    $.ajax(settings).done((res) => {
      var results = res.results;
      for (var i = 0; i < results.length; i++) {
        var templateId = "#poster-list-item-template";
        if (view === "ranking") {
          templateId = "#ranking-list-item-template";
        }
        var template = $(templateId).html();
        template = template
          .replace("#poster-path#", results[i].poster_path)
          .replace("#rank#", i + 1)
          .replace("#program-id#", results[i].id);

        var poster = $(template);
        poster.on("click", function () {
          window.location.href = "detail.html?id=" + $(this).data("id");

          //   window.open(
          //     "detail.html?id=" + $(this).data("id"), // 열 URL
          //     "_blank" // 새 창(새 탭) 지정
          //   );
        });

        $(this).children(".poster-list").append(poster);
      }
    });
  });
});
