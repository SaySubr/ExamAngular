import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule} from '@angular/router';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./components/header/header.component";
import { ListCardComponent } from "./components/list-card/list-card.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ExamAngular';
}
