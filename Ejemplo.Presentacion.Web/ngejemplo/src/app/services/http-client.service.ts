import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, filter } from 'rxjs/operators';
import { MensajeDto } from '../dtos/mensaje-dto';
import { WindowsRefService } from './windows-ref.service';

@Injectable()
/**
 * Este clase usa HttpCliente en vez de http porque HttpClient es lo nuevo 05/02/2018
 * esto es solo con el objetivo de compararlo con lo que antes utilizaba con http
 * Mas informacion al respecto
 * http://blog.enriqueoriol.com/2017/11/httpclient-vs-http-angular.html
 */
export class HttpClientService {

  constructor(private _http: HttpClient, private _windowRef: WindowsRefService) { }

  postObject(objeto, apiUrl: string): Observable<MensajeDto> {
    const url = this._windowRef.urlBase() + apiUrl;
    return this._http.post<MensajeDto>(url, objeto);
  }
  getMensajeDto(apiUrl: string): Observable<MensajeDto> {
    return this._http.get<MensajeDto>( this._windowRef.urlBase() + apiUrl);
  }
}
