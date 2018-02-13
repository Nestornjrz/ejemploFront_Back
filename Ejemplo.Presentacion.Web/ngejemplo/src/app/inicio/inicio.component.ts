import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../services/http-client.service';
import { MensajeDto } from '../dtos/mensaje-dto';
import { ClienteDto } from '../dtos/cliente-dto';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
 respuesta: MensajeDto = new MensajeDto();
 clientes: ClienteDto[] = [];
  constructor(private _http: HttpClientService) { }

  ngOnInit() {
    this._http.getMensajeDto('/api/Clientes')
      .subscribe((respuesta) => {
        this.respuesta = respuesta;
        this.clientes = (<ClienteDto[]>respuesta.ObjetoDto);
      });
  }

}
