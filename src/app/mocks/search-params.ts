// mock of search params for local usage or calling Amadeus APIs

import moment from 'moment';

export const searchParamsMock = {
    originLocationCode: "Chicago", 
    destinationLocationCode: "New York", 
    departureDate: moment('2021-03-01').toDate(), 
    returnDate: moment('2021-03-19').toDate(), 
    adults: 1,
    max: 1
};

export const defaultSearchParams = {
    originLocationCode: null, 
    destinationLocationCode: null, 
    departureDate: null, 
    returnDate: null, 
    adults: 1,
    max: 1
};