//Pre-Loader Animation
window.addEventListener('load', disapperFunc);
function disapperFunc() {
	var preloader = document.getElementById('preLoader');
	preloader.classList.add('preLoaderDisappear');
	preloader.innerHTML = '';
	preloader.style.height = '0';
	preloader.style.width = '0';
}

// Navbar Clicking Functions

jQuery(document).ready(function ($) {
	//open navigation clicking the menu icon
	$('.cd-nav-trigger').on('click', function (event) {
		event.preventDefault();
		toggleNav(true);
	});
	//close the navigation
	$('.cd-close-nav, .cd-overlay').on('click', function (event) {
		event.preventDefault();
		toggleNav(false);
	});
	function toggleNav(bool) {
		$('.cd-nav-container, .cd-overlay').toggleClass('is-visible', bool);
		$('main').toggleClass('scale-down', bool);
	}
});


// Take at the Top on Refreshing the page

window.onbeforeunload = scrollTo(0, 0);