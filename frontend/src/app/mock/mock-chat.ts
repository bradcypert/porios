import { User } from '../data/user.component';
import { Thread } from '../data/thread.component';
import { Message } from '../data/message.component';

import { UserService } from '../services/user.service';
import { ThreadService } from '../services/thread.service';
import { MessageService } from '../services/message.service';

let me: User = new User('Porios', require('../../assets/img/avatar.png'));
let echo: User = new User('Parrot Bot', require('../../assets/img/avatar.png'));
let rev: User = new User('Reverse Bot', require('../../assets/img/avatar.png'));
let wait: User = new User('Delay Bot', require('../../assets/img/avatar.png'));

let tEcho: Thread = new Thread('tEcho', echo.name, echo.avatarSrc);
let tRev: Thread = new Thread('tRev', rev.name, rev.avatarSrc);
let tWait: Thread = new Thread('tWait', wait.name, wait.avatarSrc);

let initialMessages: Array<Message> = [
    new Message({
        author: me,
        sentAt: Date,
        text: 'Hey there Echo Bot!',
        thread: tEcho
    }),
    new Message({
        author: echo,
        sentAt: Date,
        text: `I\'ll parrot whatever you send me`,
        thread: tEcho
    }),
    new Message({
        author: rev,
        sentAt: Date,
        text: `I\'ll reverse whatever you send me`,
        thread: tRev
    }),
    new Message({
        author: wait,
        sentAt: Date,
        text: `I\'ll wait for however long you tell me`,
        thread: tWait
    }),
];

export class ChatExampleData {
    static init(messagesService: MessageService,
        threadsService: ThreadService,
        userService: UserService): void {

        messagesService.messages.subscribe(() => ({}));

        userService.setCurrentUser(me);

        initialMessages.map((message: Message) => messagesService.addMessage(message));

        threadsService.setCurrentThread(tEcho);

        this.setupBots(messagesService);
    }

    static setupBots(messagesService: MessageService): void {

        messagesService.messagesForThreadUser(tEcho, echo)
            .forEach((message: Message): void => {
                messagesService.addMessage(
                    new Message({
                        author: echo,
                        text: message.text,
                        thread: tEcho
                    })
                );
            },
            null);


        messagesService.messagesForThreadUser(tRev, rev)
            .forEach((message: Message): void => {
                messagesService.addMessage(
                    new Message({
                        author: rev,
                        text: message.text.split('').reverse().join(''),
                        thread: tRev
                    })
                );
            },
            null);

        messagesService.messagesForThreadUser(tWait, wait)
            .forEach((message: Message): void => {

                let waitTime: number = parseInt(message.text, 10);
                let reply: string;

                if (isNaN(waitTime)) {
                    waitTime = 0;
                    reply = `I didn\'t understand that. Try sending me a number`;
                } else {
                    reply = `I waited ${waitTime} seconds to send you this.`;
                }

                setTimeout(
                    () => {
                        messagesService.addMessage(
                            new Message({
                                author: wait,
                                text: reply,
                                thread: tWait
                            })
                        );
                    },
                    waitTime * 1000);
            },
            null);


    }
}