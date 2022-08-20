import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Team } from '../models/team-class.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response.model';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class TeamApiService {
  private apiUrl: string = environment.apiUrl;
  private teamsEndpoint: string = '/teams';
  private teamIdEndpoint: string = '/:teamId';

  private createTeamEndpoint: string = '/create';
  private deleteTeamEndpoint: string = '/delete';

  constructor(private httpClient: HttpClient) {}

  // create(team: Team): Observable<ApiResponse> {
  //   return this.httpClient.post<ApiResponse>(
  //     this.apiUrl + this.teamsEndpoint + this.createTeamEndpoint,
  //     team
  //   );
  // }
  //fetch teams list
  getTeams(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(this.apiUrl + this.teamsEndpoint);
  }
}
//   getTeamsById(teamId:string): Observable<ApiResponse
// }
