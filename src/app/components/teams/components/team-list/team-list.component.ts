/* eslint-disable prettier/prettier */
import { Component, OnInit } from '@angular/core';
import { ApiResponse } from 'src/app/models/interfaces/api-response.interface';
import { Team } from 'src/app/models/interfaces/team.interface';
import { TeamApiService } from 'src/app/services/team-api.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
})
export class TeamListComponent implements OnInit {

  teams: Team[] = [];

  constructor(private teamApiService: TeamApiService) {}

  ngOnInit(): void {
    this.getTeams();
  }

  private getTeams() {
    this.teamApiService.getTeams().subscribe( // this subscribe is a callback(result,err)
      (results:any) => {
        console.log(results);
        this.teams = results.data; // data is array of teams
      }
    )
  }
}

