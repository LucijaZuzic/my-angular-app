import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
		
	users: User[];
	
	constructor(private userService: UserService) { }

	ngOnInit(): void {
	}
	
	add(first_name: string, last_name: string, email: string, avatar: string): void {
	  first_name = first_name.trim();
	  last_name = last_name.trim();
	  email = email.trim();
	  avatar = avatar.trim();
	  if (!first_name) { return; }
	  if (!last_name) { return; }
	  if (!email) { return; }
	  if (!avatar) { return; }
	  this.userService.addUser({ first_name, last_name, email, avatar } as User)
		.subscribe(user => {
		  this.users.push(user);
		});
	}
	
	
}
