import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario/usuario/usuario.service';

import { IUsuario } from '../../interfaces/i-usuario';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  public usuarios : IUsuario [] = []

  public usuarioFilter: any;


  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  )  { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(
      (data: any) => {
        this.usuarios = data
      }
    );
  }

  public deleteUsuario(id: number){
    this.usuarioService.deleteUsuario(id).subscribe(
      (data: any) => {
        this.usuarios = this.usuarios.filter(usuario => usuario.id != id)
      }
    ); 
  }



}
