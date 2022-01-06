import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../job';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {

  @Input() job?: Job;

  constructor() { }

  ngOnInit(): void {
  }

}
