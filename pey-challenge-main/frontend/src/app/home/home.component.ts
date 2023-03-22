import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  welcomeMessage: string = '';
  

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const userDetails = this.userService.getUserDetails();
    

    if (userDetails) {
      this.welcomeMessage = `Welcome to PocketHealth ${userDetails.name}. Your User ID is: ${userDetails.userId}. Your favourite color is: ${userDetails.color}`;
    }
    
    
  }
}