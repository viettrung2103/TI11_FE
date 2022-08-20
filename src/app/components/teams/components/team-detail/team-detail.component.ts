import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RegionType, Team } from 'src/app/models/interfaces/team.interface';
import { TeamApiService } from 'src/app/services/team-api.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css'],
})
export class TeamDetailComponent implements OnInit {
  public team: Team | undefined;
  public regions: string[] = Object.keys(RegionType);

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
        .subscribe((result: any) => {
          const teamDetailData = result.data[0]; //in our API the data[0] contains this team Detail
          console.log(result);
          this.team = teamDetailData; // by assign our team to the result API, we can then interpolate the data to our view or HTML
        });
    });
  }
}
