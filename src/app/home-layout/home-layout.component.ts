import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import {Component, ViewChild, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Flights} from '../_helper/flight.model'
import { FirebaseService } from '../service/firebase.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
  providers: []
})
export class HomeLayoutComponent implements OnInit {
    displayedColumns: string[] = ['Company', 'Departure', 'Arrival', 'Destination' , 'Pickup' , 'Actions' ,'Services'];
  Flight: Flights[];
  resultsLength = 0;
  filteredresultsLength = 0;
  isLoadingResults = true;
  fliteredFlight: Flights[];
  filter = true;
  flightID = [];
  serviceList = [];
  barchart = [];
  currentDate = new Date();
  today: string;
  dataSource : any
  example = 'Hi'
 
  constructor(private router: Router,
              public dialog: MatDialog,
              private snackBar: MatSnackBar,
              private firebaseService: FirebaseService,
              private route:Router,
              private activatedRoute:ActivatedRoute,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
                this.matIconRegistry.addSvgIcon(
                  'DIPB',
                  this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/images/DIPB.svg')
                );
                this.matIconRegistry.addSvgIcon(
                  'CHLD',
                  this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/CHLD.svg')
                );
                this.matIconRegistry.addSvgIcon(
                  'SSR',
                  this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/ssr.svg')
                );
               };
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit() {
    this.dataSource = new MatTableDataSource<Flights>(this.Flight);
    this.firebaseService.getFlights().subscribe(
          data => {
            this.Flight = data;
            console.log(this.Flight);
            this.Flight.forEach(value => {
              this.flightID.push(value.flightId);
              if(value.specialservice)
              this.serviceList.push(value.specialservice.serviceName)
            });
            this.resultsLength = this.Flight.length;
            this.dataSource = new MatTableDataSource<Flights>(this.Flight);
            this.isLoadingResults = false;
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
          });
  }

    routeSsr(){
      this.route.navigate(['./ssr-form'],{relativeTo: this.activatedRoute});
    }
  }
  


