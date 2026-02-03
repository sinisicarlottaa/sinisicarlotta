import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './sections/hero/hero.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { SeparatorComponent } from './sections/separator/separator.component';
import { EducationComponent } from './sections/education/education.component';
import { WorkComponent } from './sections/work/work.component';
import { IconsComponent } from './sections/icons/icons.component';

@Component({
  selector: 'app-root',
  imports: [
    HeroComponent,
    SkillsComponent,
    SeparatorComponent,
    EducationComponent,
    WorkComponent,
    IconsComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('cv');
}
