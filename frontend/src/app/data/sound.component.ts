export class Sound {
    image: string;
    podcast: string;
    duration: string;

    constructor(public name: string, public src: string) {
        this.src = src;
        this.name = name;
    }
}