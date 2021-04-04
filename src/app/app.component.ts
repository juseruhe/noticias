import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noticias';

  constructor(private noticiaService: NoticiaService){

  }


  buscarNoticias(parametros: any){

    console.log("SOY PADRE")
    console.log(parametros)

    this.noticiaService.getNoticias(parametros).subscribe(data => {

      console.log(data)
    });
  }
}
