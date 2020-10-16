var router =require("express").Router();
var notes = require("../db/notes.js");


router.get("/db/notes", function(req, res){
    notes.getNotes()
    .then(notes => res.json(notes))
    console.log(notes)
    .catch(err => res.status(500).json(err));
})
router.post("/db/notes", function(req, res){
    notes.addNotes(req.body)
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
})
router.delete("/db/notes/:id", function(req, res){
    notes.removeNote(req.params.id)
    console.log(req.params.id)
    .then(() => res.json({ok: true}))
    .catch(err => res.status(500).json(err));
})

module.exports = router;