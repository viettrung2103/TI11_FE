/* eslint-disable prettier/prettier */
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Team } from '../models/team-class.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';
import { Iteam } from '../models/iteam.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class TeamApiService {
  private apiUrl: string = environment.apiUrl;
  private teamsEndpoint:string = '/teams';

  constructor(private httpClient: HttpClient) {}

  //fetch teams list
  getTeams(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + this.teamsEndpoint);
  }

  getTeamById(teamId: number = 1): Observable<any> {
    return this.httpClient.get<any>(
      `${this.apiUrl + this.teamsEndpoint}/${teamId}`
    );
  }

  // private processTeamResponse (teamResponse: TeamResponse): Response {
  //   const result: any[] = [];
  //   return {

  //     result = teamResponse.map((team:any) => (<Iteam>{
  //       teamId: team.teamId,
  //       teamName: team.teamName,
  //       tag: team.tag,
  //       region: team.region,
  //       wins: team.wins,
  //       losses: team.losses,
  //       imageUrl?: team.imageUrl,
  //       createAt: team.createAt,
  //       lastMatchTime: team.lastMatchTime

  //  }))
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
