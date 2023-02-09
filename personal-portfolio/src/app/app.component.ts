import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() blurMain: boolean = false;
  blurBackground: boolean = false;
  title = 'personal-portfolio';

  blurMainComponent() {
    this.blurBackground = !this.blurBackground;
    console.log(this.blurBackground);
  }
}
