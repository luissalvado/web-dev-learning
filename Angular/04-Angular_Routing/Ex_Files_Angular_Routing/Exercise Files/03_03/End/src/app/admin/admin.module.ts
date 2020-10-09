import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoggedInGuard} from '../services/logged-in.guard';
import {AddUserComponent} from './add-user/add-user.component';
import {PerSavedGuardGuard} from '../services/per-saved-guard.guard';
import {PermissionsComponent} from './permissions/permissions.component';
import {AdminComponent} from './admin.component';
import {UsersComponent} from './users/users.component';

const adminRoute: Routes = [
  {path: '', component: AdminComponent, canActivate: [LoggedInGuard],
    children: [
      {path: '', component: UsersComponent},
      {path: 'user-list', component: UsersComponent},
      {path: 'add', component: AddUserComponent},
      {path: 'permissions', component: PermissionsComponent, canDeactivate: [PerSavedGuardGuard]},
    ]}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoute)
  ],
  declarations: [
    UsersComponent,
    AddUserComponent,
    PermissionsComponent,
    AdminComponent
  ],
  providers: [
    PerSavedGuardGuard,
    LoggedInGuard
  ]
})
export class AdminModule { }
