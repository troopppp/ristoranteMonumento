import { Routes } from '@angular/router';
import { RistorantePageComponent } from './pages/ristorante/ristorante-page.component';
import { StoriaPageComponent } from './pages/storia/storia-page.component';
import { MenuPageComponent } from './pages/menu/menu-page.component';
import { ContattiPageComponent } from './pages/contatti/contatti-page.component';
import { PrenotaPageComponent } from './pages/prenota/prenota-page.component';

export const routes: Routes = [
  { path: '', component: RistorantePageComponent, title: 'Il Ristorante | Monumento dal 1884' },
  { path: 'storia', component: StoriaPageComponent, title: 'Storia | Monumento dal 1884' },
  { path: 'menu', component: MenuPageComponent, title: 'Menù | Monumento dal 1884' },
  { path: 'contatti', component: ContattiPageComponent, title: 'Contatti | Monumento dal 1884' },
  { path: 'prenota', component: PrenotaPageComponent, title: 'Prenota | Monumento dal 1884' },
  { path: '**', redirectTo: '' }
];
