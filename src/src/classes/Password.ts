export class Password {
    site: string;
    user: string; 
    pass: string;
    constructor(site: string, user: string, pass: string) {
        this.site = site;
        this.user = user;
        this.pass = pass;
    }
}