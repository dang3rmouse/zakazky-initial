import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import { JobService } from '../job.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  jobs: Job[] = [];

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
  }

  getJobs(): void {
    this.jobService.getJobs().subscribe(jobs => this.jobs = jobs.slice(1,5));
  }

}