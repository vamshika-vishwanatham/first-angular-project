import {NgModule} from "@angular/core";
import {AppRoutingModule} from "./app-routing.module";
import {DashBoardComponent} from "./dash-board/dash-board.component";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UserDetailsServiceService} from "./user-details-service.service";
import {RegistrationService} from "./registration.service";
import {ProfileIdComponent} from './profile-id/profile-id.component';
import {FriendsComponent} from './friends/friends.component';
import {MessengerComponent} from './messenger/messenger.component';
import {EventsComponent} from './events/events.component';
import {FriendsListComponent} from './friends-list/friends-list.component';
import {GamesComponent} from './games/games.component';
import {JobsComponent} from './jobs/jobs.component';
import {MemoriesComponent} from './memories/memories.component';
import {AddsComponent} from './adds/adds.component';
import {LeftIndexComponent} from './left-index/left-index.component';
import {HomePageComponent} from './home-page/home-page.component';
import {LoginComponent} from "./login/login.component";
import {CreateAccountComponent} from "./create-account/create-account.component";
import {NewsFeedComponent} from './news-feed/news-feed.component';
import {ContactsComponent} from './contacts/contacts.component';
import {GenericDropDownComponent} from './generic-drop-down/generic-drop-down.component';
import {ModelBoxComponent} from './model-box/model-box.component';
import {CreatePostComponent} from './create-post/create-post.component';
import {CreateStoryComponent} from './create-story/create-story.component';
import {CreateLifeEventComponent} from './create-life-event/create-life-event.component';
import {CreatePageComponent} from './create-page/create-page.component';
import {CreateAdComponent} from './create-ad/create-ad.component';
import {CreateGroupComponent} from './create-group/create-group.component';
import {CreateEventComponent} from './create-event/create-event.component';
import {CreateFundraiserComponent} from './create-fundraiser/create-fundraiser.component';
import {VideoComponent} from './video/video.component';
import {GroupComponent} from './group/group.component';
import {WeatherComponent} from './weather/weather.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {TooltipModule} from "ng2-tooltip-directive";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    LoginComponent,
    CreateAccountComponent,
    AppComponent,
    DashBoardComponent,
    ProfileIdComponent,
    FriendsComponent,
    MessengerComponent,
    EventsComponent,
    FriendsListComponent,
    GamesComponent,
    JobsComponent,
    MemoriesComponent,
    AddsComponent,
    LeftIndexComponent,
    HomePageComponent,
    NewsFeedComponent,
    ContactsComponent,
    GenericDropDownComponent,
    ModelBoxComponent,
    CreatePostComponent,
    CreateStoryComponent,
    CreateLifeEventComponent,
    CreatePageComponent,
    CreateAdComponent,
    CreateGroupComponent,
    CreateEventComponent,
    CreateFundraiserComponent,
    VideoComponent,
    GroupComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule,
    TooltipModule,
    NgbModule
  ],
  providers: [  RegistrationService,UserDetailsServiceService],
  bootstrap: [AppComponent],
  exports: [MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule]
})
export class AppModule { }
