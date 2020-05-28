import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainFunctionalityService {

  constructor(private httpCliet: HttpClient) { }
  private SKILLS_URL = '../assets/skills.json';

  getSkills() {
    return this.httpCliet.get(this.SKILLS_URL);
  }
}
