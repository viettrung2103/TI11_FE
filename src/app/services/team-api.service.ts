import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Team } from '../models/team-class.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class TeamApiService {
  private apiUrl = environment.apiUrl;
  teamsEndpoint = '/teams';

  constructor(private httpClient: HttpClient) {}

  create(team: Team): Promise<Response> {
    return fetch(this.apiUrl + this.teamsEndpoint, {
      headers: {
        // eslint-disable-next-line prettier/prettier
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(team),
    });
  }
  // this.httpClient.post<ApiResponse>(this.apiUrl + this.createUserEndpoint, user)
}

//   getAll(): Promise<Response> {
//     return;
//     // fetch(
//     //   this.baseUrl + this.teamsEndpoint,
//     //   {
//     //     method: 'GET',
//     //     headers: {
//     //       'Accept': 'application/json',
//     //       'Content-Type': 'application/json'
//     //     }
//     //   }
//     // )
