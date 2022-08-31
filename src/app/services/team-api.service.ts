/* eslint-disable prettier/prettier */
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';
import { ApiResponse } from '../models/interfaces/api-response.interface';
import { Team } from '../models/interfaces/team.interface';
@Injectable({
  providedIn: 'root',
})
export class TeamApiService {
  private apiUrl: string = environment.apiUrl;
  private teamsEndpoint: string = '/teams';

  constructor(private httpClient: HttpClient) {}

  //fetch teams list
  public getTeams(): Observable<any> {
    return this.httpClient
      .get<ApiResponse>(this.apiUrl + this.teamsEndpoint)
      .pipe(map((response: ApiResponse) => this.processResponse(response)));
  }
//pipe and map will filter and manipulate data from API in our service before inject the service to our component
  public getTeamById(teamId: number = 1): Observable<any> {
    return this.httpClient.get<ApiResponse>(
      `${this.apiUrl + this.teamsEndpoint}/${teamId}`
    )
    .pipe(map((response: ApiResponse) => this.processResponse(response)));
    ;
  }

  //the process response handle and manipulate our API data and retrieve the data we need, not all data from API
  private processResponse(apiResponse: ApiResponse): ApiResponse {
    return {
      info: { ...apiResponse.info }, // spread operator to copy the info object from original api response to this process response
      // we map the information of the team from team Api to our Team interface by casting this with User interface, so forcing the data from team API to be team interface
      data: apiResponse.data.map(
        (team: any) => (<Team>{
            teamId: team.teamId,
            teamName: team.teamName,
            tag: team.tag,
            region: team.region,
            wins: team.wins,
            losses: team.losses,
            imageUrl: team.imageUrl,
            createAt: team.createAt,
            lastMatchAt: team.lastMatchAt,
          }))
        };
      }
    }
