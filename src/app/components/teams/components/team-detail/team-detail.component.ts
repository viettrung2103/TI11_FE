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
  mode: 'EDIT' | 'LOCKED' = 'LOCKED'; //DEFAULT IS LOCKED
  buttonText: 'SAVE CHANGES' | 'EDIT' = 'EDIT'; //DEFAULT IS EDIT
  // public mode: editMode;

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

  changeMode(mode?: 'EDIT' | 'LOCKED'): void {
    // if the mode is locked, click the     button to change the mode to edit
    if (this.mode === 'LOCKED') {
      console.log('Pressing button');
      this.mode = 'EDIT';
      this.changeButtonText(this.buttonText);
      console.log(`this is mode: ${this.mode}`);
    } else {
      console.log('Pressing button');
      this.mode = 'LOCKED';
      this.changeButtonText(this.buttonText);
      console.log(`This is mode: ${this.mode}`);
    }
  }
  changeButtonText(buttonText?: 'EDIT' | 'SAVE CHANGES'): void {
    this.buttonText = this.buttonText === 'EDIT' ? 'SAVE CHANGES' : 'EDIT';
    //Logic to update the user on the back end
  }
}
