let num = 0;

window.onload = function () {
  for (i = 0; i < 4; i++) {
    document.querySelectorAll("#slideshow a img")[i].style.opacity = 0;
  }
  document
    .querySelectorAll("#slideshow a img")
    [num].animate({ opacity: [0, 1] }, 1500);
  document.querySelectorAll("#slideshow a img")[num].style.opacity = 1;
  setTimeout("change()", 5000);
  setTimeout("slideshow()", 5000);
};

function change() {
  document
    .querySelectorAll("#slideshow a img")
    [num].animate({ opacity: [1, 0] }, 1500);
  if (num == 3) {
    document
      .querySelectorAll("#slideshow a img")[0]
      .animate({ opacity: [0, 1] }, 1500);
  } else {
    document
      .querySelectorAll("#slideshow a img")
      [num + 1].animate({ opacity: [0, 1] }, 1500);
  }
}

function slideshow() {
  document.querySelectorAll("#slideshow a img")[num].style.opacity = 0;
  num = num + 1;
  if (num == 4) {
    num = 0;
  }
  document.querySelectorAll("#slideshow a img")[num].style.opacity = 1;
  setTimeout("change()", 5000);
  setTimeout("slideshow()", 5000);
}
