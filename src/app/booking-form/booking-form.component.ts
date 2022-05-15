import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { MatVerticalStepper } from '@angular/material/stepper';
import { DomSanitizer } from '@angular/platform-browser';
import { BookingService } from '../service/booking.service';
import { SsrService } from '../service/ssr.service';
import { SsrFormComponent } from '../ssr-form/ssr-form.component';
import { login } from '../_helper/login.model';
import {passenger} from '../_helper/passenger.model';
import { staticSSR } from '../_helper/staticSSR.model';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup
  panelOpenState = true;
  filterForm: FormGroup;
  filterFields: any;
  ssrForm = this.fb.group({});
  step = 0;
  currentUser: login;
  passengerDetails:Array<passenger>
  ssrFields:staticSSR[]=[];
  isAddMorePassengers=false;
  passengerCounter=1;
  coPassengerInfo:passenger;

  // this.passengerDetails=data.filter(user => user.smId.localeCompare(this.currentUser.ssm) === 0)
  setStep(index: number) {
    this.step = index;
    if(index == 2){
      this.bookingService.getRecomendedSsr(this.currentUser.ssm).subscribe(data=>{
        console.log(data)
        this.filterFields = data;
        this.filterFields.forEach(field => {
          this.ssrForm.addControl(field.ssrcode, new FormControl(""));
          this.ssrFields.push(field);        
        }
        );
    })
  }
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  constructor(private _formBuilder: FormBuilder,
              private dialog: MatDialog,
              private fb: FormBuilder,
              private service: SsrService,
              private bookingService: BookingService,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
                this.matIconRegistry.addSvgIcon(
                  'CHLD',
                  this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/CHLD.svg')
                );
              }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
  //   this.service.getSsr().subscribe(data=>{
  //     this.filterFields = data;
  //     console.log(this.filterFields)
    
  //   this.filterFields.forEach(field => {
  //     this.ssrForm.addControl(field.ssrcode, new FormControl(""));
  //   });
  // })
    
    console.log(this.ssrForm);
    return this.ssrForm;
  }
  openSsrForm() {
    const dialogRef = this.dialog.open(SsrFormComponent, {
      width: 'auto',
      data: {
              flight:""
           }});

    dialogRef.afterClosed().subscribe(result => {
    });
    return false;
  }
  addPassengers(){
    this.isAddMorePassengers=true;
    this.passengerCounter++;
  }
  save(name:String,gender:String,skyMiles:String,
       address:String,email:String,phone:String){
    this.coPassengerInfo={smId:skyMiles,gender:gender,name:name,
      dob:new Date('10/05/1992'),address:address,email:email,phone:phone}
      this.isAddMorePassengers=false;
    console.log(this.coPassengerInfo)
  }
}
