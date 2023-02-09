import { DOCUMENT } from '@angular/common';
import {
  Component,
  EventEmitter,
  Inject,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() blurMain = new EventEmitter<boolean>();
  isMobileMenu: boolean = false;
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {}
  openMenu() {
    this.isMobileMenu = !this.isMobileMenu;
    this.blurMain.emit(true);
    this.isMobileMenu
      ? this.renderer.addClass(this.document.body, 'overflow-hidden')
      : this.renderer.removeClass(this.document.body, 'overflow-hidden');
  }
}
