import { Routes } from '@angular/router';
import { ListCardComponent } from './components/list-card/list-card.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routes: Routes = [
  { path: '', redirectTo: 'cards', pathMatch: 'full' },
  { path: 'cards', component: ListCardComponent },
  { path: 'welcome', component: WelcomeComponent}
];
