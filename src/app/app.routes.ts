import { Routes } from '@angular/router';
import { ListCardComponent } from './components/list-card/list-card.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ShopComponent } from './components/shop/shop.component';
import { ComplaintDialogComponent } from './components/complaint-dialog/complaint-dialog.component';

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'cards', component: ListCardComponent },
  { path: 'welcome', component: WelcomeComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'complaints', component: ComplaintDialogComponent }
];
