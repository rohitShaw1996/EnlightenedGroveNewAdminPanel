import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public login_object : any ;

  constructor(private router : Router) { }

  ngOnInit(): void {
   
    this.login_object = localStorage.getItem("login_object");
    console.log("-----------------");
    console.log(this.login_object);
    console.log([this.router.url])
    console.log("-----------------");
    if(!this.login_object){
      this.router.navigate(['/login']);
    }else if(this.router.url == "/"){
      this.router.navigate(['/dashboard']);
    }else{
      this.router.navigate([this.router.url]);
    }
  }

}
