import { Component, ElementRef, ViewChild } from '@angular/core';
import { Pill } from '../../../shared/model';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  /* ============================
     REFERENCES
     ============================ */

  // Reference to the pills container in the template
  @ViewChild('pillsContainer', { static: true })
  pillsContainer!: ElementRef<HTMLElement>;

  /* ============================
     RESPONSIVE STATE
     ============================ */

  // Simple mobile detection (used to switch pills layout)
  isMobile = window.innerWidth <= 600;

  // Pills used by the template (desktop vs mobile)
  get activePills(): Pill[] {
    return this.isMobile ? this.mobilePills : this.pills;
  }

  /* ============================
     DESKTOP PILLS
     ============================ */

  pills: Pill[] = [
    { label: 'UX/UI Design', x: '6%', y: '52%', r: '-10deg' },
    { label: 'HTML', x: '10%', y: '68%', r: '6deg' },
    { label: 'SCSS', x: '24%', y: '47%', r: '-6deg' },
    { label: 'Bootstrap', x: '20%', y: '62%', r: '6deg' },
    { label: 'JavaScript', x: '28%', y: '76%', r: '-10deg' },
    { label: 'Angular', x: '54%', y: '53%', r: '-4deg' },
    { label: 'Websites', x: '46%', y: '66%', r: '6deg' },
    { label: 'Responsive Design', x: '45%', y: '82%', r: '-8deg' },
    { label: 'Figma', x: '36%', y: '60%', r: '2deg' },
    { label: 'WordPress', x: '62%', y: '60%', r: '-23deg' },
    { label: 'Git', x: '90%', y: '55%', r: '-2deg' },
    { label: 'Teamwork', x: '79%', y: '47%', r: '-19deg' },
    { label: 'Attention to Detail', x: '75%', y: '67%', r: '6deg' },
    { label: 'Adaptability', x: '70%', y: '82%', r: '-8deg' },
  ];

  /* ============================
     MOBILE PILLS
     ============================ */

  mobilePills: Pill[] = [
    { label: 'HTML', x: '43%', y: '12%', r: '15deg' },
    { label: 'UX/UI Design', x: '12%', y: '18%', r: '-6deg' },
    { label: 'SCSS', x: '5%', y: '25%', r: '4deg' },
    { label: 'JavaScript', x: '60%', y: '18%', r: '-6deg' },
    { label: 'Git', x: '45%', y: '25%', r: '-14deg' },
    { label: 'Angular', x: '68%', y: '25%', r: '0deg' },
    { label: 'WordPress', x: '45%', y: '32%', r: '0deg' },
    { label: 'Figma', x: '3%', y: '39%', r: '4deg' },
    { label: 'Bootstrap', x: '10%', y: '31%', r: '-14deg' },
    { label: 'Teamwork', x: '66%', y: '39%', r: '0deg' },
    { label: 'Adaptability', x: '27%', y: '40%', r: '9deg' },
    { label: 'Websites', x: '12%', y: '46%', r: '-4deg' },
    { label: 'Attention to Detail', x: '48%', y: '47%', r: '-8deg' },
    { label: 'Responsive Design', x: '0%', y: '54%', r: '7deg' },
  ];

  /* ============================
     MAGNETIC HOVER INTERACTION
     ============================ */
  private applyMagnetEffect(x: number, y: number) {
    const container = this.pillsContainer.nativeElement;
    const pills = container.querySelectorAll<HTMLElement>('.pill');
    const rect = container.getBoundingClientRect();

    const maxDistance = 350;
    const maxTranslate = 40;

    pills.forEach((pill) => {
      const pillRect = pill.getBoundingClientRect();
      const pillX = pillRect.left - rect.left + pillRect.width / 2;
      const pillY = pillRect.top - rect.top + pillRect.height / 2;

      const dx = x - pillX;
      const dy = y - pillY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 0 && distance < maxDistance) {
        const t = 1 - distance / maxDistance;
        const strength = t * maxTranslate;

        const tx = (dx / distance) * strength;
        const ty = (dy / distance) * strength;
        const extraRot = (dx / maxDistance) * 14 * t;

        pill.style.transform = `translate(${tx}px, ${ty}px) rotate(calc(var(--r) + ${extraRot}deg))`;
      } else {
        pill.style.transform = 'translate(0, 0) rotate(var(--r))';
      }
    });
  }

  onMouseMove(event: MouseEvent) {
    if (window.innerWidth <= 900) return;

    const rect = this.pillsContainer.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.applyMagnetEffect(x, y);
  }

  onMouseLeave() {
    // Reset all pills when leaving the container
    const container = this.pillsContainer?.nativeElement;
    if (!container) return;

    container.querySelectorAll<HTMLElement>('.pill').forEach((pill) => {
      pill.style.transform = 'translate(0, 0) rotate(var(--r))';
    });
  }

  onTouchMove(event: TouchEvent) {
    const touch = event.touches[0];
    if (!touch) return;

    const rect = this.pillsContainer.nativeElement.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    this.applyMagnetEffect(x, y);
  }
}
