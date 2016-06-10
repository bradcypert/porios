import { uid } from '../utils/uid';

export class User {
    id: string;

    constructor(public name: string, public avatarSrc: string) {
        this.id = uid();
    }
}