/* eslint-disable prettier/prettier */
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamApiService } from 'src/app/services/team-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css'],
})
export class CreateTeamComponent implements OnInit {
  // team: Team = new Team('', '', RegionType.DEFAULT, [], 0, 0);

  // regionTypes: string[] = Object.keys(RegionType);

  constructor() {}

  ngOnInit(): void {}

  // onSubmit(formData: NgForm) {
  //   this.teamApiService
  //     .create(formData.value as Team)
  //     .then(async response => {
  //       const createdTeam = await response.json();
  //       alert(createdTeam.name + ' was created successfully');
  //       this.router.navigate(['/teams-list']).catch(console.log);
  //     })
  //     .catch(error => {
  //       alert('Problem while creating product');
  //       console.log(error);
  //     });
  // }
  //   this.teamApiService.create(formData.value as Team).subscribe({
  //     next: (apiResponse: ApiResponse) => {
  //       Swal.fire({
  //         icon: 'success',
  //         text: apiResponse.message,
  //       });
  //       if (apiResponse.statusCode === 201) {
  //         // can also write void this.router.navigateByUrl('/login');
  //         // or this.router.navigateByUrl('/login').catch(console.log);
  //         this.router.navigateByUrl('/login');
  //       }
  //     },
  //     error: (err: HttpErrorResponse) => {
  //       Swal.fire({
  //         icon: 'error',
  //         text: err.error.message,
  //       });
  //     },
  //   });
  // }
  //     next: (apiResponse:ApiResponse) =>{
  //       const createdTeam = await.response.json();
  //       alert(`team ${createdTeam..teamName} is created successfully`);
  //       if (apiResponse === 201) {
  //         this.router.navigateByUrl(['/teams-list']);
  //       }
  //     },
  //     error: (err:HttpErrorResponse => {
  //       alert ("Problem while creating Team"):
  //       console.log(err.error.message);
  //     },)
  //   })
  // }
}
