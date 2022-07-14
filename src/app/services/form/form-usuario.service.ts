import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormUsuarioService {

  constructor() { }

  public formUsuarios(): FormGroup {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      telefono: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      fecha_nacimiento: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      direccion: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(255)])
    });
  }

  public updateUsuario(): FormGroup {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      telefono: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      fecha_nacimiento: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      direccion: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(255)])
    });
  }
}
