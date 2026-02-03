import { Component } from '@angular/core';

@Component({
  selector: 'app-separator',
  imports: [],
  templateUrl: './separator.component.html',
  styleUrl: './separator.component.scss',
})
export class SeparatorComponent {
  items = [
    'Frontend Development',
    'UX/UI Design',
    'Web Design',
    'Creative',
    'Digital',
    'Social media',
  ];
}
