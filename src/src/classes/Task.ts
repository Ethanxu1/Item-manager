export class Task {
    startDate: string;
    endDate: string;
    subject: string; 
    task: string;
    constructor(startDate: string, endDate: string, task: string, subject: string) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.subject = subject;
        this.task = task;
    }
}