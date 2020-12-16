import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddsComponent } from "./adds/adds.component";
import { CreateAccountComponent } from "./create-account/create-account.component";
import { CreateEventComponent } from "./create-event/create-event.component";
import { CreateFundraiserComponent } from "./create-fundraiser/create-fundraiser.component";
import { CreateGroupComponent } from "./create-group/create-group.component";
import { CreatePageComponent } from "./create-page/create-page.component";
import { CreateStoryComponent } from "./create-story/create-story.component";
import { DashBoardComponent } from "./dash-board/dash-board.component";
import { EventsComponent } from "./events/events.component";
import { FriendsListComponent } from "./friends-list/friends-list.component";
import { FriendsComponent } from "./friends/friends.component";
import { GamesComponent } from "./games/games.component";
import { GenericDropDownComponent } from "./generic-drop-down/generic-drop-down.component";
import { GroupComponent } from "./group/group.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { JobsComponent } from "./jobs/jobs.component";
import { LeftIndexComponent } from "./left-index/left-index.component";
import { LoginComponent } from "./login/login.component";
import { MemoriesComponent } from "./memories/memories.component";
import { MessengerComponent } from "./messenger/messenger.component";
import { ProfileIdComponent } from "./profile-id/profile-id.component";
import { VideoComponent } from "./video/video.component";
import { WeatherComponent } from "./weather/weather.component";

const routes: Routes = [
  {
    path: 'login-page',
    component: LoginComponent
  },
  {
    path: '',
    component: DashBoardComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'profile-id',
        component: ProfileIdComponent,
      },
      {
        path: 'friends',
        component: FriendsComponent,
      },
      {
        path: 'messenger',
        component: MessengerComponent,
      },
      {
        path: 'groups',
        component: GroupComponent,
      },
      {
        path: 'videos',
        component: VideoComponent,
      },
      {
        path: 'event',
        component: EventsComponent,
      },
      {
        path: 'friends-list',
        component: FriendsListComponent,
      },
      {
        path: 'jobs',
        component: JobsComponent,
      },
      {
        path: 'games',
        component: GamesComponent,
      },
      {
        path: 'weather',
        component: WeatherComponent,
      },
      {
        path: 'memories',
        component: MemoriesComponent,
      },
      {
        path: 'story',
        component: CreateStoryComponent
      },
      {
        path: 'page',
        component: CreatePageComponent
      },
      {
        path: 'group',
        component: CreateGroupComponent
      },
      {
        path: 'event',
        component: CreateEventComponent
      },
      {
        path: 'fundraiser',
        component: CreateFundraiserComponent,
      },
    ]
  },
  {
    path: 'adds',
    component: AddsComponent,
  },
  {
    path: 'leftIndex',
    component: LeftIndexComponent
  },
  {
    path: 'breadCrumbs',
    component: GenericDropDownComponent
  },
  // {path: 'modelBox', component: ModelBoxComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [LoginComponent, CreateAccountComponent, DashBoardComponent, AddsComponent, LeftIndexComponent];
