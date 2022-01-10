import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Job } from '../job';

@Component({
  selector: 'app-job-form-redux',
  templateUrl: './job-form-redux.component.html',
  styleUrls: ['./job-form-redux.component.scss']
})
export class JobFormReduxComponent {
  
// start adding code from previous job form component so I can keep the template

  clients = ['Transperfect', 'Life in Translation',
            'Channel Crossings', 'Travod', 'Wordminds'];

  model = new Job(9999, 'US1203456', this.clients[0], 'test job');

  submitted = false;

  newJob() {
    this.model = new Job(42, '', '');
  }

  onSubmit() { this.submitted = true; }

// end adding code from previous job form component

  jobNewForm = new FormGroup({
    id: new FormControl(''),
    jobcode: new FormControl(''),
    client: new FormControl(''),
    comment: new FormControl(''),
  });
}
