function toggleDropDown() {
    document.getElementById("breed_dropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("browseInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("breed_dropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

var showImage = function(obj){
	var breed = obj.target.title;
	var myURL = "http://dog.ceo/api/breed/" + breed + "/images";


	$.ajax({
		url: myURL,
		dataType: "json",
		success: function(json){
			console.log(json);
/*
			var keys = Object.keys(json.message);
			
			for (var i = 0; i < keys.length; i++){
				var newItem = document.createElement("a");
				newItem.href = "#" + keys[i];
				newItem.title = keys[i];
				newItem.innerHTML = keys[i];
				newItem.onclick = function(key){ showImage(key); };
				$("#breed_dropdown").append(newItem);
			}
			*/
		},
		error: function(json){
			console.log("Err Handler");
		}
	});

}

$(document).ready(function() {
	var myURL = "http://dog.ceo/api/breeds/list/all";
	$.ajax({
		url: myURL,
		dataType: "json",
		success: function(json){
			console.log(json);

			var keys = Object.keys(json.message);
			
			for (var i = 0; i < keys.length; i++){
				var newItem = document.createElement("a");
				newItem.href = "#" + keys[i];
				newItem.title = keys[i];
				newItem.innerHTML = keys[i];
				newItem.onclick = function(key){ showImage(key); };
				$("#breed_dropdown").append(newItem);
			}
		},
		error: function(json){
			console.log("Err Handler");
		}
	});
});