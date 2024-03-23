function showFlags() {
  var flags = document.getElementById("flags");
  flags.innerHTML = `
    <a href="ar" style="text-decoration: none; display: inline-block; margin-right: 5px;">
      <img src="alg.jpg" style="width: 30px; height: 30px; border-radius: 50%;">
    </a>
    <a href="fr" style="text-decoration: none; display: inline-block; margin-right: 5px;">
      <img src="fr.jpg" style="width: 30px; height: 30px; border-radius: 50%;">
    </a>
    <a href="eng" style="text-decoration: none; display: inline-block; margin-right: 5px;">
      <img src="usa.jpg" style="width: 30px; height: 30px; border-radius: 50%;">
    </a>
  `; // Algeria, France, USA flags
}
var isNightMode = false;

//  document.getElementById("toggleNightMode").addEventListener("click", function() {
//  isNightMode = !isNightMode;
//  if (isNightMode) {
//    document.body.style.backgroundColor = "#000000"; /* لون الخلفية في الوضع الليلي */
//    document.body.style.color = "#ffffff"; /* لون النص في الوضع الليلي */
//    document.getElementById("toggleNightMode").innerHTML = "☼"; /* تبديل إلى رمز الشمس */
//  } else {
//  document.body.style.backgroundColor = "#66cccc"; /* لون الخلفية في الوضع النهاري */
//document.body.style.color = "#000000"; /* لون النص في الوضع النهاري */
//document.getElementById("toggleNightMode").innerHTML = "☀️"; /* تبديل إلى رمز القمر */
//}
//});

//تغييرالصور

// script.js
document.addEventListener("DOMContentLoaded", function() {
const images = [
["image1.jpg", "image1aa.jpg", "image1bb.jpg", "image1cc.jpg"],
["image2.jpg", "image2a.jpg", "image2b.jpg", "image2a.jpg"],
["image3.jpg", "image3a.jpg", "image3b.jpg", "image3a.jpg"]
];
let currentIndex = 0;
function changeImage() {
const imageElements = document.querySelectorAll(".image-container img");
imageElements.forEach((image, index) => {
image.src = images[index][currentIndex];
});
currentIndex = (currentIndex + 1) % 4;
}
setInterval(changeImage, 3600);
});
//تغييرالصورنهايته


//==================================================================================================

//burger menu animation
function myFunction(x) {
  x.classList.toggle("change");
}

var menu = document.getElementById("menu"),
    menuButton = document.getElementById("menuButton")
    view = false;

menuButton.addEventListener("click", function() {
  if (view == false) {
    view = true;
    menu.style.display = "block";
    //setTimeout(function() {
      //menu.style.opacity = 1;
    //}, 1000); // 1000 milliseconds = 1 second
  } else {
    view = false;
    menu.style.display = "none";
   // setTimeout(function() {
    //menu.style.opacity = 0;
    //}, 1000); // 1000 milliseconds = 1 second
  }
});


