import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AddArticleService {

  constructor(private http: HttpClient) { }

  getArticle(){
    return this.http.get('http://localhost:3000/api/Articles')
      .map((res :any) => res)
  }

  addArticle(newArticle){
    let headers= new HttpHeaders();
    headers.append('Content-Type','application/json')
    return this.http.post('http://localhost:3000/api/addArticle',newArticle,{headers:headers})
      .map((res :any) => res)
  }

  deleteArticle(Id){
    return this.http.delete('http://localhost:3000/api/addArticle'+Id)
      .map((res :any) => res.json())
  }
}
