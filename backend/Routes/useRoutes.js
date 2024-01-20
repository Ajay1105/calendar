const {
    saveEvent,
    showEvent,
    updateEvent,
    deleteEvent,
  } = require("../Controller/crud.js");

const {  
  findEventByType,
  findEventByCategory,
  findEventsByTime
} = require("../Controller/additionalRoutes.js")

const express = require("express");

const router = express.Router();

router.post('/events', saveEvent);
router.get('/events', showEvent);
router.put('/events/:id', updateEvent);
router.delete('/events/:id', deleteEvent);

router.get('/findbytype', findEventByType);
router.get('/findeventbycategory', findEventByCategory);
router.get('/findeventsbytime', findEventsByTime);



module.exports = router;
