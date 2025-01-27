import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AddBook } from '../interface/addBook';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddbookService {


  private apiUrl = 'http://localhost:3000/books';

  constructor(private http: HttpClient) { }

  addBook(data:AddBook){
    return this.http.post('http://localhost:3000/books',data).subscribe(responseData =>{
    //console.log(responseData)
  })
  }

getBookDetails(): Observable<any> {
  return this.http.get('http://localhost:3000/books');
}

viewBook(){
  return this.http.get<AddBook>(this.apiUrl)
}

deleteBookDetails(id:number): Observable<any>{
  return this.http.delete(`http://localhost:3000/books/${id}`);
}


}
