import {specialservice} from "./special-service.model";

export interface Flights {
    flightId: string;
    company: string;
      departure: string;
    arrival: string;
      destination: string;
      pickup: string;
      passengers: number;
      specialservice: specialservice
  }