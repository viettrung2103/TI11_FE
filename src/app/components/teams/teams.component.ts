import { Component, OnInit } from '@angular/core';
import { ApiResponse } from 'src/app/models/api-response.model';
import { Iteam } from 'src/app/models/iteam.model';
import { TeamApiService } from 'src/app/services/team-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  // public getAllTeams() {
  //   this.teamApiService.getTeams().subscribe({
  //     next: (apiResponse: ApiResponse) => (this.teamList = apiResponse.data),
  //     error: (err: Error) => {
  //       console.log(err);
  //       Swal.fire('Problem loading teams');
  //     },
  //   });
  // }
}
