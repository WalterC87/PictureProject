$(document).ready(function(){
	var navigationHeight = $('header').outerHeight();
	console.log(navigationHeight);

	$('#nav').onePageNav({
		changeHash: false,
		scrollOffset: navigationHeight - 10,
		scrollThresshold: 0.5,
		scrollSpeed: 1000,
		filter: "",
		easing: "swing"
	});
	$("#page-welcome").flexslider({
		animation : "slide",
		controlNav: false,
	});
});


var sticky = document.querySelector('header');
//var origOffsetY = sticky.offsetTop;
var origOffsetY = 240;

function onScroll(e) {
  window.scrollY >= origOffsetY ? sticky.classList.add('fixed') :
                                  sticky.classList.remove('fixed');
}

document.addEventListener('scroll', onScroll);