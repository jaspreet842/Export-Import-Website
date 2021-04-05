// Parallax effect in the Heading Section

const parallax = document.querySelectorAll(".parallax");
window.addEventListener('scroll', () => {
	let scroll = window.pageYOffset;
	parallax.forEach(Element => {
		let speed = Element.dataset.speed;
		Element.setAttribute("style", `transform: translateY(-${scroll * speed}px)`);
	});
	let x = document.getElementById('itemContentText1');
	let sp = x.dataset.speed;
	let sc = x.getBoundingClientRect().top;
	x.setAttribute("style", `transform: translateY(${sp * sc - 150}px)`);
});


// Showing items on Scrolling Effect

window.addEventListener(`scroll`, () => {
	var winHeight = window.innerHeight;
	var reveals = document.querySelectorAll('.revealLeft');
	for (var i = 0; i < reveals.length; i++) {
		var revealTop = reveals[i].getBoundingClientRect().top;
		var revealPoint = 150;
		if (revealTop < winHeight - revealPoint) {
			reveals[i].classList.add('activeLeft');
		} else {
			reveals[i].classList.remove('activeLeft');
		}
	}
	var revealPointBig = 200;
	var reveals = document.querySelectorAll('.revealLeftSmall');
	for (var i = 0; i < reveals.length; i++) {
		var revealTop = reveals[i].getBoundingClientRect().top;
		if (revealTop < winHeight - revealPointBig) {
			reveals[i].classList.add('activeLeftSmall');
		} else {
			reveals[i].classList.remove('activeLeftSmall');
		}
	}
	var reveals = document.querySelectorAll('.revealRight');
	for (var i = 0; i < reveals.length; i++) {
		var revealTop = reveals[i].getBoundingClientRect().top;
		if (revealTop < winHeight - revealPointBig) {
			reveals[i].classList.add('activeRight');
		} else {
			reveals[i].classList.remove('activeRight');
		}
	}
	var reveals = document.querySelectorAll('.revealBottom');
	for (var i = 0; i < reveals.length; i++) {
		var revealTop = reveals[i].getBoundingClientRect().top;
		if (revealTop < winHeight - revealPointBig) {
			reveals[i].classList.add('activeBottom');
		} else {
			reveals[i].classList.remove('activeBottom');
		}
	}
});


// Changing Background from Black to White on Scrolling

window.addEventListener(`scroll`, () => {
	var bgChange = document.querySelectorAll('.blackBg');
	for (var i = 0; i < bgChange.length; i++) {
		var winHeight = window.innerHeight;
		var blackBgTop = bgChange[i].getBoundingClientRect().top;
		var point = 400;
		if (blackBgTop < winHeight - point)
			document.body.classList.add('whiteBg');
		else
			document.body.classList.remove('whiteBg');
	}
});


// Enlarging Images in Portfolio section on hovering

var hoverBox = document.querySelectorAll('.hoverChild');
for (var i = 0; i < hoverBox.length; i++) {
	hoverBox[i].addEventListener('mouseover', (e) => {
		for (var j = 0; j < hoverBox.length; j++) {
			if (hoverBox[j] != e.target) {
				hoverBox[j].classList.add('shadowEffect');
			}
		}
	});
	hoverBox[i].addEventListener('mouseout', (e) => {
		for (var j = 0; j < hoverBox.length; j++) {
			if (hoverBox[j] != e.target) {
				hoverBox[j].classList.remove('shadowEffect');
			}
		}
	});
};


// Clicking arrow at the heading of the home page

var blackArrow = document.getElementById('lineBlack');
blackArrow.addEventListener('click',(e)=>{
	console.log(blackArrow);
	var aboutSectionTop = document.getElementById('aboutUs').getBoundingClientRect().top;
	console.log(aboutSectionTop);
	window.scrollTo(0, aboutSectionTop);
});