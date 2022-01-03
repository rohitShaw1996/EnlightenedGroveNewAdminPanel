import { Component, OnInit } from '@angular/core';
import  { API } from 'aws-amplify';

import AWSAppSyncClient from 'aws-appsync';

import * as queries from "./../../graphql/queries";
import * as mutations from './../../graphql/mutations';
import { Contents } from 'src/types/contents';
import { Router } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';




declare var $: any;




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public admin_login: any;
  public is_login: any;
  contents: Array<Contents> = [];
  result: Array<Contents> = [];
  client!: AWSAppSyncClient<NormalizedCacheObject>;
  constructor(private router: Router, private swal: SweetAlert2Module, private toastr: ToastrService) { }
  is_disabled: boolean = false;
  searchName: string = "";
  showText: string = "";
  // client: AWSAppSyncClient<NormalizedCacheObject>  ;
  //-----------------------Page intialization function----------------//

  ngOnInit(): void {
    this.hideText();
    this.showText = localStorage.getItem("changeText")!;

    if (localStorage.getItem("login_object")) {

      this.admin_login = JSON.parse(localStorage.getItem("login_object")!);
      this.is_login = localStorage.getItem("_is_admin_login");
    }
    this.getContents();
    this.getUser();
  }


  public async getUser() {
    let filter = {
      deleted: {
        ne: true // filter priority = 1,
      },
      id: {
        eq: "a7779327-a95f-4a3d-bc39-85448caf64a2"
      }
    };
    const respose = await API.graphql({ query: queries.listAdminUsers, variables: { filter: filter } });

  }

  //-------------------- function to set localStorage variables--------------------//

  public setCourseId(id: any, title: any) {

    localStorage.setItem("course_id", id);
    localStorage.setItem("course_name", title);
    this.router.navigate(['/course-detail']);
  }

  public inputChange() {
    localStorage.setItem("changeText", "0");
    this.showText = localStorage.getItem("changeText")!;
  }

  public hideText() {
    localStorage.setItem("changeText", "1");
  }


  //---------------------function to get all the non deleted course contents------------------//
  public async getContents() {
    let filter = {
      deleted: {
        ne: true // filter priority = 1
      }
    };
    const content = await API.graphql(
      {
        query: queries.listContents,
        variables: { filter: filter }
      })


    this.contents = [];
    this.contents = content["data"]["listContents"]["items"];
    console.log(this.contents)
    for (var i = 0; i < this.contents.length; i++) {
      this.contents[i].content_url = this.contents[i].content_url.split("?")[0];
    }

  }

  //--------------------------function to set course edit object-----------------------//

  async editCourse(courseId: any) {
    const cousre = await API.graphql({ query: queries.getContent, variables: { id: courseId } });

    let edit_object = {
      id: cousre["data"]["getContent"].id,
      title: cousre["data"]["getContent"].title,
      subject: cousre["data"]["getContent"].subject,
      keyword: cousre["data"]["getContent"].keyword.split(","),
      author: cousre["data"]["getContent"].author,
      language: cousre["data"]["getContent"].language,
      organization_name: cousre["data"]["getContent"].organization_name,
      content_type: cousre["data"]["getContent"].content_type,

      content_name: cousre["data"]["getContent"].content_name,
      content_url: cousre["data"]["getContent"].content_url,
      description: cousre["data"]["getContent"].description,
      premium: cousre["data"]["getContent"].premium


    }

    localStorage.setItem('is_edit', "true");
    localStorage.removeItem("edit_object");
    localStorage.setItem("edit_object", JSON.stringify(edit_object));
    this.router.navigate(['/upload-course']);

  }


  refresh(redirectUrl) {
    window.location.href = redirectUrl;
  }
  //--------------function to delete a particular course-------------------//

  async delteCourse(id: any) {
    const deleteObj = {
      id: id,
      deleted: true,
      status: false,
      _version:0
    };
    const deletedRes = await API.graphql({ query: mutations.updateContent, variables: { input: deleteObj } });
    setTimeout(() => {
      // window.location.reload();
      this.toastr.success("Course deleted succesfuly");
    }, 1000);
    this.getContents();
  }

  //-------------function to update the active status of a particular course---------//

  async updateStatus(status: any, id: any) {
    this.is_disabled = true
    if (status == true) {
      status = false
    } else {
      status = true
    }
    const updateObj = {
      id: id,
      status: status,
    };

    const statusRes = await API.graphql({ query: mutations.updateContent, variables: { input: updateObj } });
    this.getContents();
    if (status == true) {
      this.toastr.success("Course activated succesfuly");
    } else {
      this.toastr.success("Course deactivated succesfuly");
    }
    this.is_disabled = false
  }


}
