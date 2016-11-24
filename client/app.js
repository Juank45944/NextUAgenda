import $ from 'jquery'
import fullCalendar from 'fullcalendar'



$('.calendario').fullCalendar({
    header: {
		left: 'prev,next today',
		center: 'title',
		right: 'month,basicWeek,basicDay'
	},
	defaultDate: '2016-11-01',
	navLinks: true,
	editable: true,
	eventLimit: true,
    droppable: true,
    eventDrop: function(ev) {
        console.log(ev.start.format())
    },
    events: [
        {
			title: 'Long Event',
			start: '2016-11-24'
        }
    ]
})
