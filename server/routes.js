import express from 'express'
import Evento from './model.js'

const Router = express.Router()

Router.post('/new', (req, res) => {
    let ev = req.body.ev
    let newEvent = new Evento({
        eventId: Math.floor(Math.random() * 1000),
        start: ev.start,
        title: ev.title,
        end: ev.end
    })
})
