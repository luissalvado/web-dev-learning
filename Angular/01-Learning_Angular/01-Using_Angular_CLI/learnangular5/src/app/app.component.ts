import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
  query: string;

  constructor(){
    this.query = 'Barot';
  }
}
