import { Component, OnInit } from '@angular/core';
import { MainFunctionalityService } from '../../services/main-functionality.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  private skills;
  constructor(private mainFunctions: MainFunctionalityService) { }

  ngOnInit(): void {
    this.mainFunctions.getSkills().subscribe(
      (skills) => {
        this.skills = skills;
      }
    );
  }

}
