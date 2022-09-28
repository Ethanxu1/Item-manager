import { Task } from "./Task";

export class TaskTemp {
    constructor(private container: HTMLUListElement) {}

    render(item: Task) {
        const li = document.createElement("li");
        
        const h4 = document.createElement("h4");
        h4.innerText = item.subject;
        li.append(h4);

        const date = document.createElement("p");
        date.innerText = `${item.startDate} to ${item.endDate}`;
        li.append(date);

        const p = document.createElement("p");
        p.innerText = item.task;
        li.append(p);

        this.container.append(li);
    }
}