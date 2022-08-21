/* eslint-disable prettier/prettier */
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup,Validator, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegionType, Team } from 'src/app/models/interfaces/team.interface';
import { TeamApiService } from 'src/app/services/team-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css'],
})
export class CreateTeamComponent implements OnInit {

  teamForm : FormGroup;
  team: Team | undefined;
  regions: string[] = Object.keys(RegionType);


  constructor(private formBuilder:FormBuilder) {}

  ngOnInit(): void {
    // initilize our form
    this.teamForm = this.formBuilder.group({
      teamName:['',Validators.required],
      tag:['',Validators.required],
      region:['',Validators.required],
      wins:['',Validators.required],
      losses:['',Validators.required],
      imageUrl:['',Validators.required]
    })
  }

  onSubmit() {
    //use EventEmitter with form value
    console.warn(this.teamForm.value);
  }

}
