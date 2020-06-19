import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'api/users';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
	private http: HttpClient,
	private messageService: MessageService) { }
  
  
  
  /** GET users from the server */
  getUsers(): Observable<User[]> {
	return this.http.get<User[]>(this.usersUrl)
		.pipe(
			tap(_=> this.log("fetched users")),
			catchError(this.handleError<User[]>('getUsers', []))
		);
  }
  
  /** GET user by id. Will 404 if id not found */
  getUser(id: number): Observable<User> {
	  const url = `${this.usersUrl}/${id}`;
	  return this.http.get<User>(url).pipe(
		tap(_ => this.log(`fetched user id=${id}`)),
		catchError(this.handleError<User>(`getUser id=${id}`))
	  );
  }
  
  /** Log a UserService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`UserService: ${message}`);
  }
  
  
  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

	  // TODO: send the error to remote logging infrastructure
	  console.error(error); // log to console instead

	  // TODO: better job of transforming error for user consumption
	  this.log(`${operation} failed: ${error.message}`);

	  // Let the app keep running by returning an empty result.
	  return of(result as T);
	};
  }
  
  /** PUT: update the User on the server */
	updateUser(user: User): Observable<any> {
	  return this.http.put(this.usersUrl, user, this.httpOptions).pipe(
		tap(_ => this.log(`updated user id=${user.id}`)),
		catchError(this.handleError<any>('updateUser'))
	  );
	}
	
  
  /** POST: add a new hero to the server */
	addUser(user: User): Observable<User> {
	  return this.http.post<User>(this.usersUrl, user, this.httpOptions).pipe(
		tap((newUser: User) => this.log(`added user w/ id=${newUser.id}`)),
		catchError(this.handleError<User>('addUser'))
	  );
	}
	
	/** DELETE: delete the hero from the server */
	deleteUser(user: User | number): Observable<User> {
	  const id = typeof user === 'number' ? user : user.id;
	  const url = `${this.usersUrl}/${id}`;

	  return this.http.delete<User>(url, this.httpOptions).pipe(
		tap(_ => this.log(`deleted user id=${id}`)),
		catchError(this.handleError<User>('deleteUser'))
	  );	  
	}
	
	
	  /* GET users whose first name contains search term */
	searchFirstName(term: string): Observable<User[]> {
	  if (!term.trim()) {
		// if not search term, return empty user array.
		return of([]);
	  }
	  return this.http.get<User[]>(`${this.usersUrl}/?first_name=${term}`).pipe(
		tap(x => x.length ?
		   this.log(`found users matching "${term}"`) :
		   this.log(`no users matching "${term}"`)),
		catchError(this.handleError<User[]>('searchUsers', []))
	  );
	}
	
	/* GET users whose last name contains search term */
	searchLastName(term: string): Observable<User[]> {
	  if (!term.trim()) {
		// if not search term, return empty user array.
		return of([]);
	  }
	  return this.http.get<User[]>(`${this.usersUrl}/?last_name=${term}`).pipe(
		tap(x => x.length ?
		   this.log(`found users matching "${term}"`) :
		   this.log(`no users matching "${term}"`)),
		catchError(this.handleError<User[]>('searchUsers', []))
	  );
	}
	  
	/* GET users whose email contains search term */
	searchEmail(term: string): Observable<User[]> {
	  if (!term.trim()) {
		// if not search term, return empty user array.
		return of([]);
	  }
	  return this.http.get<User[]>(`${this.usersUrl}/?email=${term}`).pipe(
		tap(x => x.length ?
		   this.log(`found users matching "${term}"`) :
		   this.log(`no users matching "${term}"`)),
		catchError(this.handleError<User[]>('searchUsers', []))
	  );
	}
  
}
