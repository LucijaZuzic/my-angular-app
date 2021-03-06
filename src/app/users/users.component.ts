import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
		
	users: User[];
	
	constructor(private userService: UserService, private messageService: MessageService) { }

	ngOnInit(): void {
		this.getUsers();
	}
	
	getUsers(): void {
		this.userService.getUsers()
			.subscribe(users  => this.users = users);
	}
	
	delete(user: User): void {
	  this.users = this.users.filter(h => h !== user);
	  this.userService.deleteUser(user).subscribe();
	}
	
}
