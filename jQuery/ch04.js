window.onload = function () {
  var button = document.querySelector(".package-green-button");
  console.dir(button);

  var p = document.createElement("p");
  p.innerText = "From $299.99";
  p.className = "total-price";

  // Rendering
  button.parentElement.append(p);

  button.remove();
};
