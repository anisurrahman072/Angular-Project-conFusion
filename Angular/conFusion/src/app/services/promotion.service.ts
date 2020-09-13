import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Promotion } from '../shared/promotion';
import { ProcessHTTPMsgService } from '../services/process-httpmsg.service';
import { baseURL } from '../shared/baseurl';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(baseURL + 'promotions')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getPromotion(id: string): Observable<Promotion> {   // "Single Page Applications Part 1" commit a aita use kori nai
    return this.http.get<Promotion>(baseURL + 'promotions/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError))
    // akhane filter() function ta akta array creaate kore felbe, jar first object tai ami chacci, tai [0] use kora hoece
    // (promo) bolte PROMOTIONS array ar each object ke bujhano hocce. Jodi (promo.id === id) true hoy tahole filter array te object ta add hoe jabe (). Object gulo obossoi jeno Promotion type hoy.
  }

  getFeaturePrmotion(): Observable<Promotion>{  
    return this.http.get<Promotion>(baseURL + 'promotions?featured=true')
      .pipe(map(promotions => promotions[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
