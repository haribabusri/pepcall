import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionManagementService } from '../../services/session-management.service';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent implements OnInit {
  sessionForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private sessionService:SessionManagementService,
    private router:Router
    ) { 
    this.sessionForm = this.formBuilder.group({
      title: new FormControl('',Validators.required),
      decType: new FormControl('',Validators.required)

    })
  }

  ngOnInit(): void {
  }
  submitSession(){
    console.log(this.sessionForm.value)
    this.sessionService.createSession(this.sessionForm.value);
    this.router.navigate(['/sesionManagement/sessions'])
  }

}
