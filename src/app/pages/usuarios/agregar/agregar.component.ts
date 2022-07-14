import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormUsuarioService } from 'src/app/services/form/form-usuario.service';
import { UsuarioService } from 'src/app/services/usuario/usuario/usuario.service';
import { IUsuario } from '../../interfaces/i-usuario';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private formService: FormUsuarioService,
    private usuarioService: UsuarioService,
    private router: Router
  ) { 
    this.form = this.formService.formUsuarios();
  }

  ngOnInit(): void {
  }

  saveData(){
    const data: IUsuario = {
      nombre: this.form.controls['nombre'].value,
      telefono: this.form.controls['telefono'].value,
      fecha_nacimiento: this.form.controls['fecha_nacimiento'].value,
      direccion: this.form.controls['direccion'].value,
      email: this.form.controls['email'].value
    }

    this.usuarioService.addUsuario(data).subscribe( res => {
      this.router.navigate(['/']);
    })
  }

}
