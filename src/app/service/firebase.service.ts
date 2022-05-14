import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Flights } from '../_helper/flight.model';
import {AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection , } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  flightCollection: AngularFirestoreCollection<Flights>;
  flightDoc: AngularFirestoreDocument<Flights>;
  Allflights: Observable<Flights[]>;
  constructor(private http: HttpClient,
              public afs: AngularFirestore) {

  }
  // baseurl = 'https://flight-app-ng.firebaseio.com/AllFlights.json';
  // getFlights() {
  // this.flightCollection = this.afs.collection<Flights>('AllFlights');
  // this.Allflights = this.flightCollection.snapshotChanges().pipe(map(actions => {
  //   return actions.map(action => {
  //     const data = action.payload.doc.data() as Flights;
  //     const flightId = action.payload.doc.data;
  //     return { flightId, ...data };
  //   });
  // }))
  // ;
  // return this.Allflights;
  // }

  getFlights() : Observable<Flights[]>{
    return this.http.get<Flights[]>('assets/flight-data.json');
  }

}
