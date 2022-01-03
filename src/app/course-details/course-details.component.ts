import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Content_unit } from 'src/types/content_unit';
import { ToastrService } from 'ngx-toastr';
import { Storage, API } from 'aws-amplify';
import * as mutations from "./../../graphql/mutations";
import * as queries from "./../../graphql/queries";
import { ContentUnit } from 'src/models';
import { Router } from '@angular/router';
import { FilterPipe } from 'ngx-filter-pipe';

declare var $: any;

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  dropdownList: string[] = [];
  dropdownSettings: any;
  selectedItems: string[]=[];
  files: File[] = [];
  url: String = "";
  content_unit_keyword: Array<string> = [];
  edit_unit_keyword: Array<string> = [];
  content_units: Array<ContentUnit> = [];
  all_units = [];
  is_disabled: boolean = false;
  course_name: string = "";
  unit_file_name: string = "Choose File";
  nameSearch: string = "";
  showText: string = "";
  userFilter: any = { title: '', unit_no: '', keyword: '' };


  public createForm = new FormGroup({
    unit_no: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    keyword: new FormControl('', Validators.required),
    language: new FormControl('', [Validators.required]),
    content_type: new FormControl('', Validators.required),
    content_name: new FormControl('', Validators.required)

  });

  public is_btn_disabled: boolean = false;
  public btn_text: string = "Create Unit";
  public model_title: string = "Add Unit";
  public course_id = localStorage.getItem("course_id");



  constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router, private filterPipe: FilterPipe) { }

  //--------------Page Initialization function-------------------- 
 
  showMe: boolean = false;


  ngOnInit(): void {
    this.showMe = false;
    this.hideText();
    this.noDatafound();
    this.showText = localStorage.getItem("changeText")!;
    // const course_id = localStorage.getItem("course_id");
    this.course_name = localStorage.getItem("course_name")!;
    this.getContentUnit(this.course_id);
    this.dropdownList = ["IT", "Software development", "BCA", "Mechnaical"];
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

  noDatafound() {
        setTimeout(() => {
              this.showMe = true;
        }, 2000);
    
  }
  public hideText() {
    localStorage.setItem("changeText", "1");
  }

  public inputChange() {
    localStorage.setItem("changeText", "0");
    this.showText = localStorage.getItem("changeText")!;
  }


  //------------------function called on onchange event of file upload----------------------------------

  public handleFileInput(event: any) {
    this.files = [];
    this.files.push(event);
    $("#unit_file_name").html(this.files[0][0]["name"]);
    this.unit_file_name = this.files[0][0]["name"];
  }


  //------------------function to get all the non deleted course unit of a particular course----------------------------

  async getContentUnit(course_id: any) {
    let filter1 = {
      deleted: {
        eq: false // filter priority = 1
      },
      course_id:{
        eq:course_id
      }
    };
    const units = await API.graphql({ query: queries.listContentUnits, variables: { filter: filter1, limit: 1000, sortDirection: 'ASC' } });
    this.content_units = units["data"]["listContentUnits"]["items"];
    this.all_units = units["data"]["listContentUnits"]["items"];
  }



  //--------------function to create and update a course unit---------------------------

  async onCreate(content_unit: Content_unit) {

    let is_exits = this.dounitNumberExists(content_unit.unit_no);

    if (localStorage.getItem("is_edit_unit") == "true") {
      this.is_btn_disabled = true;
      this.btn_text = "Saving...";
      let unit_num = Number(String(content_unit.unit_no));
      let prev_unit_number = localStorage.getItem("unit_number");

      if (String(content_unit.unit_no) == "") {
        this.is_btn_disabled = false;
        this.btn_text = "Save";
        this.toastr.error("Please enter unit number");
        return
      } else if (content_unit.unit_no == null) {

        this.is_btn_disabled = false;
        this.btn_text = "Save";
        this.toastr.error("Please enter unit number");
        return
      }
      else if (Number.isInteger(unit_num) == false) {

        this.is_btn_disabled = false;
        this.btn_text = "Save";
        this.toastr.error("Unit number must be a Number");
        return
      } else if (this.dounitNumberForEditExists(prev_unit_number, content_unit.unit_no) == 1) {

        this.is_btn_disabled = false;
        this.btn_text = "Save";
        this.toastr.error("Unit number already exists");
        return
      }
      else if (content_unit.title == null) {
        this.is_btn_disabled = false;
        this.btn_text = "Save";
        this.toastr.error("Please enter unit title");
        return
      } else if (content_unit.title.trim() == "") {
        this.is_btn_disabled = false;
        this.btn_text = "Save";
        this.toastr.error("Please enter unit title");
        return
      }

      else if (content_unit.language == null) {
        this.is_btn_disabled = false;
        this.btn_text = "Save";
        this.toastr.error("Please select the language");
        return
      } else if (content_unit.language == "") {
        this.is_btn_disabled = false;
        this.btn_text = "Save";
        this.toastr.error("Please select the language");
        return
      } else if (content_unit.keyword == null) {
        this.is_btn_disabled = false;
        this.btn_text = "Save";
        this.toastr.error("Please enter keyword");
        return
      } else if (content_unit.keyword == "") {
        this.is_btn_disabled = false;
        this.btn_text = "Save";
        this.toastr.error("Please enter keyword");
        return
      }

      else if (content_unit.content_type == null) {
        this.is_btn_disabled = false;
        this.btn_text = "Save";
        this.toastr.error("Please select content type");
        return
      } else if (content_unit.content_type == "") {
        this.is_btn_disabled = false;
        this.btn_text = "Save";
        this.toastr.error("Please select content type");
        return
      } else {
        for (var i = 0; i < content_unit.keyword.length; i++) {
       
          
          if (typeof (content_unit.keyword[i]) == "string") {
            this.edit_unit_keyword.push(content_unit.keyword[i]);
          } else {
            this.edit_unit_keyword.push(content_unit.keyword[i]["value"]);
          }
        }
        content_unit.keyword = this.edit_unit_keyword.toString();

        let edit_obj = JSON.parse(localStorage.getItem("edit_unit_object")!);
        if (this.files.length == 0) {
          content_unit.content_name = edit_obj.content_name,
            content_unit.content_url = edit_obj.content_url
        } else if (this.files[0][0]['size'] > 100000000) {
          this.is_btn_disabled = false;
          this.btn_text = "Save";
          this.toastr.error("Maximum file size allowed is 100MB");
          return
        }

        else if (this.files[0][0]['type'] == "image/jpeg" || this.files[0][0]['type'] == "image/png" || this.files[0][0]['type'] == "image/jpg" || this.files[0][0]['type'] == "application/pdf" || this.files[0][0]['type'] == "video/mp4" || this.files[0][0]['type'] == "video/mp4") {
          content_unit.content_name = this.files[0][0]["name"];
          const result = await Storage.put(this.course_name.trim()+"/course_units/unit_"+content_unit.unit_no+"/"+this.files[0][0]["name"], this.files[0][0], {
            level: 'public',
            contentType: this.files[0][0]['type']
          });
          let key = result["key"];
          const img_url = await Storage.get(key);
          content_unit.content_url = img_url.toString();
        } else {
          this.is_btn_disabled = false;
          this.btn_text = "Save";
          this.toastr.error("Please upload a valid file");
          return
        }


        let update_unit_object = {
          id: edit_obj.id,
          content_name: content_unit.content_name,
          content_type: content_unit.content_type,
          content_url: content_unit.content_url,
          keyword: content_unit.keyword,
          title: content_unit.title,
          unit_no: content_unit.unit_no,
          language: content_unit.language,

        }
        const updatedobj = await API.graphql({ query: mutations.updateContentUnit, variables: { input: update_unit_object } });
        
        this.createForm.reset();
        this.is_btn_disabled = true;
        this.btn_text = "Edit Unit";
        $("#addunitModal").modal('hide');
        this.toastr.success("Unit Updated Successfully");
        this.router.navigate([this.router.url]);
        // window.location.reload();
        this.getContentUnit(this.course_id);
      }

    } else {
      let unit_num = Number(String(content_unit.unit_no));
      if (content_unit.unit_no == null) {
        this.is_btn_disabled = false;
        this.btn_text = "Save";
        this.toastr.error("Please enter unit number");
        return
      } else if (content_unit.unit_no == null) {
        this.is_btn_disabled = false;
        this.btn_text = "Save";
        this.toastr.error("Please enter unit number");
        return
      } else if (String(content_unit.unit_no) == "") {
        this.is_btn_disabled = false;
        this.btn_text = "Save";
        this.toastr.error("Please enter unit number");
        return
      } else if (Number.isInteger(unit_num) == false) {
        this.is_btn_disabled = false;
        this.btn_text = "Save";
        this.toastr.error("Unit number must be a Number");
        return
      }
      else if (this.dounitNumberExists(content_unit.unit_no) == 1) {
        this.is_btn_disabled = false;
        this.btn_text = "Save";
        this.toastr.error("Unit number already exists");
        return
      }
      else if (content_unit.title == null) {
        this.is_btn_disabled = false;
        this.btn_text = "Save";
        this.toastr.error("Please enter unit title");
        return
      } else if (content_unit.title.trim() == "") {
        this.is_btn_disabled = false;
        this.btn_text = "Save";
        this.toastr.error("Please enter unit title");
        return
      }

      else if (content_unit.language == null) {
        this.is_btn_disabled = false;
        this.btn_text = "Save";
        this.toastr.error("Please select the language");
        return
      } else if (content_unit.language == "") {
        this.is_btn_disabled = false;
        this.btn_text = "Save";
        this.toastr.error("Please select the language");
        return
      } else if (content_unit.keyword == null) {
        this.is_btn_disabled = false;
        this.btn_text = "Save";
        this.toastr.error("Please enter keyword");
        return
      } else if (content_unit.keyword == "") {
        this.is_btn_disabled = false;
        this.btn_text = "Save";
        this.toastr.error("Please enter keyword");
        return
      }

      else if (content_unit.content_type == null) {
        this.is_btn_disabled = false;
        this.btn_text = "Save";
        this.toastr.error("Please select content type");
        return
      } else if (content_unit.content_type == "") {
        this.is_btn_disabled = false;
        this.btn_text = "Save";
        this.toastr.error("Please select content type");
        return
      } else {
        if (this.files.length == 0) {
          this.toastr.error("PLease select the file");
          this.is_btn_disabled = false;
          this.btn_text = "Save";
          return
        } else if (this.files[0][0]['size'] > 100000000) {
          this.is_btn_disabled = false;
          this.btn_text = "Save";
          this.toastr.error("Maximum file size allowed is 100MB");
          return
        }

        else if (this.files[0][0]['type'] == "image/jpeg" || this.files[0][0]['type'] == "image/png" || this.files[0][0]['type'] == "image/jpg" || this.files[0][0]['type'] == "application/pdf" || this.files[0][0]['type'] == "video/mp4" || this.files[0][0]['type'] == "video/avi" || this.files[0][0]['type'] == "PDF") {
          this.is_btn_disabled = true;
          this.btn_text = "Saving...";
          var cousre_id1 = JSON.stringify(localStorage.getItem("course_id"));
          cousre_id1 = cousre_id1.substring(1, cousre_id1.length - 1);
    
          content_unit.course_id = cousre_id1;
          content_unit.uploaded_by = JSON.parse(localStorage.getItem("login_object")!).id;
          content_unit.status = true;
          content_unit.deleted = false;
          content_unit.content_name = this.files[0][0]["name"];
          const result = await Storage.put(this.course_name.trim()+"/course_units/unit_"+content_unit.unit_no+"/"+this.files[0][0]["name"], this.files[0][0], {
            level: 'public',
            contentType: this.files[0][0]['type']

          });

          let key = result["key"];
          const img_url = await Storage.get(key);
         
          content_unit.content_url = img_url.toString();
          for (var i = 0; i < content_unit.keyword.length; i++) {
            this.content_unit_keyword.push(content_unit.keyword[i]["value"]);
          }
 
          content_unit.keyword = this.content_unit_keyword.toString();
    
          const newContent = await API.graphql({ query: mutations.createContentUnit, variables: { input: content_unit } });
          this.createForm.reset();
          this.btn_text = "Create Unit";
          this.is_btn_disabled = false;
          $("#addunitModal").modal('hide');
          this.toastr.success("Unit Created Successfully");
          // window.location.reload();
          this.getContentUnit(this.course_id);
        }
        else {
       
          this.is_btn_disabled = false;
          this.btn_text = "Save";
          this.toastr.error("Please upload a valid file");
        }
      }
    }
  }


  public dounitNumberExists(unit_num: any) {
    var flag = 0;
    for (var i = 0; i < this.content_units.length; i++) {
      if (this.content_units[i]["unit_no"] == unit_num) {
        flag = 1;

        return flag;
      }
    }
    return flag;
  }


  public dounitNumberForEditExists(prev_unit_num: any, unit_num: any) {
    var flag = 0;
    if (prev_unit_num == unit_num) {
      return flag;
    }
    for (var i = 0; i < this.content_units.length; i++) {
      if (this.content_units[i]["unit_no"] == unit_num) {
        flag = 1;

        return flag;
      }
    }
    return flag;
  }

  //---------------function to open a add unit modal section------------------

  public openModal() {
    this.model_title = "Add Unit";
    this.btn_text = "Save ";
    $("#unit_file_name").html("Choose File");
    this.createForm.reset();
    localStorage.setItem("is_edit_unit", "false");
    $("#addunitModal").modal('show');
  }


  //---------------function to open a close unit modal section------------------

  public closeModal() {
    this.createForm.reset();
    this.files = [];
  }

  //-----------function to set is_edit_unit variable which is used to identify if a new course unit is added or a course is updated------

  public setStatus(status: any) {
    if (status == "true") {
      localStorage.setItem("is_edit_unit", "true");
    } else {
      localStorage.setItem("is_edit_unit", "false");
    }
  }



  //-----------------function to set all the feilds of a course unit that has to be updated-----------

  async updateUnit(id: any) {
  
    this.setStatus("true");
    this.model_title = "Edit unit";
    this.btn_text = "Save ";
    localStorage.setItem("is_edit_unit", "true");
    const res = await API.graphql({ query: queries.getContentUnit, variables: { id } });
 
    let key = res["data"]["getContentUnit"]["keyword"].split(",");

    // -------------Setting edit object---------------------------

    let edit_object = {
      "content_name": res["data"]["getContentUnit"]["content_name"],
      "content_type": res["data"]["getContentUnit"]["content_type"],
      "content_url": res["data"]["getContentUnit"]["content_url"],
      "id": res["data"]["getContentUnit"]["id"],
      "version": res["data"]["getContentUnit"]["_version"]

    }
    localStorage.setItem("edit_unit_object", JSON.stringify(edit_object));
    this.createForm.controls['title'].setValue(res["data"]["getContentUnit"]["title"]);
    this.createForm.controls['keyword'].setValue(key);
    this.createForm.controls['content_type'].setValue(res["data"]["getContentUnit"]["content_type"]);
    this.createForm.controls['language'].setValue(res["data"]["getContentUnit"]["language"]);
    this.createForm.controls['unit_no'].setValue(res["data"]["getContentUnit"]["unit_no"]);
    localStorage.setItem("unit_number", res["data"]["getContentUnit"]["unit_no"]);
    $("#unit_file_name").html(res["data"]["getContentUnit"]["content_name"]);
    $("#addunitModal").modal('show');

  }


  // function to delete a particular course unit
  async deleteUnit(id: any) {
    const deleteObj = {
      id: id,
      deleted: true,
      status: false,
    };
    const deletedRes = await API.graphql({ query: mutations.updateContentUnit, variables: { input: deleteObj } });
    if(deletedRes["data"]["updateContentUnit"]["deleted"]){
      this.toastr.success("Course deleted succesfuly");
    }else{
      this.toastr.error("Something went wrong");
    }
    this.getContentUnit(this.course_id);   
  }

  // function to update the active status of a particular course unit
  async updateUnitStatus(status: any, id: any) {
    this.is_disabled = true;
 
    if (status == true) {
      status = false;
    } else {
      status = true;
    }
    const getRes = await API.graphql({ query: queries.getContentUnit, variables: { id: id } });
    const updateObj = {
      id: id,
      status: status
    };
    const statusRes = await API.graphql({ query: mutations.updateContentUnit, variables: { input: updateObj } });
    this.getContentUnit(getRes["data"]["getContentUnit"]["course_id"]);
    if (status == true) {
      this.toastr.success("Unit activated succesfuly");
    } else {
      this.toastr.success("Unit deactivated succesfuly");
    }
    this.is_disabled = false;

  }
}
