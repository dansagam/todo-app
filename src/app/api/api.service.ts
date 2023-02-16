import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

interface IOptions {
  headers?: HttpHeaders | { [key: string]: string };
  responseType?: any;
  params?: any;
}

export const queryParamsHelper = (
  query: Record<string, any>
): Record<string, any> => {
  Object.keys(query)?.forEach((key) => {
    if (!query[key]) delete query[key];
  });
  return query;
};

const defaultOptions = {
  headers: {
    'Content-Type': 'application/json',
    'X-Frame-Options': 'SAMEORIGIN',
    'Access-Control-Allow-Origin': '*',
  },
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  private formatErrors(error: any) {
    return throwError(() => error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    queryParamsHelper(params);
    return this.http
      .get(`${environment.API_BASE_URL}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  getNoParams(path: string): Observable<any> {
    return this.http
      .get(`${environment.API_BASE_URL}${path}`)
      .pipe(catchError(this.formatErrors));
  }

  put(
    path: string,
    body: Object = {},
    options: IOptions = defaultOptions
  ): Observable<any> {
    return this.http
      .put(`${environment.API_BASE_URL}${path}`, JSON.stringify(body), options)
      .pipe(catchError(this.formatErrors));
  }

  patch(
    path: string,
    body: Object = {},
    options: IOptions = defaultOptions
  ): Observable<any> {
    return this.http
      .patch(
        `${environment.API_BASE_URL}${path}`,
        JSON.stringify(body),
        options
      )
      .pipe(catchError(this.formatErrors));
  }

  post(
    path: string,
    body = {},
    options: IOptions = defaultOptions,
    isFormData?: boolean
  ): Observable<any> {
    console.log(`${environment.API_BASE_URL}${path}`);
    return this.http
      .post(
        `${environment.API_BASE_URL}${path}`,
        isFormData ? body : JSON.stringify(body),
        options
      )
      .pipe(catchError(this.formatErrors));
  }

  delete(path: string, options = {}): Observable<any> {
    return this.http
      .delete(`${environment.API_BASE_URL}${path}`, options)
      .pipe(catchError(this.formatErrors));
  }
}
