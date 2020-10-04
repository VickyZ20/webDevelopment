onload = function () {
  var uls = document.getElementsByClassName("ul2");
  for (var i = 0; i < uls.length; i++) {
    uls[i].style.display = "none";
  }
};
function myfn(li) {
  var ul = li.getElementsByTagName("ul")[0];

  ul.style.display = ul.style.display == "none" ? "block" : "none";

  var uls = document.getElementsByClassName("ul2");
  for (var i = 0; i < uls.length; i++) {
    if (uls[i] != ul) {
      uls[i].style.display = "none";
    }
  }
}
