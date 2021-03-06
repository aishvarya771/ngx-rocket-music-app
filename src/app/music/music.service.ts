import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    Accept: 'text/plain',
    'Content-Type': 'application/json',
    'X-Mashape-Key': 'bHzTwgoDMgmshhLxtpg1PSPfChxxp1qHV4kjsnK5XhUFQ7u0AH'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  url: String = 'https://deezerdevs-deezer.p.mashape.com/search?q=';
  constructor(private _http: HttpClient) {}

  public searchAlbum(strng: string) {
    return this._http.get(this.url + strng, httpOptions).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
