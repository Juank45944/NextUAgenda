import $ from 'jquery'
import fullCalendar from 'fullcalendar'


class EventsManager {
    constructor(username) {
        this.nombreUsuario = nombreUsuario
        this.obtenerDataInicial()
    }

    obtenerDataInicial() {
        let url = '/eventos/all'
        $.post(url, {nombre: this.nombreUsuario}, (eventos) => {
            this.poblarCalendario(eventos)
        })
    }

    poblarCalendario(eventos) {
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
                actualizarEvento(ev)
            },
            events: eventos
        })
    }

    actualizarEvento(evento) {
        let eventId = evento.eventId,
            title = evento.title,
            start = evento.start

        let url = '/eventos/actualizar'

    }
}
