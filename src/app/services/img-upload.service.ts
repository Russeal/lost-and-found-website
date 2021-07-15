import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgUploadService {

  private GeneralURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  upload(img: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('img', img);

    const req = new HttpRequest( 'POST', `${this.GeneralURL }/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
}
