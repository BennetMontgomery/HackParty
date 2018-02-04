function mineGold(buttonID) {
	console.log(buttonID)
	if (buttonID.classList.contains("gray")) {
		buttonID.classList.remove("gray")
		buttonID.classList.add("green")
		buttonID.innerHTML = "<i class=\"material-icons left\">check</i>"
	}
	else {
		buttonID.classList.remove("green")
		buttonID.classList.add("gray")
		buttonID.innerHTML = "<i class=\"material-icons left\">add_circle_outline</i>"
	}
}