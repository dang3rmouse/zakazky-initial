import { Injectable } from '@angular/core';
import { Job } from './job';
import { JOBS } from './mock-jobs';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  getJobs(): Observable<Job[]> {
    const jobs = of(JOBS);
    this.messageService.add('JobService: fetched jobs')
    return jobs; 
  }

  getJob(id: number): Observable<Job> {
    const job = JOBS.find(h => h.id === id)!;
    this.messageService.add(`JobService: fetched job id=${id}`);
    return of(job);
  }

  constructor(private messageService: MessageService ) { }
}
