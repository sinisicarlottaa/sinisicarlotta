import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './pages/home-page/sections/hero/hero.component';
import { SkillsComponent } from './pages/home-page/sections/skills/skills.component';
import { SeparatorComponent } from './pages/home-page/separator/separator.component';
import { EducationComponent } from './pages/home-page/sections/education/education.component';
import { WorkComponent } from './pages/home-page/sections/work/work.component';
import { IconsComponent } from './pages/home-page/sections/icons/icons.component';

@Component({
  selector: 'app-root',
  imports: [
    HeroComponent,
    SkillsComponent,
    SeparatorComponent,
    EducationComponent,
    WorkComponent,
    IconsComponent,
    RouterOutlet,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('cv');
}
