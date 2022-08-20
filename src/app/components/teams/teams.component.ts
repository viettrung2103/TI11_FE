import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs';
import { TeamApiService } from 'src/app/services/team-api.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private teamApiService: TeamApiService
  ) {}

  ngOnInit(): void {}
}
