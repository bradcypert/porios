import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import {ChatThreads} from './threads.component';
import {ChatWindow} from './windows.component';

import { UserService } from '../../services/user.service';
import { ThreadService } from '../../services/thread.service';
import { MessageService } from '../../services/message.service';

import {ChatExampleData} from '../../mock/mock-chat';

@Component({
    selector: 'messages',
    template: require('./messages.component.html'),
    directives: [
        ROUTER_DIRECTIVES,
        ChatThreads,
        ChatWindow
    ],
    providers: [
        ThreadService,
        MessageService
    ]
})
export class MessagesComponent {
    constructor(public messageService: MessageService,
        public threadService: ThreadService,
        public userService: UserService) {
        ChatExampleData.init(messageService, threadService, userService);
    }
}