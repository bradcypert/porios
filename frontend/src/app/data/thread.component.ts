import { uid } from '../utils/uid';
import { Message } from './message.component';

export class Thread {
    id: string;
    lastMessage: Message;
    name: string;
    avatarSrc: string;

    constructor(id?: string,
        name?: string,
        avatarSrc?: string) {
        this.id = id || uid();
        this.name = name;
        this.avatarSrc = avatarSrc;
    }
}