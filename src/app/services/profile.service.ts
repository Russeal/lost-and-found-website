import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ProfileDto } from '../dto/profileDto';

@Injectable()
export class ProfileService {

  private GeneralURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public authorization(profile: ProfileDto) {
    let json = JSON.stringify(profile);

    let options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<ProfileDto>(this.GeneralURL.concat('/welcome/auth'), json, options);
  }
}
