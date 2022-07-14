import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormUsuarioService } from 'src/app/services/form/form-usuario.service';
import { UsuarioService } from '../../../services/usuario/usuario/usuario.service';
import { IUsuario } from '../../interfaces/i-usuario';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  @Input() data!: IUsuario;

  public form: FormGroup;
  public usuario! : number;

  constructor(
    private formService: FormUsuarioService,
    private activeRouted: ActivatedRoute,
    private UsuarioService: UsuarioService,
    private route: Router,
  ) { 
    this.form = this.formService.updateUsuario();
  }

  ngOnInit(): void {

    this.usuario = +this.activeRouted.snapshot.params['id'];

    this.UsuarioService.getUsuario(this.usuario).subscribe( res => {
      this.data = res;      
    })

    this.form.get('telefono')?.setValue(this.data.telefono);
  }

  public saveData(){
    const data: IUsuario = {
      nombre: this.form.controls['nombre'].value,
      telefono: this.form.controls['telefono'].value,
      fecha_nacimiento: this.form.controls['fecha_nacimiento'].value,
      direccion: this.form.controls['direccion'].value,
      email: this.form.controls['email'].value
    }

    this.UsuarioService.updateUsuario(this.usuario, data).subscribe( res => {
      this.route.navigate(['/']);
    })
  }
}
