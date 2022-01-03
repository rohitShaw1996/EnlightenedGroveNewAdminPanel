import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public username: string = "" ;
  constructor(private router: Router) { }

  public logout(){
    localStorage.removeItem('_is_admin_login');
    localStorage.removeItem("login_object");
    this.router.navigate(['/login']);
   
  }


  ngOnInit(): void {
    this.username = JSON.parse(localStorage.getItem("login_object")!).name;

  }
  public privacyPolicy(){
   this.router.navigate(['/privacy-policy']);
  }

}
