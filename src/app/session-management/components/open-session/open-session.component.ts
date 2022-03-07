import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionManagementService } from '../../services/session-management.service';

@Component({
  selector: 'app-open-session',
  templateUrl: './open-session.component.html',
  styleUrls: ['./open-session.component.scss']
})
export class OpenSessionComponent implements OnInit {
  sessionForm: FormGroup;
  isJoined = false;
  user: any;
  id: any;
  sessionInfo:any;
  storyPoints: any;
  constructor(
    private formBuilder: FormBuilder,
    private sessionService: SessionManagementService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.sessionForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),

    });
    this.id = this.route.snapshot.params['id']

  }

  ngOnInit(): void {

  }
  joinSession() {
    this.isJoined = true;
    console.log(this.sessionForm.value)
    this.user = this.sessionForm.value;
    this.sessionService.addUserToSession(this.sessionForm.value,this.id);
    this.sessionInfo = this.sessionService.getSession(this.id);
    console.log(this.sessionInfo)
  }
  onChange(userStoryIndex:any){
    console.log('anyyy');
  //addUserToPoints(username: any, sesionIndex: any, storyIndex: any, points: any) {
    this.sessionService.addUserToPoints(this.user.name, this.id,userStoryIndex,this.storyPoints );
    alert('Vote captured')
  }
}
