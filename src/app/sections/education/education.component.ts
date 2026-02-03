import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  education = [
    {
      title: 'Bachelor’s Degree',
      institution: 'University of Turin',
      period: '2022 – Present',
      description:
        'Bachelor’s degree in Social Innovation, Communication and New Technologies, with a strong focus on digital communication, UX/UI design and web technologies.',
    },
    {
      title: 'Erasmus Program',
      institution: 'Universidad de La Laguna, Spain',
      period: '09/2024 – 02/2025',
      description:
        'Three-month Erasmus experience focused on social innovation and communication, strengthening intercultural skills and gaining extensive knowledge of the Spanish language.',
    },
    {
      title: 'High School Diploma',
      institution: 'International Linguistic High School – Spanish Specialization',
      period: '2018 – 2022',
      description:
        'Final grade: 97/100. Specialized in languages with an in-depth focus on Spanish, developing strong communication, analytical and cultural skills.',
    },
  ];

  @ViewChild('educationGrid', { static: true })
  educationGrid!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        this.educationGrid.nativeElement.classList.add('is-active');

        // shuffle una sola volta dopo l’animazione iniziale
        setTimeout(() => {
          this.shuffleOnce();
        }, 2200);

        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(this.educationGrid.nativeElement);
  }

  shuffleOnce(): void {
    const container = this.educationGrid.nativeElement;
    const cards = Array.from(container.querySelectorAll<HTMLElement>('.edu-card'));

    // stato intermedio (pre-shuffle)
    cards.forEach((card) => {
      card.style.transform = 'translateY(40px) scale(0.96)';
      card.style.opacity = '0.8';
    });

    setTimeout(() => {
      // shuffle dati
      const shuffled = [...this.education];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      this.education = shuffled;

      // aspetta il re-render
      requestAnimationFrame(() => {
        const newCards = container.querySelectorAll<HTMLElement>('.edu-card');

        newCards.forEach((card) => {
          card.style.transform = '';
          card.style.opacity = '';
        });
      });
    }, 140);
  }
}
