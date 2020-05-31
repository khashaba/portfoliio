import { Component, OnInit } from '@angular/core';
import { MainFunctionalityService } from '../../services/main-functionality.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
})
export class SkillsComponent implements OnInit {

  public skills;

  private oddSkills = { 'odd-skills': true };
  constructor(private mainFunctions: MainFunctionalityService) { }

  ngOnInit(): void {
    this.mainFunctions.getSkills().subscribe(
      (skills) => {
        this.skills = skills;
      },
      err => console.error('Observer got an error: ' + err),
      () => {
        if (this.skills.length % 2 !== 0) {
          this.oddSkills["odd-skills"] = true;
        }
        console.log("**************************")
        console.log(this.oddSkills["odd-skills"])
      }
    );
  }

}
