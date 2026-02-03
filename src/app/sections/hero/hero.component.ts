import { ChangeDetectorRef, Component, ElementRef, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @ViewChild('heroSection', { static: true })
  heroSection!: ElementRef<HTMLElement>;

  fullText = 'HI, I’m Carlotta';
  typingSpeed = 100;

  typedText = signal('');
  private isTyping = false;
  private observer!: IntersectionObserver;

  ngAfterViewInit() {
    // scrive al load
    this.startTyping();

    // riscrive quando rientra in viewport
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.startTyping();
        }
      },
      { threshold: 0.6 },
    );

    this.observer.observe(this.heroSection.nativeElement);
  }

  startTyping() {
    if (this.isTyping) return;

    this.isTyping = true;
    this.typedText.set('');
    this.typeWriter(0);
  }

  typeWriter(index: number) {
    if (index < this.fullText.length) {
      this.typedText.update((value) => value + this.fullText.charAt(index));

      setTimeout(() => {
        this.typeWriter(index + 1);
      }, this.typingSpeed);
    } else {
      this.isTyping = false;
    }
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
