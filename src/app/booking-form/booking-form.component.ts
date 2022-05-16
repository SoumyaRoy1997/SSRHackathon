import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  passengerDetails:passenger[] = [];
  ssrFields:staticSSR[]=[];
  isAddMorePassengers=false;
  passengerCounter=1;
  coPassengerInfo:passenger;
  submitted=true;
  isDisabled=false;
  passengerAdded=0;
  proceed=false;
  skyMilesList:String[]=[]
  pnrInfo:String;
  showSsr=false;
  ssrList:String[]=[]
  flightInfo: [
    {
    "origin": "ATL",
    "destination": "MSP",
    "carrier": "DL",
    "travelDate": "15-06-2022",
    "flightNo": "DL2847"
    }]

    form = new FormGroup({
      ssrChoice: new FormArray([
         new FormControl(true),
         new FormControl(false),
      ])
   })
  
  // this.passengerDetails=data.filter(user => user.smId.localeCompare(this.currentUser.ssm) === 0)
  setStep(index: number) {
    this.step = index;
    if(index == 1){
      this.bookingService.getRecomendedSsr(this.currentUser.ssm).subscribe(data=>{
        console.log(data)
        this.filterFields = data;
        this.filterFields.forEach(field => {
          this.ssrForm.addControl(field.ssrcode, new FormControl(""));
          this.ssrFields.push(field);        
        }
        );
    })
    // this.filterFields=this.bookingService.getRecomendedSsr(this.currentUser.ssm)
    // this.filterFields.forEach(field => {
    //          this.ssrForm.addControl(field.ssrcode, new FormControl(""));
    //          this.ssrFields.push(field);        
    //        })
  }
  }
  

  nextStep() {
    this.step++;
    if(this.step == 3){
      const requestObject = JSON.stringify({"smId":this.currentUser.ssm,
                                            "pnrInfo":JSON.stringify({"pnr":(Math.random().toString(36).substr(2, 6)).toUpperCase(),"passengerInfo":this.passengerDetails,"flightInfo":this.flightInfo}),
                                            "skymiles":this.skyMilesList
                                          })
    
    console.log(requestObject);
                                          this.bookingService.postData(requestObject);                                       
    }
    
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
              private domSanitizer: DomSanitizer,) {
                this.matIconRegistry.addSvgIcon(
                  'CHLD',
                  this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/chld.svg')
                );
                this.matIconRegistry.addSvgIcon(
                  'INFT',
                  this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/inft.svg')
                );
                this.matIconRegistry.addSvgIcon(
                  'FQTU',
                  this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/fqtu.svg')
                );
                this.matIconRegistry.addSvgIcon(
                  'AVML',
                  this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/avml1.svg')
                );
                this.matIconRegistry.addSvgIcon(
                  'VGML',
                  this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/vgml.svg')
                );
                this.matIconRegistry.addSvgIcon(
                  'FQTS',
                  this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/fqts.svg')
                );
                this.matIconRegistry.addSvgIcon(
                  'BLND',
                  this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/blnd.svg')
                );
                this.matIconRegistry.addSvgIcon(
                  'PNUT',
                  this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/PNUT.svg')
                );
                this.matIconRegistry.addSvgIcon(
                  'DEAF',
                  this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/deaf.svg')
                );
                this.matIconRegistry.addSvgIcon(
                  'WCHS',
                  this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/wchs.svg')
                );
                this.matIconRegistry.addSvgIcon(
                  'BAGN',
                  this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/BAGN.svg')
                );
                this.matIconRegistry.addSvgIcon(
                  'CCAR',
                  this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/CCAR.svg')
                );
                this.form = this.fb.group({
                  skills: this.buildSkills()
                });
              }
              buildSkills() {
                const arr = this.ssrFields.map(ssr => {
                  return this.fb.control(true);
                });
                return this.fb.array(arr);
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
      this.passengerDetails.forEach(data=>{
        data.ssr=result
      })
      console.log(result)
    });
    return false;
  }
  addPassengers(){
    this.isAddMorePassengers=true;
    this.passengerCounter++;
  }
  save(name:String,gender:String,skyMiles:String,
       address:String,email:String,phone:String){
    if(!this.isAddMorePassengers){
      this.passengerCounter++;
      this.isDisabled=true
      // this.isAddMorePassengers=!this.isAddMorePassengers
    }
    this.submitted=false;
    this.coPassengerInfo={smId:skyMiles,gender:gender,name:name,
      dob:new Date('10/05/1992'),address:address,email:email,phone:phone,ssr:this.ssrList}
    console.log(this.coPassengerInfo)
    this.passengerAdded=1;
    this.passengerDetails.push(this.coPassengerInfo);
    console.log(this.passengerDetails)
    if(this.passengerCounter>2)
    this.isAddMorePassengers=!this.isAddMorePassengers
    this.skyMilesList.push(skyMiles);
  }
  savePrimary(name:String,gender:String,skyMiles:String,
    address:String,email:String,phone:String){
      this.coPassengerInfo={smId:skyMiles,gender:gender,name:name,
        dob:new Date('10/05/1992'),address:address,email:email,phone:phone,ssr:this.ssrList}
        this.passengerDetails.push(this.coPassengerInfo);
        this.proceed=true;
        this.skyMilesList.push(skyMiles);
    }
    getRecommendedSSR(ssm: string){
      this.showSsr=true;
      this.bookingService.getRecomendedSsr(ssm).subscribe(data=>{
        console.log(data)
        this.filterFields = data;
        this.filterFields.forEach(field => {
          this.ssrForm.addControl(field.ssrcode, new FormControl(""));
          this.ssrFields.push(field);        
        }
        );
    })
    }
    submit(value) {
      console.log(value)
    }
    addSsr(ssrValue:String){
      this.ssrList.push(ssrValue);
    }
}
