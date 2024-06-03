import { Injectable } from "@angular/core";
import { MessageService } from "../modules/message/message.service";
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { Message } from "../modules/message/message.component";

@Injectable()
export class TermsGuard {
  constructor(private messages: MessageService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> | boolean {
    if (route.params["mode"] == "create") {
      return new Promise<boolean>((resolve, reject) => {
        let responses = [
          [
            "Yes",
            () => { resolve(true); },
          ],
          [
            "No",
            () => {
              this.router.navigateByUrl(this.router.url);
              resolve(false);
            },
          ],
        ];
        this.messages.reportMessage(
          // @ts-ignore
          new Message("Do you accept the terms & conditions?", false, responses)
        );
      });
    } else {
      return true;
    }
  }
}
