import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  user!: User;
  constructor() { }

  ngOnInit(): void {
  }

}
