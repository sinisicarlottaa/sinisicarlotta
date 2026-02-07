import { Component } from '@angular/core';
import { HeroComponent } from '../sections/hero/hero.component';
import { SeparatorComponent } from '../separator/separator.component';
import { WorkComponent } from '../sections/work/work.component';
import { IconsComponent } from '../sections/icons/icons.component';
import { SkillsComponent } from '../sections/skills/skills.component';
import { EducationComponent } from '../sections/education/education.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    SeparatorComponent,
    WorkComponent,
    IconsComponent,
    SkillsComponent,
    EducationComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
