import { Note } from "./classes/Note.js";
import { NoteTemp } from "./classes/NoteTemp.js";
import { Password } from "./classes/Password.js";
import { PassTemp } from "./classes/PassTemp.js";
import { Task } from "./classes/Task.js";
import { TaskTemp } from "./classes/TaskTemp.js";

window.addEventListener('load', () => {
    // get nav bar elements    
    const taskPgBtn = document.querySelector('.task-pg') as HTMLLIElement;
    const notePgBtn = document.querySelector('.note-pg') as HTMLLIElement;
    const passPgBtn = document.querySelector('.pass-pg') as HTMLLIElement;
    const tipsPgBtn = document.querySelector('.tips-pg') as HTMLLIElement;

    // get page divs
    const taskPg = document.querySelector('#task-pg-container') as HTMLDivElement;
    const notesPg = document.querySelector('#notes-pg-container') as HTMLDivElement;
    const passPg = document.querySelector('#pass-pg-container') as HTMLDivElement;
    const tipsPg = document.querySelector('#tips-pg-container') as HTMLDivElement;
    
    // get add buttons
    const addTaskBtn = document.querySelector(".add-task-btn") as HTMLButtonElement;
    const addNoteBtn = document.querySelector(".add-note-btn") as HTMLButtonElement;
    const addPassBtn = document.querySelector(".add-pass-btn") as HTMLButtonElement;

    // get task fields
    const taskStartDate = document.querySelector("#task-start-date") as HTMLInputElement;
    const taskFinishDate = document.querySelector("#task-finish-date") as HTMLInputElement;
    const taskSubject = document.querySelector("#task-subject") as HTMLInputElement;
    const taskBody = document.querySelector("#task-body") as HTMLInputElement;

    // get note fields
    const noteDate = document.querySelector("#note-date") as HTMLInputElement;
    const noteSubject = document.querySelector("#note-subject") as HTMLInputElement;
    const noteBody = document.querySelector("#note-body") as HTMLInputElement;

    // get password fields
    const site = document.querySelector("#site")as HTMLInputElement;
    const username = document.querySelector("#username")as HTMLInputElement;
    const password = document.querySelector("#password")as HTMLInputElement;

    // get item list ul
    const tasks = document.querySelector("#tasks") as HTMLUListElement;
    const notes = document.querySelector("#notes") as HTMLUListElement;
    const passowrds = document.querySelector("#passwords") as HTMLUListElement;
    
    // get audio
    let taskAudio = document.querySelector('#task-audio') as HTMLAudioElement;
    let noteAudio = document.querySelector('#note-audio') as HTMLAudioElement;
    let passAudio = document.querySelector('#pass-audio') as HTMLAudioElement;

    console.log(passowrds);
    init(); 
    // page toggling
    taskPgBtn.addEventListener('click', () => {
        taskPg.style.display = 'block';
        notesPg.style.display = 'none';
        passPg.style.display = 'none';
        tipsPg.style.display = 'none';
    })
    notePgBtn.addEventListener('click', () => {
        taskPg.style.display = 'none';
        notesPg.style.display = 'block';
        passPg.style.display = 'none';
        tipsPg.style.display = 'none';
    })
    passPgBtn.addEventListener('click', () => {
        taskPg.style.display = 'none';
        notesPg.style.display = 'none';
        passPg.style.display = 'block';
        tipsPg.style.display = 'none';
    })
    tipsPgBtn.addEventListener('click', () => {
        taskPg.style.display = 'none';
        notesPg.style.display = 'none';
        passPg.style.display = 'none';
        tipsPg.style.display = 'block';
    })

    function init() {
        taskPg.style.display = 'block';
        notesPg.style.display = 'none';
        passPg.style.display = 'none';
        tipsPg.style.display = 'none';
    }

    // add buttons actions
    const task = new TaskTemp(tasks); 
    addTaskBtn.addEventListener('click', (e: Event) => {
        e.preventDefault();
        taskAudio.play(); 
        let startDate: string = taskStartDate.value;
        let endDate: string = taskFinishDate.value;
        let subject: string = taskSubject.value;
        let yourTask: string = taskBody.value;
        let doc: Task= new Task(startDate, endDate, subject, yourTask);
        task.render(doc);
    })

    const note = new NoteTemp(notes);
    addNoteBtn.addEventListener('click', (e: Event) => {
        e.preventDefault();
        noteAudio.play();
        let date: string = noteDate.value;
        let subject: string = noteSubject.value;
        let body: string = noteBody.value;
        let doc: Note = new Note(date, subject, body); 
        note.render(doc);
    })

    let passwordTemp: PassTemp = new PassTemp(passowrds); 
    addPassBtn.addEventListener('click', (e: Event) => {
        e.preventDefault();
        passAudio.play();
        let website: string = site.value;
        let user: string = username.value;
        let pass: string = password.value;
        let doc: Password = new Password(website, user, pass); 
        passwordTemp.render(doc);
    })
});
