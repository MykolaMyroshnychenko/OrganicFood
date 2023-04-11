$(document).ready(function(){
    $(".about").slick({
      dots: false,
      prevArrow: '<div class="arrow-prev"><img src="./img/left.svg" alt="left"></div>', // property for the previous slide button
      nextArrow: '<div class="arrow-next"><img src="./img/right-left.svg" alt="right"></div>',// property for next slide button
      infinite: false,//will the slider be infinite true/false
      slidesToShow: 2, // number of slides to display
      slidesToScroll: 2 // how many slides will scroll at a time
    });
  });
 

  var user = document.querySelector('.user'),
  userTop = user.getBoundingClientRect().top,
  startUser = +user.innerHTML, endUser = +user.dataset.max; //правка раз

  window.addEventListener('scroll', function onScroll() {
    if(window.pageYOffset > userTop  - window.innerHeight / 2) {
      this.removeEventListener('scroll', onScroll);
      var interval = setInterval(function() {
        user.innerHTML = ++startUser + "K"; //правка два
        if(startUser == endUser) {
          clearInterval(interval);
        }
      }, 50);
    }
  });

  var reviews = document.querySelector('.reviews'),
  reviewsTop = reviews.getBoundingClientRect().top,
  startReviews = +reviews.innerHTML, endReviews = +reviews.dataset.max; //правка раз

  window.addEventListener('scroll', function onScroll() {
    if(window.pageYOffset > reviewsTop - window.innerHeight / 2) {
      this.removeEventListener('scroll', onScroll);
      var interval = setInterval(function() {
        reviews.innerHTML = ++startReviews + "K"; //правка два
        if(startReviews == endReviews) {
          clearInterval(interval);
        }
      }, 40);
    }
  });


  var items = document.querySelector('.items'),
  itemsTop = items.getBoundingClientRect().top,
  startItems = +items.innerHTML, endItems = +items.dataset.max; //правка раз

  window.addEventListener('scroll', function onScroll() {
    if(window.pageYOffset > itemsTop - window.innerHeight / 2) {
      this.removeEventListener('scroll', onScroll);
      var interval = setInterval(function() {
        items.innerHTML = ++startItems; //правка два
        if(startItems == endItems) {
          clearInterval(interval);
        }
      }, 5);
    }
  });