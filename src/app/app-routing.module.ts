import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UserSearchComponent } from './user-search/user-search.component';

const routes: Routes = [
  { path: 'main', component: MainpageComponent },
  { path: 'user-search', component: UserSearchComponent},
  { path: '', redirectTo:"/main", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
