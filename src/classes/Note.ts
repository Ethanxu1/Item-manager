export class Note {
    date: string; 
    subject: string;
    note: string; 
    constructor(date: string, subject: string, note: string) {
        this.date = date;
        this.subject = subject;
        this.note = note;
    }
}