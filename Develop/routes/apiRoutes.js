const db = require('../db/storage');




module.exports = function(app) {


app.get('/api/notes', function(req, res) {
    db.getNotes()
    .then(notes => res.json(notes))
    .catch(error=>{
        console.log(error)
        res.status(500).json(error)
    })
});

app.post('/api/notes', function(req, res) {
    db.addNote(req.body)
    .then((note)=> res.json(note))
    .catch(error=>{
        console.log(error)
        res.status(500).json(error)
    })

});

app.delete('/api/notes/:id', function(req, res) {
    db.deleteNote(req.params.id)
    .then(()=> res.json({ok:true}))
    .catch(error=>{
        console.log(error)
        res.status(500).json(error)
    })




})
};
