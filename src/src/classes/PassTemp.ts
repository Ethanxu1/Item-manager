import { Password } from "./Password";

export class PassTemp {
    constructor(private container: HTMLUListElement) {}

    render(item: Password) {
        let li = document.createElement("li");

        let site = document.createElement("h4");
        site.innerText = item.site;
        li.append(site);

        let username = document.createElement("p");
        username.innerText = `Username: ${item.user}`;
        li.append(username);

        let label = document.createElement("label");
        label.innerText = 'Password: ';
        li.append(label);

        let password = document.createElement("input");
        password.type = "text";
        password.value = item.pass;
        password.readOnly = true;
        li.append(password);

        this.container.append(li);
    }
}