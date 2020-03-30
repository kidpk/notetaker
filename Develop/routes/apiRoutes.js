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

};
