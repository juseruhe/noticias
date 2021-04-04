import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noticias';


  buscarNoticias(parametros: any){

    console.log("SOY PADRE")
    console.log(parametros)
  }
}
