function changeButton(buttonID) {
	console.log($('#'+buttonID))
	if ($('#'+buttonID)[0].classList.contains("gray")) {
		$('#'+buttonID)[0].classList.remove("gray")
		$('#'+buttonID)[0].classList.add("green")
		$('#'+buttonID)[0].innerHTML = "<i class=\"material-icons left\">check</i>"


		var form = document.createElement("form");
	    form.setAttribute("method", "POST");
	    form.setAttribute("action", "/updateuserevents");
		var hiddenField = document.createElement("input");
	            hiddenField.setAttribute("type", "hidden");
	            hiddenField.setAttribute("name", "data");
	            hiddenField.setAttribute("value", $('#'+buttonID)[0].value);
		form.appendChild(hiddenField);
		document.body.appendChild(form);
	    form.submit();
	}
	else {
		$('#'+buttonID)[0].classList.remove("green")
		$('#'+buttonID)[0].classList.add("gray")
		$('#'+buttonID)[0].innerHTML = "<i class=\"material-icons left\">add_circle_outline</i>"
		var form = document.createElement("form");
	    form.setAttribute("method", "POST");
	    form.setAttribute("action", "/updateuserevents");
		var hiddenField = document.createElement("input");
	            hiddenField.setAttribute("type", "hidden");
	            hiddenField.setAttribute("name", "data");
	            hiddenField.setAttribute("value", $('#'+buttonID)[0].value);
		form.appendChild(hiddenField);
		document.body.appendChild(form);
	    form.submit();
		}
}
