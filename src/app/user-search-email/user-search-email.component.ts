import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-search-email',
  templateUrl: './user-search-email.component.html',
  styleUrls: ['./user-search-email.component.css']
})
export class UserSearchEmailComponent implements OnInit {
  users$: Observable<User[]>;
  private searchTerms = new Subject<string>();

   constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {}
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.users$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.userService.searchEmail(term)),
    );
  }
  goBack(): void {
    this.location.back();
  }

}
