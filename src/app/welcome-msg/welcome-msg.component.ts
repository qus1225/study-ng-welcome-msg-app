import { Component, AfterViewInit } from '@angular/core';
import { I18nSupportService} from '../i18n-support.service';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent implements AfterViewInit {
  private static CHK_KEYUP_WAIT_SECOND = 5000;
  userName = '';
  welcomeMsg = '';
  private valid = false;

  constructor(public i18nSupporter: I18nSupportService) {}

  ngAfterViewInit() {
    const checkTouchedFn = () => {
      if(this.valid) return;
      alert('이름을 입력해주세요');
    };
    setTimeout(checkTouchedFn, WelcomeMsgComponent.CHK_KEYUP_WAIT_SECOND);
  }

  onChange() {
    this.valid = this.userName.length > 0;
  }
  showWelcomeMsg() {
    this.welcomeMsg = this.i18nSupporter.getWelcomeMsg(this.userName);
  }

}
