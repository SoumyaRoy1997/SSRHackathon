import { flightInfo } from "./flight-info.model";
import { passenger } from "./passenger.model";

export interface booking{
   "skymiles": Array<String>,
   "passengerInfo": Array<passenger>,
   "FlightInfo": Array<flightInfo>
   }
   