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

			var row = document.createElement("div");
			var col1 = document.createElement("div");
			var col2 = document.createElement("div");
			var col3 = document.createElement("div");
			var col4 = document.createElement("div");

			row.classList.add("row");
			col1.classList.add("column");
			col2.classList.add("column");
			col3.classList.add("column");
			col4.classList.add("column");

			var cols = [col1, col2, col3, col4];

			for (var i = 0; i < json.message.length; i++){
				var pugimg = document.createElement("img");
				pugimg.src = json.message[i];
				pugimg.style.width="100%";
				pugimg.style.borderStyle="solid";
    			pugimg.style.borderRadius="3px";
				cols[i%4].appendChild(pugimg);
			}

			for (var i = 0; i < cols.length; i++){
				row.appendChild(cols[i]);
			}

			$("#main_content .browsing_box").html("");
			$("#main_content .browsing_box").append(row);

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