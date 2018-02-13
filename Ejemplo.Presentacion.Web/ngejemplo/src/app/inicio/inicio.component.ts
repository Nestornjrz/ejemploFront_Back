import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../services/http-client.service';
import { MensajeDto } from '../dtos/mensaje-dto';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
 respuesta: MensajeDto = new MensajeDto();
  constructor(private _http: HttpClientService) { }

  ngOnInit() {
    this._http.getMensajeDto('/api/Clientes')
      .subscribe((respuesta) => {
        this.respuesta = respuesta;
      });
  }

}
