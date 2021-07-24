import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { observable, Observable } from 'rxjs';
import { Item } from '../dto/itemDto';

const httpOptions: Object = {
  header: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient, private auth: AngularFireAuth) { }

  getItems(): Observable<Array<Item>> {
    return this.http.get<Array<Item>>('/api/items');
  }

  getItemsByCategory(category: string): Observable<Array<Item>> {
    return this.http.get<Array<Item>>(`/api/${ category }/items`);
  }

  searchItems(str: string, location: string): Observable<Array<Item>> {
    return this.http.post<Array<Item>>(`api/search`, { str, location });
  }

  getItemByID(id: string): Observable<Item> {
    return this.http.get<Item>(`/api/items/${ id }`);
  }

  getMyItems(): Observable<Item[]> {
    return new Observable<Item[]>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token => {
          if (user && token) {

              let options = {
                headers: new HttpHeaders({
                  'Content-Type': 'application/json',
                  'authorization': token
                })
              };

            this.http.get<Item[]>(
              `/api/profiles/${user.uid}/items`,
              options
            ).subscribe(items => {
                observer.next(items);
              });
          } else {
            observer.next([]);
          }
        })
      })
    });
  }

  deleteMyItems(id: string): Observable<any> {
    return new Observable<any>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token => {

          let options = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'authorization': token
            })
          };

          this.http.delete(`/api/items/${ id }`, options)
          .subscribe(() => observer.next());
        })
      })
    });
  }

  createItem(name: string, category: string, status: string, date: string, time: string, location: string, details: string): Observable<Item> {

    return new Observable<Item>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token => {

          let options = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'authorization': token
            })
          };

          this.http.post<Item>(
            'api/items',
            { name, category, status, date, time, location, details },
            options
          ).subscribe(() => observer.next());
        })
      })
    })


  }

  editItem(id:string, name: string, category: string, status: string, date: string, time: string, location: string, details: string): Observable<Item> {

    return new Observable<Item>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token => {

          let options = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'authorization': token
            })
          };

          return this.http.post<Item>(
            `api/items/${id}`,
            { name, category, status, date, time, location, details },
            options
          ).subscribe(() => observer.next());
        })
      })
    });
  }

}
