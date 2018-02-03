$.ajax({
	dataType: "json",
	url: "https://mlh-events.now.sh/na-2018",
	async: false,
	success: setEvents
});

var events;

function setEvents(data) {
	events = data;
}

var sampleEvents = {
	"monthly": events
};

$(window).load( function() {
	$('#mycalendar').monthly({
		mode: 'event',
		dataType: 'json',
		events: sampleEvents
	});
});
