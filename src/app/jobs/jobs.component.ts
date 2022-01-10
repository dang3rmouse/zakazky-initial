import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import { JobService } from '../job.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  
  // selectedJob?: Job;  
  // removed when separate route created 

  jobs: Job[] = [];

  constructor(private jobService: JobService, private messageService: MessageService ) { }

  ngOnInit(): void {
    this.getJobs(); 
  }

  // onSelect(job: Job): void {
  //   this.selectedJob = job;
  //   this.messageService.add(`JobsComponent: Selected job id=${job.jobcode}`);
  // }
    // removed when separate route created

  getJobs(): void {
    this.jobService.getJobs().subscribe(jobs => this.jobs = jobs);
  }

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
