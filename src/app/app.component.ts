import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  private static CHK_KEYUP_WAIT_SECOND = 5000;
  userName = '';
  private valid = false;

  ngAfterViewInit() {
    const checkTouchedFn = () => {
      if(this.valid) return;
      alert('이름을 입력해주세요');
    };
    setTimeout(checkTouchedFn, AppComponent.CHK_KEYUP_WAIT_SECOND);
  }
  onKeyUp(name) {
    this.valid = name.length > 0;
  }
  setName(name) {
    this.userName = name;
  }
}
