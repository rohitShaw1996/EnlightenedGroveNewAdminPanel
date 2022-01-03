import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';



const routes: Routes = [{
  path : "login",
  component: AuthComponent,
  
},
// {
//   path : "**",path : "**",
//   redirectTo: 'login',
//   pathMatch: 'full'
// },
{path : "privacy-policy",component: PrivacyPolicyComponent},
{
  path: '',
  component: LayoutComponent,
  children: [
    {path: 'dashboard',  component: DashboardComponent},
    {path: 'upload-course', component: CoursesComponent},
    {path: 'course-detail', component: CourseDetailsComponent},
  
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }