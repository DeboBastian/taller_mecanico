<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
=======
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { __values } from 'tslib';

>>>>>>> administrate

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private baseUrl: string;
  constructor(
    private httpClient: HttpClient
<<<<<<< HEAD

  ) { 
    this.baseUrl = 'http://localhost:3000/api/clients'
  }


  registerNewClient(body: any) {
    return firstValueFrom(
      this.httpClient.post<any>(this.baseUrl, body)
    )
  }
}
=======
  ) {
    this.baseUrl = 'http://localhost:3000/api/users'
  }



  getAll() {
    const options = {
      headers: new HttpHeaders({
        'Autorization': localStorage.getItem('token_clients')!
      })
    };

    return firstValueFrom(
      this.httpClient.get<any>(this.baseUrl, options)
    );


  }
  create(values: {
    id: string,
    name: string,
    surname: string,
    dni: string,
    email: string,
    phone: string,
    address: string,
    card_number: string
  }) {

    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token_clients')!
      })
    }

    return firstValueFrom(
      this.httpClient.post(this.baseUrl, __values, options)
    );

  }

}













>>>>>>> administrate
