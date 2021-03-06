import { Injectable } from '@angular/core';
import { Job } from './job';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  // getJobs(): Observable<Job[]> {
  //   const jobs = of(JOBS);
  //   this.messageService.add('JobService: fetched jobs')
  //   return jobs; 
  // }

/** GET jobs from the server */
getJobs(): Observable<Job[]> {
  return this.http.get<Job[]>(this.jobsUrl).pipe(tap(_ => this.log('fetched jobs')),
    catchError(this.handleError<Job[]>('getJobs', []))
  );
}

  /** GET job by id. Will 404 if id not found */
  getJob(id: number): Observable<Job> {
  const url = `${this.jobsUrl}/${id}`;
  return this.http.get<Job>(url).pipe(
    tap(_ => this.log(`fetched job id=${id}`)),
    catchError(this.handleError<Job>(`getJob id=${id}`))
  );
}

  constructor(private http: HttpClient, private messageService: MessageService ) { }

  /** Log a JobService message with the MessageService */
private log(message: string) {
  this.messageService.add(`JobService: ${message}`);
}

// data api 
private jobsUrl = 'http://localhost:3000/jobs-data';  // URL to web api

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
 private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

/** PUT: update the hero on the server */
updateJob(job: Job): Observable<any> {
  return this.http.put(this.jobsUrl, job, this.httpOptions).pipe(
    tap(_ => this.log(`updated job id=${job.id}`)),
    catchError(this.handleError<any>('updateJob'))
  );
}

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

/** POST: add a new hero to the server */
addJob(job: Job): Observable<Job> {
  return this.http.post<Job>(this.jobsUrl, job, this.httpOptions).pipe(
    tap((newJob: Job) => this.log(`added job w/ id=${newJob.id}`)),
    catchError(this.handleError<Job>('addJob'))
  );
}

/** DELETE: delete the hero from the server */
deleteJob(id: number): Observable<Job> {
  const url = `${this.jobsUrl}/${id}`;

  return this.http.delete<Job>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted job id=${id}`)),
    catchError(this.handleError<Job>('deleteJob'))
  );
}

/* GET jobs whose job code contains search term */
searchJobs(term: string): Observable<Job[]> {
  if (!term.trim()) {
    // if not search term, return empty job array.
    return of([]);
  }
  return this.http.get<Job[]>(`${this.jobsUrl}/?jobcode=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found jobs matching "${term}"`) :
       this.log(`no jobs matching "${term}"`)),
    catchError(this.handleError<Job[]>('searchJobs', []))
  );
}

}

