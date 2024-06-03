import { Component } from "@angular/core";
import { MessageService } from "./message.service";

export class Message {
  constructor(
    public text: string,
    public error: boolean = false,
    public responses?: [string, () => void][]
  ) {}
}

@Component({
  selector: "app-message",
  template: `
    <div
      *ngIf="lastMessage"
      class="bg-info text-white p-2 text-center"
      [class.bg-danger]="lastMessage.error">
      <h6>{{ lastMessage.text }}</h6>
    </div>
    <div class="text-xs-center m-b-1">
      <button
        *ngFor="let resp of lastMessage?.responses; let i = index"
        (click)="resp[1]"
        class="btn btn-primary m-a-1"
        [class.btn-secondary]="i > 0">
        {{ resp[0] }}
      </button>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class MessageComponent {
  lastMessage!: Message;

  constructor(private messageService: MessageService) {
    console.log("INIT: ms:", messageService);
    this.messageService.message.subscribe((m) => {
      console.log("<Message>: ", m);
      this.lastMessage = m;
    });
  }
}
