

export class Trip {
    trip_id: number;
    flightId: number;
    departureDateTime: string; 
    arrivalDateTime: string; 
    fromAirportId: number;
    toAirportId: number;
    cost: number;

    constructor() {
        this.trip_id = 0;
        this.flightId = 0;
        this.departureDateTime = '';
        this.arrivalDateTime = '';
        this.fromAirportId = 0;
        this.toAirportId = 0;
        this.cost = 0;
    }
}
