const createAnswer = require('../Controller/answerCreationKit');


let defaultMessage = 'Note bot is under development, command unknown';


const note_commands =
    [
        [/Save note/i, 'note_save'],
        [/Show note list/i, 'note_noteList'],
        [/Show note(?!\slist)/i, 'note_showOne'],
        [/Delete note/i, 'note_delete']
    ];
let notes = [];


module.exports = function NoteBot(msg) {

    return getNoteCommand(msg);
};


function getNoteCommand(message) {
    let notecommand;

    let UserMessage = message.content.toString();
    for (let i = 0; i < note_commands.length; i++) {

        if (note_commands[i][0].test(UserMessage)) {
            notecommand = note_commands[i][1];


            break
        }

    }

    return noteBotController(notecommand, UserMessage)
}

function noteBotController(notecommand, UserMessage) {
    switch (notecommand) {
        case 'note_save':
            return save_note(UserMessage);
        case 'note_noteList':
            return list_note();
        case 'note_showOne':
            return showOneNote(UserMessage);
        case 'note_delete':
            return deleteNote(UserMessage);
        default:
            return createAnswer(defaultMessage);
    }

}


function save_note(message) {
    let answer = 'Note Saved';
    let removeThis = message.search('title');

    let note = message.substr(removeThis, message.length - removeThis);


    notes.push(note);

    console.log(notes)
    return createAnswer(answer)
}

function list_note() {
    let answer = "Nothing to show";
    console.log(notes.length);
    if (notes.length == 0) {
        return createAnswer(answer)
    }

    return createAnswer(notes)
}

function showOneNote(message) {

    let answer = "Nothing here";
    let removeThis = message.search('note');
    let title = message.substr(removeThis + 5, message.length - removeThis);
    let RegExpTitle = new RegExp(title);
    console.log(RegExpTitle + " title2");
    console.log(message.length + 4);

    for (let i = 0; i < notes.length; i++) {
        if (notes[i].search(RegExpTitle) != -1) {
            console.log(notes[i])
            answer = notes[i]
            break
        }

    }


    return createAnswer(answer)
}

function deleteNote(message) {

    let answer = "Nothing to delete";
    let removeThis = message.search('note');
    let title = message.substr(removeThis + 5, message.length - removeThis);
    console.log(title + " title");


    for (let i = 0; i < notes.length; i++) {

        if (notes[i].search(title) != -1) {
            answer = "Note deleted";
            notes.splice(i, 1);
            console.log(notes[i])

        }

    }


    return createAnswer(answer)
}