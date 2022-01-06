import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import { JOBS } from '../mock-jobs';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  job: Job = {
    id: 1,
    client: 'Test',
    jobcode: 'lorem ipsum'
  }
  
// job = JOBS;

  constructor() { }

  ngOnInit(): void {
  }

}
