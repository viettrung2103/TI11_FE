/* eslint-disable prettier/prettier */
import { Component, OnInit } from '@angular/core';
import { TeamApiService } from 'src/app/services/team-api.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
})
export class TeamListComponent implements OnInit {
  constructor(private teamApiService: TeamApiService) {}

  ngOnInit(): void {
    this.getTeams();
  }

  private getTeams() {
    this.teamApiService.getTeams().subscribe( // this subscribe is a callback(result,err)
      (results:any) => {
        console.log(results);
      }
    )
  }
}

