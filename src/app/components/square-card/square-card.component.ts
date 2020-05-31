import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square-card',
  templateUrl: './square-card.component.html',
})
export class SquareCardComponent implements OnInit {
  @Input() skill;
  constructor() { }

  ngOnInit(): void {
    console.log(this.skill)
  }

}
