import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Contents } from 'src/types/contents';
import  { API, Storage } from 'aws-amplify';
import * as mutations from "./../../graphql/mutations";
import * as queries from "./../../graphql/queries";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  title = 'amplify-angular-app';
  files: File[] = [];
  course_keyword: Array<string> = [];
  edit_course_keyword: Array<string> = [];
  url: String = "";
  edit_object: any
  file_name: string = "Choose File";
  companies: Array<string> = [];
  check : boolean = true;
  // public edit_object = JSON.parse(localStorage.getItem("edit_object")!);
  public is_edit = localStorage.getItem("is_edit");


  public createForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    keyword: new FormControl('', Validators.required),
    author: new FormControl('', [Validators.required]),
    language: new FormControl('', [Validators.required]),
    content_type: new FormControl('', Validators.required),
    content_name: new FormControl('', Validators.required),
    organization_name: new FormControl('', Validators.required),
    description: new FormControl(''),
    premium: new FormControl('')

  });

  public childGroup = new FormGroup({
    files: new FormControl('', Validators.required)
  });

  public keywordList = ["abab", "ajhgjahgd", "sjhsja"]



  public is_btn_disabled: boolean = false;
  public btn_text: string = "Create Course";
  public is_edit_btn_disabled: boolean = false;
  public edit_btn_text: string = "Edit Course";
  public filter_version: any;
  public filter_id: any;
  dropdownList: string[];
  public filter_obj: any;

  dropdownSettings: any;
  selectedItems: string[];
  page_heading: string = "Upload course";



  constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router) { }



  //--------Pge intialization function----------------------//

  ngOnInit(): void {

    this.check = true;
    this.getFilter();
    if (this.is_edit == "true") {
      this.edit_object = JSON.parse(localStorage.getItem("edit_object")!);
    }
    this.getCompany();

    if (this.is_edit == "true") {
      this.page_heading = "Edit Course";

      this.createForm.controls['title'].setValue(this.edit_object.title);
      this.createForm.controls['keyword'].setValue(this.edit_object.keyword);
      this.createForm.controls['subject'].setValue(this.edit_object.subject);
      this.createForm.controls['title'].setValue(this.edit_object.title);
      this.createForm.controls['author'].setValue(this.edit_object.author);
      this.createForm.controls['organization_name'].setValue(this.edit_object.organization_name, { onlySelf: true });
      this.createForm.controls['language'].setValue(this.edit_object.language, { onlySelf: true });
      this.createForm.controls['content_type'].setValue(this.edit_object.content_type, { onlySelf: true });
      this.createForm.controls['description'].setValue(this.edit_object.description, { onlySelf: true });
      this.createForm.controls['premium'].setValue(this.edit_object.premium, { onlySelf: true });
      this.file_name = this.edit_object.content_name;
    } else {
      this.page_heading = "Upload course";
    }


    this.dropdownList = [];

    this.selectedItems = [

    ];

    this.dropdownSettings = {
      singleSelection: false,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

  }


  //---------------Function called on change file input------------------//

  async getFilter() {
    const getEditObj = await API.graphql({ query: queries.listFilters });

    let f = JSON.parse(getEditObj["data"]["listFilters"]["items"][0]["filter"]);
    this.filter_obj = f;
    // this.filter_version = getEditObj["data"]["listFilters"]["items"][0]["_version"];
    this.filter_id = getEditObj["data"]["listFilters"]["items"][0]["id"];


  }

  public handleFileInput(event: any) {
    this.files = [];
    this.files.push(event)
 
    this.file_name = this.files[0][0]["name"];
  }

  async getCompany() {
    const companies = await API.graphql({ query: queries.listCompanies });
    this.dropdownList = companies["data"]["listCompanies"]["items"];
    for (var i = 0; i < this.dropdownList.length; i++) {
      this.companies.push(this.dropdownList[i]["name"]);
    }
  }

  async addCompany(company: String) {
    var flag = 1;
    for (var i = 0; i < this.companies.length; i++) {
      if (this.companies[i] == company) {
        flag = 0;
        break;
      }
    }
    if (flag == 1) {
      let obj = { 'name': company };
      const newCompany = await API.graphql({ query: mutations.createCompany, variables: { input: obj } });
   
    }
  }

  //---------------------function to create a course---------------------------//
  async onUpload(content: Contents) {
    let obj = content;
    this.btn_text = "Processing...";
    this.is_btn_disabled = true;
    console.log("content-------------");
    console.log(content);
   
    if (this.files.length == 0) {
      obj.content_name = "";
    } else {
      obj.content_name = this.files[0].name;
    }
    obj.uploaded_by = JSON.parse(localStorage.getItem("login_object")!).id;
    obj.status = true
    obj.deleted = false

    if (content.title.trim() == "") {
      this.toastr.error("Please enter course title");
      this.btn_text = "Create course";
      this.is_btn_disabled = false;
      return
    } else if (content.subject.trim() == "") {
      this.toastr.error("Please enter the subject");
      this.btn_text = "Create course";
      this.is_btn_disabled = false;
      return
    } else if (content.keyword == "") {
      this.toastr.error("Please enter the keyword");
      this.btn_text = "Create course";
      this.is_btn_disabled = false;
      return
    } else if (content.organization_name == "" || content.organization_name == "Choose...") {
      this.toastr.error("Please select the organization");
      this.btn_text = "Create course";
      this.is_btn_disabled = false;
      return
    } else if (content.author.trim() == "") {
      this.toastr.error("Please enter author name");
      this.btn_text = "Create course";
      this.is_btn_disabled = false;
      return
    } else if (content.language == "" || content.language == "Choose...") {
      this.toastr.error("Please select the language");
      this.btn_text = "Create course";
      this.is_btn_disabled = false;
      return
    } else if (content.content_type == "" || content.content_type == "Choose...") {
      this.toastr.error("Please select content type");
      this.btn_text = "Create course";
      this.is_btn_disabled = false;
      return
    } else if (this.files.length == 0) {
      this.toastr.error("Please select the file to upload");
      this.btn_text = "Create course";
      this.is_btn_disabled = false;
      return
    } else {
      obj.content_name = this.files[0][0]["name"]
      if (this.files[0][0]['type'] == "image/jpeg" || this.files[0][0]['type'] == "image/png" || this.files[0][0]['type'] == "image/jpg") {
        const result = await Storage.put(content.title.trim()+"/course/"+this.files[0][0]["name"], this.files[0][0], {
          level: 'public',
          contentType: this.files[0][0]['type']

        });

        let key = result["key"];
        const img_url = await Storage.get(key)
        for (var i = 0; i < obj.keyword.length; i++) {
          this.course_keyword.push(obj.keyword[i]["value"]);
        }
        obj.keyword = this.course_keyword.toString();
        // const img_url1 = await Storage.get(this.files[0][0]["name"], { level: 'public' })
        obj.content_url = img_url.toString()

        this.addCompany(obj.organization_name);


        if (this.filter_obj.subject.indexOf(content.subject.trim()) == -1) {
          this.filter_obj.subject.push(content.subject.trim());
        }
        if (this.filter_obj.content_type.indexOf(content.content_type.trim()) == -1) {
          this.filter_obj.content_type.push(content.content_type.trim());
        }
        if (this.filter_obj.language.indexOf(content.language.trim()) == -1) {
          this.filter_obj.language.push(content.language.trim());
        }
        if (this.filter_obj.organization_name.indexOf(content.organization_name.trim()) == -1) {
          this.filter_obj.organization_name.push(content.organization_name.trim());
        }

        let updated_filter_obj = JSON.stringify(this.filter_obj);
        let edit_filter_obj = {
          id: this.filter_id,
          filter: updated_filter_obj,
          status: true,
          deleted: false,
          created: ""
        }

        const response = await API.graphql({ query: mutations.updateFilter, variables: { input: edit_filter_obj } });

        const newContent = await API.graphql({ query: mutations.createContent, variables: { input: obj } });
        this.createForm.reset();
        this.btn_text = "Create Course";
        this.is_btn_disabled = false;
        this.toastr.success('Course created successfully');
        this.files = []
        this.router.navigate(["/dashboard"]);
      } else {
        this.toastr.error('Please upload a valid image file');
        this.btn_text = "Create Course";
        this.is_btn_disabled = false;
      }

    }
  }

  setSaving(element: { textContent: any; disabled: boolean; }, text: any) {
    element.textContent = text;
    element.disabled = true;
  }


  //----------function to refersh the page------------------//

  refresh(redirectUrl) {
    window.location.href = redirectUrl;
  }


  //--------------------------function to update a particular course------------------------------//
  async updateCourse(event: Contents) {
    let keyword_event = event.keyword;
    this.edit_btn_text = "Processing...";
    this.is_edit_btn_disabled = true;
    event.id = this.edit_object.id.substring(1, this.edit_object.id.length - 1);

    event.uploaded_by = JSON.parse(localStorage.getItem("login_object")!).id;


    for (var i = 0; i < event.keyword.length; i++) {

      if (typeof (event.keyword[i]) == "string") {
        this.edit_course_keyword.push(event.keyword[i]);
      } else {
        this.edit_course_keyword.push(event.keyword[i]["value"]);
      }
    }

    event.keyword = this.edit_course_keyword.toString();

    if (event.title.trim() == "") {
      this.toastr.error("Please enter course title");
      this.edit_btn_text = "Edit Course";
      this.is_edit_btn_disabled = false;
      return
    } else if (event.subject.trim() == "") {
      this.toastr.error("Please enter the subject");
      this.edit_btn_text = "Edit Course";
      this.is_edit_btn_disabled = false;
      return
    } else if (keyword_event.length == 0) {
      this.toastr.error("Please enter the keyword");
      this.edit_btn_text = "Edit Course";
      this.is_edit_btn_disabled = false;
      return
    } else if (event.organization_name == "" || event.organization_name == "Choose...") {
      this.toastr.error("Please select the organization");
      this.edit_btn_text = "Edit Course";
      this.is_edit_btn_disabled = false;
      return
    } else if (event.author.trim() == "") {
      this.toastr.error("Please enter author name");
      this.edit_btn_text = "Edit Course";
      this.is_edit_btn_disabled = false;
      return
    } else if (event.language == "" || event.language == "Choose...") {
      this.toastr.error("Please select the language");
      this.edit_btn_text = "Edit Course";
      this.is_edit_btn_disabled = false;
      return
    }
    else if (event.content_type == "" || event.content_type == "Choose...") {
      this.toastr.error("Please select content type");
      this.edit_btn_text = "Edit Course";
      this.is_edit_btn_disabled = false;
      return
    } else {

      if (this.files.length == 0) {
        event.content_name = this.edit_object.content_name
        event.content_url = this.edit_object.content_url
      } else {
        event.content_name = this.files[0][0]["name"]
        if (this.files[0][0]['type'] == "image/jpeg" || this.files[0][0]['type'] == "image/png" || this.files[0][0]['type'] == "image/jpg") {
          const result = await Storage.put(event.title.trim()+"/course/"+this.files[0][0]["name"], this.files[0][0], {
            level: 'public',
            contentType: this.files[0][0]['type']

          });

          let key = result["key"];
          const img_url = await Storage.get(key);
          event.content_url = img_url.toString();
        } else {
          this.toastr.error("Please upload a valid image file");
          this.edit_btn_text = "Edit Course";
          this.is_edit_btn_disabled = false;
          return
        }
      }
      let id = this.edit_object.id;

      const edit_obj = {
        id: this.edit_object.id,
        title: event.title,
        subject: event.subject,
        keyword: event.keyword,
        author: event.author,
        language: event.language,
        content_type: event.content_type,
        organization_name: event.organization_name,
        content_name: event.content_name,
        content_url: event.content_url,
        premium: event.premium,
        description: event.description,
        uploaded_by: event.uploaded_by,
        upload_time: "",
        status: true,
        deleted: false,
        created: "",
      }

      if (this.filter_obj.subject.indexOf(edit_obj.subject.trim()) == -1) {
        this.filter_obj.subject.push(edit_obj.subject.trim());
      }
      if (this.filter_obj.content_type.indexOf(edit_obj.content_type.trim()) == -1) {
        this.filter_obj.content_type.push(edit_obj.content_type.trim());
      }
      if (this.filter_obj.language.indexOf(edit_obj.language.trim()) == -1) {
        this.filter_obj.language.push(edit_obj.language.trim());
      }
      if (this.filter_obj.organization_name.indexOf(edit_obj.organization_name.trim()) == -1) {
        this.filter_obj.organization_name.push(edit_obj.organization_name.trim());
      }

      let updated_filter_obj = JSON.stringify(this.filter_obj);
      let edit_filter_obj = {
        id: this.filter_id,
        filter: updated_filter_obj,
        status: true,
        deleted: false,
        created: "",
      }

      const res = await API.graphql({ query: mutations.updateFilter, variables: { input: edit_filter_obj } });
      const response = await API.graphql({ query: mutations.updateContent, variables: { input: edit_obj } });
      this.edit_btn_text = "Edit Course";
      this.is_edit_btn_disabled = false;
      this.toastr.success("Course Updated Succesfully");
      this.router.navigate(['/dashboard']);
      this.createForm.reset();
      this.files = [];

    }

  }

}



