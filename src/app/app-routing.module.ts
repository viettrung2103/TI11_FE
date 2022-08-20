import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { LivestreamsComponent } from './components/livestreams/livestreams.component';
import { MatchesComponent } from './components/matches/matches.component';
import { StandingsComponent } from './components/standings/standings.component';
import { CreateTeamComponent } from './components/teams/components/create-team/create-team.component';
import { TeamDetailComponent } from './components/teams/components/team-detail/team-detail.component';
import { TeamListComponent } from './components/teams/components/team-list/team-list.component';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [
  { path: 'frontpage', component: FrontpageComponent },
  { path: 'livestreams', component: LivestreamsComponent },
  { path: 'matches', component: MatchesComponent },
  {
    path: 'teams',
    component: TeamsComponent,
    children: [
      { path: 'create-team', component: CreateTeamComponent },
      { path: 'teams-list', component: TeamListComponent },
      { path: ':teamId', component: TeamDetailComponent },
    ],
  },
  { path: 'standings', component: StandingsComponent },
  { path: '', redirectTo: '/frontpage', pathMatch: 'full' }, // default page if visit wrong address
  { path: '**', component: FrontpageComponent, pathMatch: 'full' }, //if there is no address, redirect to frontpage
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
