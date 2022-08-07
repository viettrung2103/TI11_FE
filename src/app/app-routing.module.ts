import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { LivestreamsComponent } from './components/livestreams/livestreams.component';
import { MatchesComponent } from './components/matches/matches.component';
import { StandingsComponent } from './components/standings/standings.component';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [
  { path: 'frontpage', component: FrontpageComponent },
  { path: 'livestreams', component: LivestreamsComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'standings', component: StandingsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, //if there is no address, redirect to frontpage
  { path: '**', component: FrontpageComponent, pathMatch: 'full' }, // default page if visit wrong address
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
