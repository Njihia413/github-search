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
    this.getUserRepositories('MaureenNjihia');
  }

  //user details
  getUserDetails(githubUserDetails: string) {
    this.repositoryUserService.getUserResponse(githubUserDetails).then(
      (response) => {
        this.user = this.repositoryUserService.getUserDetails;
      },
      (error) => {
        console.log(error);
      }
    ); 
  }

  //user repositories
  getUserRepositories(githubUserDetails: any) {
    this.repositoryUserService.getRepositoryResponse(githubUserDetails).then(
      (response) => {
        this.repositories = this.repositoryUserService.getRepositoryDetails;
        console.log(this.repositories);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
