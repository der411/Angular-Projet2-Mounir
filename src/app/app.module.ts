import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListeBiensComponent } from './components/liste-biens/liste-biens.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeBiensComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
