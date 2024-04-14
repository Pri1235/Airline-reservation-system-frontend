export class Flight {
    flight_id: number;
    flight_name: string;
    flight_number: number;
    airlineId: number; 
    aircraft_id: number; 
    trip: any; 
  
    constructor() {
      this.flight_id = 0;
      this.flight_name = '';
      this.flight_number = 0;
      this.airlineId = 0;
      this.aircraft_id = 0;
      this.trip = null;
    }
  }