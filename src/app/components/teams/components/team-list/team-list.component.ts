import { Component, OnInit } from '@angular/core';
import { ApiResponse } from 'src/app/models/api-response.model';
import { Team } from 'src/app/models/team-class.model';
import { TeamApiService } from 'src/app/services/team-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
})
export class TeamListComponent implements OnInit {
  constructor(private teamApiService: TeamApiService) {}

  ngOnInit(): void {
    this.getTeamsList();
  }

  private getTeamsList() {
    this.teamApiService.getTeams().subscribe((result: any) => {
      console.log(result);
    });
  }
  //   this.teamApiService.getTeams().subscribe({
  //     next: (apiResponse: ApiResponse) => {
  //       this.teamsList = apiResponse.data;
  //       console.log(this.teamsList);
  //     },
  //     error: (err: Error) => {
  //       console.log(err);
  //       Swal.fire('Problem loading teams list');
  //     },
  //   });
  // }
}
