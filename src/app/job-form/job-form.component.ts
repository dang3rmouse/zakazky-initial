import { Component } from '@angular/core';
import { Job } from '../job';
// import { JobService } from '../job.service';
// import { MessageService } from '../message.service';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss'],
})

export class JobFormComponent {

  clients = ['Transperfect', 'Life in Translation',
            'Channel Crossings', 'Travod', 'Wordminds'];

  model = new Job(9999, 'US1203456', this.clients[0], 'test job');

  submitted = false;

  newJob() {
    this.model = new Job(42, '', '');
  }

  onSubmit() { this.submitted = true; }

}