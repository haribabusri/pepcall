import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SessionManagementService } from '../services/session-management.service';

@Component({
  selector: 'app-session-listing',
  templateUrl: './session-listing.component.html',
  styleUrls: ['./session-listing.component.scss']
})
export class SessionListingComponent implements OnInit {

  constructor(private sessionService: SessionManagementService, private router: Router) { }
  notFoundImg = "./assets/not-found.jpg"
  sessions: any = [];
  ngOnInit(): void {
    this.sessionService.setDefaultSessions();
    this.getSessions();
  }
  getSessions() {
    this.sessions = this.sessionService.getSessions();
  }
  destroy(index: any) {
    if (this.sessionService.isSessionCanDelete(index)) {
      this.sessionService.deleteSession(index)

    }
  }
  getLink(index: any, item: any) {
    let url = "/link/" + item.title + "/" + Math.random();
    console.log(url);
    this.sessionService.addLink(index, url)

  }
  goToSession(id: any) {
    this.router.navigate(['/sesionManagement/open-session', id])
  }
  goToUserStories(id: any) {
    console.log('ididid');
    console.log(id)
    this.router.navigate(['/sesionManagement/userStories', id])
  }

}
