import { Component, OnInit } from '@angular/core';
import { RepositoryUserService } from '../repository-user.service';
import { User } from '../user';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  user!: User;
  repositories: any;
  constructor(private repositoryUserService: RepositoryUserService) { }

  ngOnInit(): void {
    this.getUserDetails('MaureenNjihia');
    //this.getUserRepositories('MaureenNjihia');
  }

  //user details
  getUserDetails(githubUserDetails: string) {
    this.repositoryUserService.getUserResponse(githubUserDetails).then(
      (response: any) => {
        this.user = this.repositoryUserService.getUserDetails;
      },
      (error: any) => {
        console.log(error);
      }
    ); 
  }

  /*user repositories
  getUserRepositories(githubUserDetails: string) {
    this.repositoryUserService.getRepositoryResponse(githubUserDetails).then(
      (response: any) => {
        this.repositories = this.repositoryUserService.getRepositoryDetails;
        console.log(this.repositories);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }*/

}
