import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from './pages/angular/angular.component';
import { JavascriptComponent } from './pages/javascript/javascript.component';
import { GooglecloudComponent } from './pages/googlecloud/googlecloud.component';

const routes: Routes = [
  { path: '', redirectTo: '/angular', pathMatch: 'full' },
  { path: 'angular', component: AngularComponent },
  { path: 'javascript', component: JavascriptComponent },
  { path: 'cloud', component: GooglecloudComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
