import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Job } from '../job';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { JobService } from '../job.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-job-form-redux',
  templateUrl: './job-form-redux.component.html',
  styleUrls: ['./job-form-redux.component.scss']
})
export class JobFormReduxComponent {

  SERVER_URL = "http://localhost:3000/jobs";

  jobs: Job[] = [];

  constructor(private jobService: JobService, private messageService: MessageService, private jobFormBuilder: FormBuilder ) { }


// start adding code from previous job form component so I can keep the template
// UPDATE: didn't work, so I am hiding this again

  // clients = ['Transperfect', 'Life in Translation',
  //           'Channel Crossings', 'Travod', 'Wordminds'];

  // model = new Job(9999, 'US1203456', this.clients[0], 'test job');

   submitted = false;

  // newJob() {
  //   this.model = new Job(42, '', '');
  // }

  // onSubmit() { this.submitted = true; } -- ADDED BELOW

// end adding code from previous job form component

  jobNewForm = new FormGroup({
    jobcode: new FormControl(''),
    client: new FormControl('',Validators.required),
    comment: new FormControl(''),
    money: new FormGroup({
      currency: new FormControl(''),
      originalValue: new FormControl(''),
      resultingValue: new FormControl(''),
      confirmed: new FormControl('')
    })
  });

  // add(job: Job): void {
  //   job = job.trim();
  //   if (!jobcode) { return; }
  //   this.jobService.addJob({ jobcode } as Job)
  //     .subscribe(job => {
  //       this.jobs.push(job);
  //     });
  // }

@Output() EM = new EventEmitter<Job>();
onSubmit() {
    if (this.jobNewForm.valid) {
    this.EM.emit(this.jobNewForm.value);
  }
  console.log(this.jobNewForm.value);
    this.submitted = true;
}

  updateFormFields() {
    this.jobNewForm.patchValue({
      jobcode: 'Simulated Update',
      money: {
        currency: 'CZK'
      }
    });
  }

}
