import { Component } from '@angular/core';
import { WorkItem } from '../../../shared/model';

@Component({
  selector: 'app-work',
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  works: WorkItem[] = [
    {
      title: 'Frontend Developer Academy',
      company: 'VLC2',
      period: '2023 – Present',
      type: 'laptop',
      description: {
        intro:
          'Structured training program carried out alongside senior developers, focused on frontend development with JavaScript and Angular.',
        body: 'During the Academy, I strengthened my skills in building responsive user interfaces, dynamic DOM manipulation, and developing data-driven web applications, working on both standalone projects and applications integrated with APIs.',
        skills: [
          'Modern JavaScript (event handling, application logic, Fetch API)',
          'Angular (components, services, HttpClient, reactive forms)',
          'Data management through CRUD operations (GET, POST, PUT, DELETE)',
          'Architecture principles and best practices for scalable and maintainable applications',
        ],
        outro:
          'The program combined technical-theoretical lessons with hands-on exercises, helping me develop autonomy, a structured working method, and strong attention to code quality.',
      },
    },
    {
      title: 'Frontend Developer Consultant',
      company: 'Reply / Intesa Sanpaolo (VLC2)',
      period: '2024 – Present',
      type: 'keyboard',
      description: {
        intro:
          'Currently involved as a frontend developer in a project for Intesa Sanpaolo, working as an external consultant at Reply and employed by VLC2.',
        body: 'I contribute to the development and maintenance of web interfaces using Angular and JavaScript, collaborating within a structured team and following Git-based workflows.',
        outro:
          'This experience allows me to apply development best practices, work on shared codebases, and contribute to a complex enterprise-level project, strengthening technical skills, attention to detail, and collaboration in high-responsibility environments.',
      },
    },
    {
      title: 'Sales Assistant',
      company: 'Carpisa & Bershka – Shopville Le Gru (Grugliasco)',
      period: '10/2022 – 08/2024',
      type: 'hanger',
      description: {
        intro:
          'Customer-facing role across women’s and men’s departments, supporting the full purchase journey, restocking based on sales, stockroom tasks, cash operations, returns, and online order processing using in-store devices.',
      },
    },
  ];
  //   works = [
  //     {
  //       title: 'Frontend Developer Academy',
  //       company: 'VLC2',
  //       period: '2023 – Present',
  //       description: {
  //         intro:
  //           'Structured training program carried out alongside senior developers, focused on frontend development with JavaScript and Angular.',
  //         body: 'During the Academy, I strengthened my skills in building responsive user interfaces, dynamic DOM manipulation, and developing data-driven web applications, working on both standalone projects and applications integrated with APIs.',
  //         skills: [
  //           'Modern JavaScript (event handling, application logic, Fetch API)',
  //           'Angular (components, services, HttpClient, reactive forms)',
  //           'Data management through CRUD operations (GET, POST, PUT, DELETE)',
  //           'Architecture principles and best practices for scalable and maintainable applications',
  //         ],
  //         outro:
  //           'The program combined technical-theoretical lessons with hands-on exercises, helping me develop autonomy, a structured working method, and strong attention to code quality.',
  //       },
  //       type: 'laptop',
  //     },
  //     {
  //       title: 'Frontend Developer Consultant',
  //       company: 'Reply / Intesa Sanpaolo (VLC2)',
  //       period: '2024 – Present',
  //       description: `
  // Currently involved as a frontend developer in a project for Intesa Sanpaolo, working as an external consultant at Reply and employed by VLC2.

  // I contribute to the development and maintenance of web interfaces using Angular and JavaScript, collaborating within a structured team and following Git-based workflows.

  // This experience allows me to apply development best practices, work on shared codebases, and contribute to a complex enterprise-level project, strengthening technical skills, attention to detail, and collaboration in high-responsibility environments.
  //     `,
  //       type: 'keyboard',
  //     },
  //     {
  //       title: 'Sales Assistant',
  //       company: 'Carpisa & Bershka – Shopville Le Gru (Grugliasco)',
  //       period: '10/2022 – 08/2024',
  //       description: `
  // Experience as a sales assistant in both women’s and men’s departments, actively supporting customers throughout the entire purchasing process, from initial assistance to checkout.

  // Responsibilities included stock replenishment based on sales performance, warehouse management, cash handling, returns, and support for online orders through company devices.

  // This role helped me develop strong communication and interpersonal skills, problem-solving abilities, adaptability in fast-paced environments, teamwork, and effective multitasking, always maintaining a strong focus on customer satisfaction.
  //     `,
  //       type: 'hanger',
  //     },
  //   ];
}
