import { Routes } from '@angular/router';
import { ListCardComponent } from './components/list-card/list-card.component';

export const routes: Routes = [
  { path: '', redirectTo: 'cards', pathMatch: 'full' },
  { path: 'cards', component: ListCardComponent }
];
