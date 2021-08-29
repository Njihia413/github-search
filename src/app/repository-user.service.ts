import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Repository } from './repository';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RepositoryUserService {
  getUserDetails: User;
  getRepositoryDetails: Repository;


  constructor(private http: HttpClient) {
    this.getUserDetails = new User(
      '',
      '',
      '',
      '',
      '',
      '',
      0,
      0,
      0,
      new Date(),
    );
    this.getRepositoryDetails = new Repository(
      '',
      '',
      '',
      new Date(),
      '',
    )
  }

  //getting user details from api
  getUserResponse(githubUserDetails: any) {
    interface ApiUserResponse {
      name:string,
      login:string,
      avatar_url:string,
      html_url:string,
      location:string,
      bio:string,
      public_repos:number,
      followers:number,
      following:number,
      created_at:Date,
    }

    let userPromise = new Promise<void>((resolve, reject) =>
      this.http
        .get<ApiUserResponse>(
          environment.apiUrl +
            '/' +
            githubUserDetails +
            '?access_token=' +
            environment.apiKey
        )
        .toPromise()
        .then(
          (response: any) => {
            this.getUserDetails = response;
            resolve();
          },
          (error: any) => {
            reject(error);
            console.log(error);
          }
        )
    );
    return userPromise;
  }
  }

  

  /*getRepositoryResponse(githubUserDetails: any) {
    interface ApiRepositoryResponse {
      name:string;
      html_url:string;
      description:string;
      created_at:string;
      language:string;
    }
  }
}*/

