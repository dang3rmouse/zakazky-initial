import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../job';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { JobService } from '../job.service';


@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {

  @Input() job?: Job;

  constructor(  
    private route: ActivatedRoute,
    private jobService: JobService,
    private location: Location) { }

  ngOnInit(): void {
    this.getJob();
  }

  getJob(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.jobService.getJob(id)
      .subscribe(job => this.job = job);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.job) {
      this.jobService.updateJob(this.job)
        .subscribe(() => this.goBack());
    }
  }

}
