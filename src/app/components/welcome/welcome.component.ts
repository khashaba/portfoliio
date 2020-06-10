import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollEvent, true);
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollEvent, true);
  }
  scrollEvent = (event: any): void => {
    let scrollValue = event.target.scrollingElement.scrollTop;
  }
  transformFn(){
    return 'translate3d(10px, 0, 100px);';
  }
}
