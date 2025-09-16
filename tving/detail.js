$().ready(function () {
  var parameter = window.location.search;
  var programId = parameter.split("=")[1];
  console.log(programId);

  const settings = {
    async: true,
    crossDomain: true,
    url: "https://api.themoviedb.org/3/discover/tv?air_date.gte=2025-05-16&air_date.lte=2025-09-16&include_adult=false&include_null_first_air_dates=false&language=ko-KR&page=1&sort_by=popularity.desc&with_genres=16",
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2MwYzQ2YjdmZDYxODFiMTJhNWQ4OWQyYTQwYzBhOCIsIm5iZiI6MTY3Nzg4NjE5OS41MjEsInN1YiI6IjY0MDI4MmY3Njk5ZmI3MDBlNmZmMDE2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fBH_IVWue-P47P_uquwyO3lmeCaJxdhEdhVXZBWq10c",
    },
  };

  $.ajax(settings).done((res) => {
    var results = res.results;
    var randomIndex = parseInt(Math.random() * results.length);
    var randomProgram = results[randomIndex];

    // 제목
    var title = $("<div/>");
    $(".detailTextTitle").append(title.text(randomProgram.name));

    // 상세내역
    var content = $("<div/>");
    $(".detailTextContent").append(content.text(randomProgram.overview));

    // 포스터
    var poster = $("<img/>");
    var imagePosterPath =
      $(".detailPicture").data("poster") + randomProgram.poster_path;
    poster.attr("src", imagePosterPath);
    $(".detailPicture").append(poster);

    // 백드롭 포스터
    //ar backdropPoster = $("<img/>");
    var backdropImagePosterPath =
      $(".detailSector").data("backdrop") + randomProgram.backdrop_path;
    //backdropPoster.attr("src", backdropImagePosterPath);
    // $(".detailPicture").append(backdropPoster);

    $(".detailSector").css({
      "background-image": `url("${backdropImagePosterPath}")`,
    });

    //콘솔 확인
    console.log(randomProgram);
  });

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
});
