import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionManagementService } from '../../services/session-management.service';

@Component({
  selector: 'app-user-stories-list',
  templateUrl: './user-stories-list.component.html',
  styleUrls: ['./user-stories-list.component.scss']
})
export class UserStoriesListComponent implements OnInit {

  constructor(
    private sessionService: SessionManagementService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  notFoundImg = "./assets/not-found.jpg"
  userStoreis: any = [];
  id: any;
  isViewVotes: boolean = false;
  viewVotesList: any = [];
  selectedStoryIndex: any;

  ngOnInit(): void {
    console.log(this.route.snapshot.params)
    this.id = this.route.snapshot.params['id']
    this.getUserStories(this.id);
  }
  getUserStories(index: any) {
    this.userStoreis = this.sessionService.getUserStories(index);
    console.log('userStoreisuserStoreisuserStoreisuserStoreis')
  }
  destroy(storyIndex: any, story: any) {
    if (!story.isstarted || story.isstoped) {
      this.sessionService.deleteUserStory(this.id, storyIndex);
    } else {
      if (story.isApproveVote) {
        this.sessionService.deleteUserStory(this.id, storyIndex);
      } else {
        alert('You cant delete as story in active')

      }
      alert('You cant delete as story in active')
    }
  }
  gotoCreateUserStory() {
    this.router.navigate(['/sesionManagement/userStorieCreation', this.id])
  }
  start(index: any) {
    this.sessionService.updateUserStory(this.id, index);
    //this.userStoreis = this.sessionService.getUserStories(index);

  }
  Addvote(index: any) {
    this.sessionService.updateVoteCount(this.id, index);

  }
  viewBVotes(data: any, storyIndex: any) {
    this.isViewVotes = true
    this.viewVotesList = data;
    this.selectedStoryIndex = storyIndex;
  }
  approveHours(vote: any) {
    this.sessionService.approvedHours(this.id, this.selectedStoryIndex, vote.key, vote.value);
    this.isViewVotes = false;
  }
}
