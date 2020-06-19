import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserDetailComponent }  from './user-detail/user-detail.component';
import { UserAddComponent }  from './user-add/user-add.component';
import { UserSearchComponent }  from './user-search/user-search.component';

import { UserSearchFirstNameComponent } from './user-search-first-name/user-search-first-name.component';
import { UserSearchLastNameComponent } from './user-search-last-name/user-search-last-name.component';
import { UserSearchEmailComponent } from './user-search-email/user-search-email.component';

const routes: Routes = [
	{ path: 'user-add', component: UserAddComponent },
	{ path: 'user-search', component: UserSearchComponent },
	{ path: 'user-search-email', component: UserSearchEmailComponent },
	{ path: 'user-search-last-name', component: UserSearchLastNameComponent },
	{ path: 'user-search-first-name', component: UserSearchFirstNameComponent },
	{ path: 'users', component: UsersComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'detail/:id', component: UserDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
