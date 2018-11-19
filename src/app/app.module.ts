import { AvesService } from './services/aves/aves.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvesComponent } from './pages/aves/aves.component';
import { HeaderComponent } from './shared/header/header.component';
import { ApiService } from './services/api/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AvesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    AvesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
