import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing, appRoutingProviders} from './app.routing'; //ruteado
import { HttpClientModule } from '@angular/common/http'; //para usar peticiones http
import { AppComponent } from './app.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { FrutaComponent } from './fruta/fruta.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProfesorComponent,
    FrutaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
