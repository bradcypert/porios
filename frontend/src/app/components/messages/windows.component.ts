import { Component, OnInit, ElementRef, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '../../data/user.component';
import { Thread } from '../../data/thread.component';
import { Message } from '../../data/message.component';

import { UserService } from '../../services/user.service';
import { ThreadService } from '../../services/thread.service';
import { MessageService } from '../../services/message.service';
import { TitleService } from "../../services/title.service";
import { AnalyticsService } from "../../services/analytics.service";

@Component({
    inputs: ['message'],
    selector: 'chat-message',
    template: `
    <div class="msg-container"
        [ngClass]="{'base-sent': !incoming, 'base-receive': incoming}">
        <div class="avatar"
            *ngIf="!incoming">
        <img src="{{message.author.avatarSrc}}">
        </div>
        <div class="messages"
        [ngClass]="{'msg-sent': !incoming, 'msg-receive': incoming}">
        <p>{{message.text}}</p>
        <time></time>
        </div>
        <div class="avatar"
            *ngIf="incoming">
        <img src="{{message.author.avatarSrc}}">
        </div>
    </div>
    `
})
export class ChatMessage implements OnInit {
    message: Message;
    currentUser: User;
    incoming: boolean;

    constructor(public userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.currentUser
            .subscribe(
            (user: User) => {
                this.currentUser = user;
                if (this.message.author && user) {
                    this.incoming = this.message.author.id !== user.id;
                }
            });
    }

}

@Component({
    selector: 'chat-window',
    directives: [ChatMessage],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div class="panel panel-default">
    <div class="panel-heading top-bar">
        <div class="panel-title-container">
        <h3 class="panel-title">
            <span class="glyphicon glyphicon-comment"></span>
            Chatting with - {{currentThread.name}}
        </h3>
        </div>
        <div class="panel-buttons-container">
        <!-- Minimize -->
        </div>
    </div>
    <div class="panel-body msg-container-base">
        <chat-message
            *ngFor="let message of messages | async"
            [message]="message">
        </chat-message>
    </div>
    <div class="panel-footer">
        <div class="msg-send">
        <input type="text" 
                class="msg-input"
                placeholder="Write your message here..."
                (keydown.enter)="onEnter($event)"
                [(ngModel)]="draftMessage.text" />
        <span class="msg-send-btn">
            <button class="btn btn-primary"
                (click)="onEnter($event)"
                >Send</button>
        </span>
        </div>
    </div>
    </div>
    `
})
export class ChatWindow implements OnInit {
    messages: Observable<any>;
    currentThread: Thread;
    draftMessage: Message;
    currentUser: User;

    constructor(
        private _ga: AnalyticsService,
        private _title: TitleService,
        public messagesService: MessageService,
        public threadsService: ThreadService,
        public userService: UserService,
        public el: ElementRef) {
    }

    ngOnInit(): void {
        this.messages = this.threadsService.currentThreadMessages;

        this.draftMessage = new Message();

        this.threadsService.currentThread.subscribe(
            (thread: Thread) => {
                this._title.setTitle(`${thread.name} | Messages`);
                this.currentThread = thread;
            });

        this.userService.currentUser
            .subscribe(
            (user: User) => {
                this.currentUser = user;
            });

        this.messages
            .subscribe(
            (messages: Array<Message>) => {
                setTimeout(() => {
                    this.scrollToBottom();
                });
            });
    }

    onEnter(event: any): void {
        this.sendMessage();
        event.preventDefault();
    }

    sendMessage(): void {
        let m: Message = this.draftMessage;
        m.author = this.currentUser;
        m.thread = this.currentThread;
        m.isRead = true;
        this.messagesService.addMessage(m);
        this.draftMessage = new Message();
    }

    scrollToBottom(): void {
        let scrollPane: any = this.el
            .nativeElement.querySelector('.msg-container-base');
        scrollPane.scrollTop = scrollPane.scrollHeight;
    }

}