import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home-page/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./pages/portfolio-page/portfolio/portfolio.component').then(
        (m) => m.PortfolioComponent,
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
