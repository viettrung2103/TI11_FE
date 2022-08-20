import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/api-response.model';
import { RegionType, Team } from 'src/app/models/team-class.model';
import { TeamApiService } from 'src/app/services/team-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css'],
})
export class CreateTeamComponent implements OnInit {
  regionTypes: string[] = Object.keys(RegionType);

  constructor(public router: Router) {}

  ngOnInit(): void {}

  // onSubmit(formData: NgForm) {
  //   this.teamApiService.create(formData.value as Team).subscribe({
  //     // like .then and .catch in promise
  //     next: (apiResponse: ApiResponse) => {
  //       //show message
  //       Swal.fire({
  //         icon: 'success',
  //         text: apiResponse.message,
  //       });
  //       //redirect to some linkn
  //       if (apiResponse.statusCode === 201) {
  //         //the navigateByUrl is promise, so need either .then or .catch
  //         // without .catch, or .then, it will show problem
  //         // since there is no action after so it is no use to use .then
  //         // can use .catch to catch error, add this step to complete this code ( in case sth is fail)
  //         // Moreover, we can add void like below, meaning we dont expect anything in return, just want the redirect
  //         // void this.router.navigateByUrl('/login').catch(console.log);
  //         void this.router.navigateByUrl('/teams/team-list').catch(console.log);
  //         this.router.navigateByUrl('/teams/team-list').catch(console.log);
  //         return;
  //       }
  //       ///show message about problem
  //     },
  //     error: (err: HttpErrorResponse) => {
  //       Swal.fire({
  //         icon: 'error',
  //         text: err.error.message,
  //       });
  //     },
  //   });
  // }
}
