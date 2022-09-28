export class TaskTemp {
    constructor(container) {
        this.container = container;
    }
    render(item) {
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
