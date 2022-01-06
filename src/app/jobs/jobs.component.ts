import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import { JOBS } from '../mock-jobs';
import { JobService } from '../job.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  
  selectedJob?: Job;

  jobs: Job[] = [];

  constructor(private jobService: JobService, private messageService: MessageService ) { }

  ngOnInit(): void {
    this.getJobs(); 
  }

  onSelect(job: Job): void {
    this.selectedJob = job;
    this.messageService.add(`JobsComponent: Selected job id=${job.jobcode}`);
  }

  getJobs(): void {
    this.jobService.getJobs().subscribe(jobs => this.jobs = jobs);
  }


}
