import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionManagementRoutingModule } from './session-management-routing.module';
import { SessionListingComponent } from './session-listing/session-listing.component';
import { CreateSessionComponent } from './components/create-session/create-session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OpenSessionComponent } from './components/open-session/open-session.component';
import { UserStoriesListComponent } from './components/user-stories-list/user-stories-list.component';
import { UserStoriesCreationComponent } from './components/user-stories-creation/user-stories-creation.component';


@NgModule({
  declarations: [
    SessionListingComponent,
    CreateSessionComponent,
    OpenSessionComponent,
    UserStoriesListComponent,
    UserStoriesCreationComponent
  ],
  imports: [
    CommonModule,
    SessionManagementRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SessionManagementModule { }
