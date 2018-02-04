function changeButton(buttonID) {
	console.log($('#'+buttonID))
	if ($('#'+buttonID)[0].classList.contains("gray")) {
		$('#'+buttonID)[0].classList.remove("gray")
		$('#'+buttonID)[0].classList.add("green")
		$('#'+buttonID)[0].innerHTML = "<i class=\"material-icons left\">check</i>"
	}
	else {
		$('#'+buttonID)[0].classList.remove("green")
		$('#'+buttonID)[0].classList.add("gray")
		$('#'+buttonID)[0].innerHTML = "<i class=\"material-icons left\">add_circle_outline</i>"
	}
}
