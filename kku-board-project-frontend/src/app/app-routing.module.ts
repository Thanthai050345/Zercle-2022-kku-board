import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubHomePageComponent } from './pages/club-home-page/club-home-page.component';
import { EventClubPageComponent } from './pages/event-club-page/event-club-page.component';
import { EventUserPageComponent } from './pages/event-user-page/event-user-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'sign-up', component: SignUpPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'club-home', component: ClubHomePageComponent },
  { path: 'event', component: EventUserPageComponent },
  { path: 'club-event', component: EventClubPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
