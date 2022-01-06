import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import { JOBS } from '../mock-jobs';
import { JobService } from '../job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  // job: Job = {
  //   id: 1,
  //   client: 'Test',
  //   jobcode: 'lorem ipsum'
  // }
  
  selectedJob?: Job;
  onSelect(job: Job): void {
    this.selectedJob = job;
  }

  getJobs(): void {
    this.jobs = this.jobService.getJobs();
  }

jobs: Job[] = [];

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.getJobs();
    
  }

}
