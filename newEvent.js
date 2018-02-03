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

console.log(events);

var sampleEvents = {
"monthly": events/*[
	{
	"name": "Whole month event",
	"startdate": "2018-01-27",
	"enddate": "2018-01-28",
	"location": "Pyongyang", //everytime there is location, change to location, change input
	"color": "#99CCCC",
	"url": "https://github.com/mikachoow21/mlh-api" //todo change target "_blank"
	},
	{
	"name": "Test encompasses month",
	"startdate": "2016-10-29",
	"enddate": "2016-12-02",
	"color": "#CC99CC",
	"url": ""
}
	{
		"name":"Local Hack Day",
		"url":"https://localhackday.mlh.io/",
		"startDate":"2016-12-02",
		"endDate":"2016-12-02",
		"location":"Everywhere,Worldwide",
		"isHighSchool":false,
		"imageUrl":"https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/803/thumb/lhdsplash.png?1510005022"
	}
]*/
};

$(window).load( function() {
	$('#mycalendar').monthly({
		mode: 'event',
		dataType: 'json',
		events: sampleEvents
	});
});
