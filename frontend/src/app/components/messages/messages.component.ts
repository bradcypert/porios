import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {ChatThreads} from './threads.component';
import {ChatWindow} from './windows.component';

import { AnalyticsService } from '../../services/analytics.service';
import { UserService } from '../../services/user.service';
import { ThreadService } from '../../services/thread.service';
import { MessageService } from '../../services/message.service';

import {ChatExampleData} from '../../mock/mock-chat';
import {TitleService} from "../../services/title.service";

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
    constructor(
        private _ga: AnalyticsService,
        private _title: TitleService,
        public messageService: MessageService,
        public threadService: ThreadService,
        public userService: UserService) {
        ChatExampleData.init(messageService, threadService, userService);
    }

    ngOnInit() {
        this._title.setTitle('Messages');
        this._ga.page();
    }
}