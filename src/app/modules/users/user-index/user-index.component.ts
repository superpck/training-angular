import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.scss']
})
export class UserIndexComponent implements OnInit {
  users: any = [];

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  async getUser() {
    const result: any = await this.userService.getUser();
    if (result['results']) {
      this.users = result['results'];
    } else {
      this.users = [];
    }
  }
}