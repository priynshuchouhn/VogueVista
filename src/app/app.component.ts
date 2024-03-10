import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { PushNotificationService } from './shared/services/push-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'VogueVista';

  constructor(private _swPush: SwPush, private pushNotificationService: PushNotificationService ) {}
  ngOnInit(): void {
    this.requestSubscription();
  }

  requestSubscription = () => {
    if (!this._swPush.isEnabled) {
      console.log("Notification is not enabled.");
      return;
    }

    this._swPush.requestSubscription({
      serverPublicKey: environment.vapidPublicKey
    }).then((_) => {
      this.pushNotificationService.addSub(_)
      // console.log(JSON.stringify(_));
    }).catch((_) => console.log);
  };
}
