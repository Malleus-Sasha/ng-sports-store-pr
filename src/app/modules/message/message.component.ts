import { Component } from '@angular/core';
import { MessageService } from './message.service';

export class Message {
  constructor(public text: string, public error: boolean = false) { }
}

@Component({
  selector: 'app-message',
  template: `
    <div 
     class="bg-info text-white p-2 text-center" 
     [class.bg-danger]="lastMessage.error">
        MESS: <h6 *ngIf="lastMessage">{{lastMessage.text}}</h6> 
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class MessageComponent {
  lastMessage!: Message;

  constructor(private messageService: MessageService) {
    console.log('INIT: ms:', messageService);
    this.messageService.message.subscribe((m) => {
      console.log('<Message>: ', m);
      this.lastMessage = m;
    });
  }
}
