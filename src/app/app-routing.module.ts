import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UserSearchComponent } from './user-search/user-search.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'user-search', component: UserSearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
