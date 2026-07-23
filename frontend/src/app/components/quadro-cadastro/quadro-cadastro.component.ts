import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-quadro-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './quadro-cadastro.component.html',
  styleUrl: './quadro-cadastro.component.scss'
})

export class QuadroCadastroComponent {

  private usuarioService = inject(UsuarioService); //dpendecy injection

  public nome:string = '';
  public email:string = ''; 
  public botaoDesativado:boolean = true;

  public botoesDesativados():void{
    if(this.nome !='' && this.email !=''){
      this.botaoDesativado = false
    }
  }

  //funcao para validar o nome (pq? pq eu posso)
  private validaNome(nome:string):boolean {
    if(this.nome.trim() != '' ){
      return true;
    }
    else{
      return false;
    }
  }

  //pra validar email tbm pq sim
  private validaEmail(email:string):boolean{
    return this.email.trim().includes('@');
  }


  public gravar():void {
    if (this.validaNome(this.nome) == true && this.validaEmail(this.email) == true){
      // usuario
      const novoUsuario={
        nome: this.nome,
        email: this.email
      };
      //enviando os dados
      this.usuarioService.postUsuario(novoUsuario).subscribe({
        next:(resposta)=>{
          alert("Usuario cadastrado com sucesso!")
        },
        error:(erro)=>{
          console.error('Erro ao gravar: ', erro);
          alert('Erro ao gravar dados. Verifique se o JSON Server está rodando.');
        }
      });
    } 
    else{
      alert('Dados inválidos, verifique.');
    }
  }

  public cancelar():void {
    this.nome = ''
    this.email = ''
  }
}
