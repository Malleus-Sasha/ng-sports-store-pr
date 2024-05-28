import { Injectable } from "@angular/core";
import { Subject, tap } from "rxjs";
import { MessageService } from "../../message/message.service";

export enum MODES {
  CREATE,
  EDIT,
}

export type EventModes = {
  mode: MODES;
  id: number;
}

@Injectable(
  // { providedIn: 'root' }
)
export class StateModelService {
  public event = new Subject<EventModes>();

  constructor(
    private message: MessageService,
  ) { 
    this.event.pipe(
      tap((e) => {
        console.log(':EVENT:STATE: ', e);
      }),
    ).subscribe((e) => {
      console.log(':STATE:SERVICE:', e);
      message.reportMessage({ 
        text: `MODE: ${MODES[e.mode]} - name: ${e.id}`,
        error: false,
      })
    })
  }
}
