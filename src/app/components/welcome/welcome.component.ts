import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent implements OnInit, OnDestroy {
  translateHeyValue: number;
  translateNameValue: number;
  //translateIValue: number;
  // translateConstructValue: number;
  // translateThingsValue: number;
  hideSecondHeader = { hideHeader: true };
  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollEvent, true);
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollEvent, true);
  }
  scrollEvent = (event: any): void => {
    let scrollValue = event.target.scrollingElement.scrollTop;
    if (scrollValue < 1300) {
      console.log(scrollValue);
      this.translateHeyValue = event.target.scrollingElement.scrollTop * -1.5;
      this.translateNameValue = event.target.scrollingElement.scrollTop * 2.5;
      //this.translateIValue = event.target.scrollingElement.scrollTop;

      if (event.target.scrollingElement.scrollTop >= 116) {
        // this.translateConstructValue = event.target.scrollingElement.scrollTop * -1.5;
        // this.translateThingsValue = event.target.scrollingElement.scrollTop * -1.5;
        this.hideSecondHeader.hideHeader = false;
      } else {
        this.hideSecondHeader.hideHeader = true;
      }
    }
  };
  transformFn() {
    return 'translate3d(10px, 0, 100px);';
  }
}
