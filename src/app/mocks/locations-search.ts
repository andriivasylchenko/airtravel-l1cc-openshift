// mock of locations search using Amadeus APIs

export const originLocationSearchMock = {
    "meta": {
        "count": 1,
        "links": {
            "self": "https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY&keyword=Chicago&page%5Blimit%5D=1"
        }
    },
    "data": [
        {
            "type": "location",
            "subType": "CITY",
            "name": "CHICAGO",
            "detailedName": "CHICAGO/IL/US",
            "id": "CCHI",
            "self": {
                "href": "https://test.api.amadeus.com/v1/reference-data/locations/CCHI",
                "methods": [
                    "GET"
                ]
            },
            "timeZoneOffset": "-05:00",
            "iataCode": "CHI",
            "geoCode": {
                "latitude": 41.85000,
                "longitude": -87.65000
            },
            "address": {
                "cityName": "CHICAGO",
                "cityCode": "CHI",
                "countryName": "UNITED STATES OF AMERICA",
                "countryCode": "US",
                "stateCode": "IL",
                "regionCode": "NAMER"
            },
            "analytics": {
                "travelers": {
                    "score": 62
                }
            }
        }
    ]
};

export const destinationLocationSearchMock = {
    "meta": {
        "count": 1,
        "links": {
            "self": "https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY&keyword=New%20York&page%5Blimit%5D=1"
        }
    },
    "data": [
        {
            "type": "location",
            "subType": "CITY",
            "name": "LAGUARDIA AIRPORT",
            "detailedName": "NEW YORK/NY/US",
            "id": "CNYC",
            "self": {
                "href": "https://test.api.amadeus.com/v1/reference-data/locations/CNYC",
                "methods": [
                    "GET"
                ]
            },
            "timeZoneOffset": "-04:00",
            "iataCode": "NYC",
            "geoCode": {
                "latitude": 40.71417,
                "longitude": -74.00583
            },
            "address": {
                "cityName": "NEW YORK",
                "cityCode": "NYC",
                "countryName": "UNITED STATES OF AMERICA",
                "countryCode": "US",
                "stateCode": "NY",
                "regionCode": "NAMER"
            },
            "analytics": {
                "travelers": {
                    "score": 76
                }
            }
        }
    ]
};