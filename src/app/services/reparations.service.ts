import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReparationsService {

  private baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) { 
    this.baseUrl = 'http://localhost:3000/api/reparations'
  }


  createReparation(body: any) {
    return firstValueFrom(
      this.httpClient.post<any>(this.baseUrl, body)
    )
  }

}