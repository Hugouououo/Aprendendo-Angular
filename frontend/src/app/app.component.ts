import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BarraSuperiorComponent } from './components/barra-superior/barra-superior.component';
import { QuadroCadastroComponent } from './components/quadro-cadastro/quadro-cadastro.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    // Meus components:
    BarraSuperiorComponent,
    QuadroCadastroComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'teste';
}
