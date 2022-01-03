import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgSelect2Module } from 'ng-select2';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagInputModule } from 'ngx-chips';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FilterPipe } from './appPipes/filter.pipe';
import { CourseFilterPipe } from './appPipes/course-filter.pipe';
import { DefaultComponent } from './default/default.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NetworkInterceptor } from './services/network.interceptor';
import { NgxUiLoaderModule,NgxUiLoaderHttpModule , NgxUiLoaderRouterModule} from "ngx-ui-loader";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';






@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CourseDetailsComponent,
    CoursesComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    SidebarComponent,
    FilterPipe,
    CourseFilterPipe,
    DefaultComponent,
    PrivacyPolicyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyUIAngularModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    NgSelect2Module,
    MultiSelectAllModule,
    NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    TagInputModule,
    SweetAlert2Module.forRoot(),
    FilterPipeModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    NgxUiLoaderRouterModule,
    MatSlideToggleModule


   
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: NetworkInterceptor, multi: true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
