import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSessionComponent } from './components/create-session/create-session.component';
import { OpenSessionComponent } from './components/open-session/open-session.component';
import { UserStoriesCreationComponent } from './components/user-stories-creation/user-stories-creation.component';
import { UserStoriesListComponent } from './components/user-stories-list/user-stories-list.component';
import { SessionListingComponent } from './session-listing/session-listing.component';

const routes: Routes = [
  { path: '', redirectTo: 'sessions' },
  { path: 'sessions', component: SessionListingComponent },
  { path: 'create-session', component: CreateSessionComponent },
  { path: 'open-session/:id', component: OpenSessionComponent },
  { path: 'userStories/:id', component: UserStoriesListComponent },
  { path: 'userStorieCreation/:id', component: UserStoriesCreationComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionManagementRoutingModule { }
