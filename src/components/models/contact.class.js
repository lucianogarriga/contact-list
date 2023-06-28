export class Contact {
    name = '';
    surname = '';
    connected = false;

    constructor(name,surname,connected){
        this.name = name;
        this.surname = surname;
        this.connected = connected;
    }
}