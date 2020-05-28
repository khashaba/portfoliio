import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BriefIntroComponent } from './components/brief-intro/brief-intro.component';
import { WhatIDoComponent } from './components/what-i-do/what-i-do.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SquareCardComponent } from './components/square-card/square-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BriefIntroComponent,
    WhatIDoComponent,
    SkillsComponent,
    SquareCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
