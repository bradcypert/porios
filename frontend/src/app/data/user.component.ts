import { uid } from '../utils/uid';

export class User {
    id: string;
    name: string;
    username: string;
    password: string;

    constructor() {
        this.id = uid();
    }
}