import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:3000/loginCredentialList';

  constructor(private http: HttpClient) { }

  checkLogin(): any{
    return this.http.get('http://localhost:3000/loginCredentialList');
  }


}
