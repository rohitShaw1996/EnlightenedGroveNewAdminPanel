import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public logout(){
    localStorage.removeItem('_is_admin_login');
    localStorage.removeItem("login_object");
    this.router.navigate(['/login']);
   
  }

  public uploadCourse(redirectUrl){
    localStorage.setItem('is_edit',"false");
    localStorage.setItem("edit_object","");
    this.router.navigate(['/upload-course']);
  }

  // refresh(redirectUrl)
  // {
  //   window.location.href=redirectUrl;
  // }

}
