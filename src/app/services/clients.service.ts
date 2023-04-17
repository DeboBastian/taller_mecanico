import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private baseUrl: string;
  constructor(
    private httpClient: HttpClient

  ) { 
    this.baseUrl = 'http://localhost:3000/api/clients'
  }


  registerNewClient(body: any) {
    return firstValueFrom(
      this.httpClient.post<any>(this.baseUrl, body)
    )
  }
}