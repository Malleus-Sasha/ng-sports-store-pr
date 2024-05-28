import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Message } from "./message.component";

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class MessageService {
  private subject = new Subject<Message>();

  reportMessage(msg: Message) {
    console.log('Report Mess(NEXT)', msg);
    this.subject.next(msg);
  }

  get message(): Subject<Message> {
    return this.subject;
  }
}
