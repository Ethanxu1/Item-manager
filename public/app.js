import { Note } from "./classes/Note.js";
import { NoteTemp } from "./classes/NoteTemp.js";
import { Password } from "./classes/Password.js";
import { PassTemp } from "./classes/PassTemp.js";
import { Task } from "./classes/Task.js";
import { TaskTemp } from "./classes/TaskTemp.js";
window.addEventListener('load', () => {
    // get nav bar elements    
    const taskPgBtn = document.querySelector('.task-pg');
    const notePgBtn = document.querySelector('.note-pg');
    const passPgBtn = document.querySelector('.pass-pg');
    const tipsPgBtn = document.querySelector('.tips-pg');
    // get page divs
    const taskPg = document.querySelector('#task-pg-container');
    const notesPg = document.querySelector('#notes-pg-container');
    const passPg = document.querySelector('#pass-pg-container');
    const tipsPg = document.querySelector('#tips-pg-container');
    // get add buttons
    const addTaskBtn = document.querySelector(".add-task-btn");
    const addNoteBtn = document.querySelector(".add-note-btn");
    const addPassBtn = document.querySelector(".add-pass-btn");
    // get task fields
    const taskStartDate = document.querySelector("#task-start-date");
    const taskFinishDate = document.querySelector("#task-finish-date");
    const taskSubject = document.querySelector("#task-subject");
    const taskBody = document.querySelector("#task-body");
    // get note fields
    const noteDate = document.querySelector("#note-date");
    const noteSubject = document.querySelector("#note-subject");
    const noteBody = document.querySelector("#note-body");
    // get password fields
    const site = document.querySelector("#site");
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    // get item list ul
    const tasks = document.querySelector("#tasks");
    const notes = document.querySelector("#notes");
    const passowrds = document.querySelector("#passwords");
    // get audio
    let taskAudio = document.querySelector('#task-audio');
    let noteAudio = document.querySelector('#note-audio');
    let passAudio = document.querySelector('#pass-audio');
    console.log(passowrds);
    init();
    // page toggling
    taskPgBtn.addEventListener('click', () => {
        taskPg.style.display = 'block';
        notesPg.style.display = 'none';
        passPg.style.display = 'none';
        tipsPg.style.display = 'none';
    });
    notePgBtn.addEventListener('click', () => {
        taskPg.style.display = 'none';
        notesPg.style.display = 'block';
        passPg.style.display = 'none';
        tipsPg.style.display = 'none';
    });
    passPgBtn.addEventListener('click', () => {
        taskPg.style.display = 'none';
        notesPg.style.display = 'none';
        passPg.style.display = 'block';
        tipsPg.style.display = 'none';
    });
    tipsPgBtn.addEventListener('click', () => {
        taskPg.style.display = 'none';
        notesPg.style.display = 'none';
        passPg.style.display = 'none';
        tipsPg.style.display = 'block';
    });
    function init() {
        taskPg.style.display = 'block';
        notesPg.style.display = 'none';
        passPg.style.display = 'none';
        tipsPg.style.display = 'none';
    }
    // add buttons actions
    const task = new TaskTemp(tasks);
    addTaskBtn.addEventListener('click', (e) => {
        e.preventDefault();
        taskAudio.play();
        let startDate = taskStartDate.value;
        let endDate = taskFinishDate.value;
        let subject = taskSubject.value;
        let yourTask = taskBody.value;
        let doc = new Task(startDate, endDate, subject, yourTask);
        task.render(doc);
    });
    const note = new NoteTemp(notes);
    addNoteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        noteAudio.play();
        let date = noteDate.value;
        let subject = noteSubject.value;
        let body = noteBody.value;
        let doc = new Note(date, subject, body);
        note.render(doc);
    });
    let passwordTemp = new PassTemp(passowrds);
    addPassBtn.addEventListener('click', (e) => {
        e.preventDefault();
        passAudio.play();
        let website = site.value;
        let user = username.value;
        let pass = password.value;
        let doc = new Password(website, user, pass);
        passwordTemp.render(doc);
    });
});
