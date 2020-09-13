import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessHTTPMsgService {

  public handleError(error: HttpErrorResponse | any){
    let errMsg: string;
    if(error.error instanceof ErrorEvent){ // for any unknown or other errors
      errMsg = error.error.message;
    }
    else{ // for server side error
      errMsg = `${error.status} - ${error.statusText || ''} ${error.error}`; 
    }
    return throwError(errMsg);
  }

  constructor() { }
}
