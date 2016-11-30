
//import $ from 'jquery'
//import fullCalendar from 'fullcalendar'


// class EventsManager {
    // constructor(username) {
    //     this.nombreUsuario = nombreUsuario
    //     this.obtenerDataInicial()
    // }

    // obtenerDataInicial() {
    //     let url = '/eventos/all'
    //     $.post(url, {nombre: this.nombreUsuario}, (eventos) => {
    //         this.poblarCalendario(eventos)
    //     })
    // }

//     poblarCalendario(eventos) {
//         $('.calendario').fullCalendar({
//             header: {
//         		left: 'prev,next today',
//         		center: 'title',
//         		right: 'month,basicWeek,basicDay'
//         	},
//         	defaultDate: '2016-11-01',
//         	navLinks: true,
//         	editable: true,
//         	eventLimit: true,
//             droppable: true,
//             eventDrop: function(ev) {
//                 actualizarEvento(ev)
//             },
//             events: eventos
//         })
//     }
//
//     actualizarEvento(evento) {
//         let eventId = evento.eventId,
//             title = evento.title,
//             start = evento.start
//
//         let url = '/eventos/actualizar'
//
//     }
// }


$(function(){
  initForm();
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
      dragRevertDuration: 0,
      events: [
        {
            id: 1,
            title  : 'event1',
            start  : '2016-11-01'
        },
        {
            id: 2,
            title  : 'event2',
            start  : '2016-11-05',
            end    : '2016-11-07'
        },
        {
            id: 3,
            title  : 'event3',
            start  : '2016-11-09T12:30:00',
            allDay : false // will make the time show
        }
    ],
    eventDragStart: function(event,jsEvent) {
      $('.delete-btn').find('img').attr('src', "img/trash-open.png");
      $('.delete-btn').css('background-color', '#a70f19')
    },
    eventDragStop: function(event,jsEvent) {

      var trashEl = $('.delete-btn');
      var ofs = trashEl.offset();

      var x1 = ofs.left;
      var x2 = ofs.left + trashEl.outerWidth(true);
      var y1 = ofs.top;
      var y2 = ofs.top + trashEl.outerHeight(true);

        if (jsEvent.pageX >= x1 && jsEvent.pageX<= x2 &&
            jsEvent.pageY >= y1 && jsEvent.pageY <= y2) {
              $('.calendario').fullCalendar('removeEvents', event.id);
        }
      $('.delete-btn').find('img').attr('src', "img/trash.png");
      $('.delete-btn').css('background-color', '#8B0913')
    },
  })
});



function initForm(){
  $('#start-date, #titulo, #end-date').val('');
  $('#start-date, #end-date').datepicker({
    dateFormat: "yy-mm-dd"
  });
  $('.timepicker').timepicker({
    timeFormat: 'H:mm',
    interval: 30,
    minTime: '5',
    maxTime: '23:30',
    defaultTime: '7',
    startTime: '5:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true
  });
  $('#allDay').on('change', function(){
    if (this.checked) {
      $('.timepicker, #end-date').attr("disabled", "disabled")
    }else {
      $('.timepicker, #end-date').removeAttr("disabled")
    }
  })


}
