import { Component } from '@angular/core';
import { Job } from '../job';
<<<<<<< HEAD
import { JobsComponent } from '../jobs/jobs.component';
=======
import { JobService } from '../job.service';
import { MessageService } from '../message.service';
>>>>>>> 19ad13980f8141b3e069e138d48ce81c66bd401e

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

  jobs: Job[] = [];

  constructor(private jobService: JobService, private messageService: MessageService ) { }

  add(jobcode: string): void {
    jobcode = jobcode.trim();
    if (!jobcode) { return; }
    this.jobService.addJob({ jobcode } as Job)
      .subscribe(job => {
        this.jobs.push(job);
      });
  }

  delete(job: Job): void {
    this.jobs = this.jobs.filter(h => h !== job);
    this.jobService.deleteJob(job.id).subscribe();
  }

}