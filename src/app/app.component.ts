import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BarraSuperiorComponent } from './components/barra-superior/barra-superior.component';
import { ComponenteDoisComponent } from './components/componente-dois/componente-dois.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    // Meus components:
    BarraSuperiorComponent,
    ComponenteDoisComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'teste';
}
