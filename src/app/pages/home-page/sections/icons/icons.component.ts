import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import Sortable from 'sortablejs';

@Component({
  selector: 'app-icons',
  imports: [],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss',
})
export class IconsComponent implements AfterViewInit {
  @ViewChild('iconsGrid', { static: true }) iconsGrid!: ElementRef;

  ngAfterViewInit() {
    Sortable.create(this.iconsGrid.nativeElement, {
      animation: 220,
      handle: '.icon-circle',
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      ghostClass: 'icon-ghost',
      chosenClass: 'icon-chosen',
      dragClass: 'icon-drag',
    });
  }
}
