import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
      .white-text {
          color: white;
      }
  `]
})
export class AppComponent {
  display = false;
  clicks = [];

  toggleDisplay() {
    if (this.display === false) {
      this.display = true;
    } else {
      this.display = false;
    }
    this.clicks.push(Date());
  }
}
