var util = require("util");
var fs = require("fs");
const newId = require("uuid/v1")
const readFileASync = util.promisify(fs.readFile);
const writeFileASync = util.promisify(fs.writeFile);

class db {
  // constructor() {
  //   this.formerid = 0;
  // }
  getNotes() {
    return readFileASync("db/db.json").then(notes => {
        var returnedNotes;
        try{
      returnedNotes =  [].concat(JSON.parse(notes));
            
        } catch {
            returnedNotes = [];
        }
      return returnedNotes;
    });
  }
  addNote(note) {
    var title = note.title;
    var text = note.text;
    var newnote = {
      title,
      text,
      id: newId()
    };
    return this.getNotes()
    .then(notes => [...notes,newnote])
    .then(changeNotes => writeFileASync("db/db.json",JSON.stringify(changeNotes)))
  }


  deleteNote(id) {
    return this.getNotes().then(notes => notes.filter(node => node.id !== id)).then(changeNotes => writeFileASync("db/db.json",JSON.stringify(changeNotes)))
  }
}
module.exports = new db();
