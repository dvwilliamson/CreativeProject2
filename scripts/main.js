function setupNavBar(){

	var links = {
		home:{
			label:"Home",
			img:"<i class='fa fa-home'></i>",
			url:"/CreativeProject2/index.html"
		},
		browse:{
			label:"Browse",
			img: "",
			url: "/CreativeProject2/pages/browse.html"
		},
		pugs:{
			label:"Pugs",
			img: "",
			url: "/CreativeProject2/pages/pugs.html"
		}
	}

	var className = $("#navbar").attr('class');
	var navbar = "<nav><ul>";
	var keys = Object.keys(links);
	for (var i = 0; i < keys.length; i++){
		var cls = (keys[i]) === className ? "class='active'":"";

		navbar += "<li><a " + cls + " href='" + links[keys[i]].url +"'>" + 
				   links[keys[i]].img + " " + links[keys[i]].label +
				    "</a></li>";
	} navbar = navbar + "</nav></ul>";
	$("#navbar").html(navbar);
}

function setupFooter(){
	var githubLink = "https://github.com/dvwilliamson/CreativeProject2";
	var footerHtml = "<footer><hr><ul><li class='github-link'>" +
					 "<a target='_blank' href='" + githubLink + "'>" +
					 "<i class='fa fa-github-square' aria-hidden='true'></i> " +
					 "</a></li></ul></footer>";
	$("#footer").html(footerHtml);
}

function loadDependencies(){

	/* StyleSheets */
	var stylesheets = [
		"/CreativeProject2/styles.css",
		"https://fonts.googleapis.com/css?family=Arimo",
		"https://fonts.googleapis.com/css?family=Kranky"
	];

	/* Scripts */
	var scripts = [ "https://use.fontawesome.com/9eb3a72f26.js" ];

	/* Load the dependencies into the head */
	for (var i = 0; i<scripts.length; i++){
		var element = document.createElement("script");
		element.src = scripts[i];
		$('head').prepend(element);
	}

	for (var i = 0; i<stylesheets.length; i++){
		var element = document.createElement("link");
		element.rel = "stylesheet";
		element.href = stylesheets[i];
		$('head').prepend(element);
	}
}

$(document).ready(function() {
	loadDependencies();
	setupNavBar();
	setupFooter();
});