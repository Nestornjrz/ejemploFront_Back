import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientService } from './services/http-client.service';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { WindowsRefService } from './services/windows-ref.service';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [WindowsRefService, HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
