 var popup = document.querySelector(".modal-write-us");
 var link = document.querySelector(".contact-us-button");
 var close = document.querySelector(".write-us-close");
 var map = document.querySelector('.technomart-map-small');
 var popupmap = document.querySelector(".modal-map");
 var closemap = document.querySelector(".map-close");
 var buy = document.querySelector(".buy");
 var cart = document.querySelector(".modal-cart");
 
 map.addEventListener("click", function (evt) {
   evt.preventDefault();
   popupmap.classList.add("modal-show");
 });
 closemap.addEventListener("click", function (evt) {
   evt.preventDefault();
   popupmap.classList.remove("modal-show");
 });
 link.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.add("modal-show");
 });
 close.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.remove("modal-show");
 });
 buy.addEventListener("click", function (evt) {
   evt.preventDefault();
   cart.classList.add("modal-show");
 });
