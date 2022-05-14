import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {SsrService} from '../service/ssr.service';
import { staticSSR } from '../_helper/staticSSR.model';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeLayoutComponent } from '../home-layout/home-layout.component';

@Component({
  selector: 'app-ssr-form',
  templateUrl: './ssr-form.component.html',
  styleUrls: ['./ssr-form.component.scss']
})
export class SsrFormComponent implements OnInit {

  filterForm: FormGroup;
  filterFields: any;
  ssrForm = this.fb.group({});
  // ssrForm = new FormGroup({
  //   SSR: new FormControl(''),
  //   Airline:  new FormControl(''),
  //   Remarks:  new FormControl(''),
  //   Details:  new FormControl('')
  // });
  constructor(public dialogRef: MatDialogRef<HomeLayoutComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              public dialog: MatDialog,
              private fb: FormBuilder,
              private service: SsrService) { }

  ngOnInit(): void {
    this.generateFilterForm();
  }

  generateFilterForm(): FormGroup {
    this.service.getSsr().subscribe(data=>{
      this.filterFields = data;
      console.log(this.filterFields)
    
    this.filterFields.forEach(field => {
      this.ssrForm.addControl(field.ssrcode, new FormControl(""));
    });
  })
    
    console.log(this.ssrForm);
    return this.ssrForm;
  }


}

