
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import  { API } from 'aws-amplify';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as queries from "./../../graphql/queries";
import { Auth } from 'aws-amplify';
declare var $: any;

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public createForm: FormGroup;
  public login_btn: string = "Log In";
  public is_btn_disabled: boolean = false;
  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService) {
  }


  // initialization function
  async ngOnInit() {
    this.login_btn = "Log In";
    this.is_btn_disabled = false;
    this.createForm = this.fb.group({
      'username': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required],
    });
  }

  //login function
  public loginUser(event: any) {
    this.getAuthUser(event.username, event.password)
  }

  //Cognito login for admin
  async getAuthUser(username: any, password: any) {
    try {
      this.login_btn = "Processing...";
      this.is_btn_disabled = true;

      if (username.trim() == "") {
        this.toastr.error("Username can't be empty");
        this.login_btn = "Log In";
        this.is_btn_disabled = false;
      } else if (this.createForm.controls.username.invalid) {
        this.toastr.error("Please enter the valid email");
        this.login_btn = "Log In";
        this.is_btn_disabled = false;
        return
      } else if (password == "") {
        this.toastr.error("Password can't be empty");
        this.login_btn = "Log In";
        this.is_btn_disabled = false;
      } else {
        const user = await Auth.signIn(username, password);
       
        if (user != null) {
          localStorage.setItem("token", user.Session);
          this.getUser(username, password)
        }
      }

    } catch (error:any) {
      
      this.login_btn = "Log In";
      this.is_btn_disabled = false;
      this.toastr.error(error["message"]);
    }
  }


  // Admin login (not cognito login)
  async getUser(email: any, password: any) {
    this.login_btn = "Processing...";
    this.is_btn_disabled = true;
    let filter1 = {
      and: [{ email: { eq: email } },
      { password: { eq: password } }]
    };
   
    let result = await API.graphql({ query: queries.listAdminUsers, variables: { filter: filter1 } });
    if (result["data"]["listAdminUsers"]["items"].length > 0) {
      let login_object = {
        id: result["data"]["listAdminUsers"]["items"][0]['id'],
        name: result["data"]["listAdminUsers"]["items"][0]['name'],
        email: result["data"]["listAdminUsers"]["items"][0]['email']
      }
      localStorage.setItem('_is_admin_login', "true");
      localStorage.setItem("login_object", JSON.stringify(login_object));
      this.router.navigate(['/dashboard']);
    } else {
      this.toastr.error('Invalid username or password');
      localStorage.setItem('_is_admin_login', "false");
      localStorage.setItem("login_object", "");
      this.login_btn = "Log In";
      this.is_btn_disabled = false;
    }
  }


  //function to hide and show password icon
  public showPassword(val: any) {
    if (val == "0") {
      $("#password").attr("type", "text");
      $("#show_password").attr("hidden", false);
      $("#hide_password").attr("hidden", true);
    } else {
      $("#password").attr("type", "password");
      $("#show_password").attr("hidden", true);
      $("#hide_password").attr("hidden", false);
    }
  }
}
