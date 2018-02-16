$(document).ready(function() {
	var myURL = "http://dog.ceo/api/breed/pug/images";
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

			$("#main_content .pugs_box").append(row);

			//$("#successMessage").html(successMessage);
			//$("#successMessage").removeClass("hidden");
			//$("#errorMessage").addClass("hidden");
		},
		error: function(json){
			console.log("Err Handler");
		}
	});
});