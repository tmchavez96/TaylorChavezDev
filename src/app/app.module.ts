import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WaveAnimComponent } from './wave-anim/wave-anim.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { JupiterPrivacyPolicyComponent } from './jupiter-privacy-policy/jupiter-privacy-policy.component';
import { MainComponent } from './main/main.component'

// src/app/app.module.ts
const routes: Routes = [
  { path: 'JupiterPrivacyPolicy', component: JupiterPrivacyPolicyComponent },
  { path: '', component: MainComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SkillsComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    WaveAnimComponent,
    JupiterPrivacyPolicyComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
