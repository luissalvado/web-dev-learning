import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { TestComponent } from './teste/teste.component';
import { DiretivaSwitchComponent } from './diretiva-switch/diretiva-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    TestComponent,
    DiretivaSwitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
