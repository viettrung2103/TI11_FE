import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Team } from 'src/app/models/team-class.model';
import { TeamApiService } from 'src/app/services/team-api.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css'],
})
export class TeamDetailComponent implements OnInit {
  private team: Team | undefined;

  constructor(
    private activateRoute: ActivatedRoute,
    private teamApiService: TeamApiService
  ) {}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params: ParamMap) => {
      console.log('teamId', params.get('teamId')!);
      this.teamApiService
        // the params.get('teamId') return a string, 'teamId'
        // a quick convert to number is to add +
        // add ! at the end to enforce that this type is number
        .getTeamById(+params.get('teamId')!)
        .subscribe((response: any) => {
          console.log(response);
        });
    });
  }
}
