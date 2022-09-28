import { Note } from "./Note";

export class NoteTemp {
    constructor(private container: HTMLUListElement) {}

    render(item: Note) {
        const li = document.createElement('li');

        const h4 = document.createElement('h4');
        h4.innerText = item.subject;
        li.append(h4);

        const p1 = document.createElement('p');
        p1.innerText = `Date: ${item.date}`;
        li.append(p1);

        const p2 = document.createElement('p');
        p2.innerText = item.note;
        li.append(p2);
        
        this.container.append(li);
    }
}