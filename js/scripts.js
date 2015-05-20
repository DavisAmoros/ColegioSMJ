$(document).on("ready", main);

function main(){
	$(".header__nav a").on("click", irA);
	$(".bloque a").on("click", irA);
	$(".nav-nivel a").on("click", irA);
}

function irA(){
	var seccion = $(this).attr("href");
	$("body, html").animate({
		scrollTop: $(seccion).offset().top
	}, 800);

	return false;
}


