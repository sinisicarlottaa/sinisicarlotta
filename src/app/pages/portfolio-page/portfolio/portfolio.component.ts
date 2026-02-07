import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header/header.component';
import { ProjectsComponent } from '../sections/projects/projects.component';

@Component({
  selector: 'app-portfolio.component',
  imports: [HeaderComponent, ProjectsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {}
