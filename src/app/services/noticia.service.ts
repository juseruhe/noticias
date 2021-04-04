import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros: any): Observable<any>{
const URL = "https://newsapi.org/v2/top-headlines?country="+parametros.pais+"&category="+parametros.categoria+"&apiKey=56c08c86a6d34232a51ac130ed71bb0e"

return this.http.get(URL)
  }
}
