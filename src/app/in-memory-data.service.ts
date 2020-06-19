import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
		{
			id: 1,
			email: "george.bluth@reqres.in",
			first_name: "George",
			last_name: "Bluth",
			avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
		},
			{
			id: 2,
			email: "janet.weaver@reqres.in",
			first_name: "Janet",
			last_name: "Weaver",
			avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
		},
			{
			id: 3,
			email: "emma.wong@reqres.in",
			first_name: "Emma",
			last_name: "Wong",
			avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
		},
			{
			id: 4,
			email: "eve.holt@reqres.in",
			first_name: "Eve",
			last_name: "Holt",
			avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
		},
			{
			id: 5,
			email: "charles.morris@reqres.in",
			first_name: "Charles",
			last_name: "Morris",
			avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
		},
			{
			id: 6,
			email: "tracey.ramos@reqres.in",
			first_name: "Tracey",
			last_name: "Ramos",
			avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
		},
		{
			"id": 7,
			"email": "michael.lawson@reqres.in",
			"first_name": "Michael",
			"last_name": "Lawson",
			"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
        }
    ];
    return {users};
  }

  // Overrides the genId method to ensure that a user always has an id.
  // If the users array is empty,
  // the method below returns the initial number (11).
  // if the users array is not empty, the method below returns the highest
  // user id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}