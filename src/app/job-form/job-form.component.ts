import { Component } from '@angular/core';
import { Job } from '../job';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent {

  clients = ['Transperfect', 'Life in Translation',
            'Channel Crossings', 'Travod', 'Wordminds'];

  model = new Job(9999, 'US1203456', this.clients[0], 'test job');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newJob() {
    this.model = new Job(42, '', '');
  }

}