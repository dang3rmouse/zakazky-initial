import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Job } from './job';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const jobs = [
      { id: 101, client: 'Channel Crossings', jobcode: '[December Batch]' },
      { id: 102, client: 'Transperfect', jobcode: 'US1190013' },
      { id: 112, client: 'Transperfect', jobcode: 'QGN013654 - PXL - 96820' },
      { id: 103, client: 'Transperfect', jobcode: 'US1191344' },
      { id: 1113, client: 'Transperfect', jobcode: 'US1188707_SWE - 16641' },
      { id: 104, client: 'Transperfect', jobcode: 'SW0039236_0473988'},
      { id: 114, client: 'Transperfect', jobcode: 'US1192399' },
      { id: 105, client: 'Transperfect', jobcode: 'SW0039236_0474173' },
      { id: 106, client: 'Transperfect', jobcode: 'US1187960-369263' },
      { id: 107, client: 'Transperfect', jobcode: 'US1193013' },
      { id: 108, client: 'Transperfect', jobcode: 'US1191431' },
      { id: 109, client: 'Transperfect', jobcode: 'US1188703_SWE-16681' },
      { id: 110, client: 'Life in Translation', jobcode: 'NAT CZ 101074223.sdlppx' },
      { id: 111, client: 'Channel Crossings', jobcode: '[January Batch]' }
    ];
    return {jobs};
  }

  // Overrides the genId method to ensure that a job always has an id.
  // If the jobs array is empty,
  // the method below returns the initial number (11).
  // if the jobs array is not empty, the method below returns the highest
  // job id + 1.
  genId(jobs: Job[]): number {
    return jobs.length > 0 ? Math.max(...jobs.map(job => job.id)) + 1 : 11;
  }
}