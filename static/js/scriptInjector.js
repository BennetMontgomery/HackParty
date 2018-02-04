function mineGold() {
	console.log($(document).getElementsByTagName('i'))
	if ($('document').getElementByClass('button').attr('class', 'gray')) {
		console.log($('.button').getElementsByTagName('i'))
		$('document').getElementByClass("button").bgcolor = "green"
		$('document').getElementByClass('button').i.value("check");
	}
	else {
		$('document').getElementByClass('button').bgcolor = ("gray")
		$('document').getElementByClass('button').i.value("add_circle_outline");
	}
}