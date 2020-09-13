import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Leader } from '../shared/leader';
import { ProcessHTTPMsgService } from '../services/process-httpmsg.service';
import { Observable, from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient,
    private processHttpMsgService: ProcessHTTPMsgService) { }

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leaders')
    .pipe(catchError(this.processHttpMsgService.handleError));
}

  getLeader(id: string): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leaders/' + id)
    .pipe(catchError(this.processHttpMsgService.handleError));
  }

  getFeatureLeader(): Observable<Leader>{
    return this.http.get<Leader>(baseURL + 'leaders?featured=true')
      .pipe(map(leaders => leaders[0]))
      .pipe(catchError(this.processHttpMsgService.handleError));
  }
}
