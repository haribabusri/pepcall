import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionManagementService } from '../../services/session-management.service';

@Component({
  selector: 'app-user-stories-creation',
  templateUrl: './user-stories-creation.component.html',
  styleUrls: ['./user-stories-creation.component.scss']
})
export class UserStoriesCreationComponent implements OnInit {

  userStoryForm: FormGroup;
  id:any;
  constructor(private formBuilder: FormBuilder, 
    private sessionService:SessionManagementService,
    private router:Router,
    private route: ActivatedRoute

    
    ) { 
    this.id = this.route.snapshot.params['id']

    this.userStoryForm = this.formBuilder.group({
      id: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required)

    })
  }

  ngOnInit(): void {
  }
  submitSession(){
    console.log(this.userStoryForm.value)
    this.sessionService.addUserStory(this.id,this.userStoryForm.value);
    this.router.navigate(['/sesionManagement/userStories',this.id])
  }

}
