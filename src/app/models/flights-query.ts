export interface FlightsQuery {
    originLocationCode: string, 
    destinationLocationCode: string, 
    departureDate: string, 
    returnDate: string, 
    adults: number, 
    max: number, 
    children?: number, 
    infants?: number, 
    travelClass?: 'ECONOMY' | 'PREMIUM_ECONOMY' | 'BUSINESS' | 'FIRST', 
    includedAirlineCodes?: string, 
    excludedAirlineCodes?: string, 
    nonStop?: boolean, 
    currencyCode?: string, 
    maxPrice?: number
}


