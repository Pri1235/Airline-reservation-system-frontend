

export class Trip {
    trip_id: number;
    flight: any;
    departureDateTime: string; 
    arrivalDateTime: string; 
    fromAirport: any;
    toAirport: any;
    cost: number;

    constructor() {
        this.trip_id = 0;
        this.flight = null;
        this.departureDateTime = '';
        this.arrivalDateTime = '';
        this.fromAirport = null;
        this.toAirport = null;
        this.cost = 0;
    }
}
