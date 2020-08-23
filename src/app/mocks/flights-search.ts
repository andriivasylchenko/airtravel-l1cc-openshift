// mock of flights search using Amadeus APIs

export const flightsSearchMock = {
    "meta" : {
      "count" : 1,
      "links" : {
        "self" : "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=CHI&destinationLocationCode=NYC&departureDate=2021-03-01&returnDate=2021-03-19&adults=1&max=1"
      }
    },
    "data" : [ {
      "type" : "flight-offer",
      "id" : "1",
      "source" : "GDS",
      "instantTicketingRequired" : false,
      "nonHomogeneous" : false,
      "oneWay" : false,
      "lastTicketingDate" : "2020-08-19",
      "numberOfBookableSeats" : 9,
      "itineraries" : [ {
        "duration" : "PT2H10M",
        "segments" : [ {
          "departure" : {
            "iataCode" : "ORD",
            "terminal" : "2",
            "at" : "2021-03-01T18:45:00"
          },
          "arrival" : {
            "iataCode" : "LGA",
            "terminal" : "D",
            "at" : "2021-03-01T21:55:00"
          },
          "carrierCode" : "DL",
          "number" : "1381",
          "aircraft" : {
            "code" : "221"
          },
          "operating" : {
            "carrierCode" : "DL"
          },
          "duration" : "PT2H10M",
          "id" : "1",
          "numberOfStops" : 0,
          "blacklistedInEU" : false
        } ]
      }, {
        "duration" : "PT2H38M",
        "segments" : [ {
          "departure" : {
            "iataCode" : "LGA",
            "terminal" : "D",
            "at" : "2021-03-19T14:10:00"
          },
          "arrival" : {
            "iataCode" : "ORD",
            "terminal" : "2",
            "at" : "2021-03-19T15:48:00"
          },
          "carrierCode" : "DL",
          "number" : "1518",
          "aircraft" : {
            "code" : "221"
          },
          "operating" : {
            "carrierCode" : "DL"
          },
          "duration" : "PT2H38M",
          "id" : "2",
          "numberOfStops" : 0,
          "blacklistedInEU" : false
        } ]
      } ],
      "price" : {
        "currency" : "EUR",
        "total" : "171.10",
        "base" : "154.00",
        "fees" : [ {
          "amount" : "0.00",
          "type" : "SUPPLIER"
        }, {
          "amount" : "0.00",
          "type" : "TICKETING"
        } ],
        "grandTotal" : "171.10"
      },
      "pricingOptions" : {
        "fareType" : [ "PUBLISHED" ],
        "includedCheckedBagsOnly" : false
      },
      "validatingAirlineCodes" : [ "DL" ],
      "travelerPricings" : [ {
        "travelerId" : "1",
        "fareOption" : "STANDARD",
        "travelerType" : "ADULT",
        "price" : {
          "currency" : "EUR",
          "total" : "171.10",
          "base" : "154.00"
        },
        "fareDetailsBySegment" : [ {
          "segmentId" : "1",
          "cabin" : "ECONOMY",
          "fareBasis" : "VA7SB4BQ",
          "brandedFare" : "BASICECON",
          "class" : "E",
          "includedCheckedBags" : {
            "quantity" : 0
          }
        }, {
          "segmentId" : "2",
          "cabin" : "ECONOMY",
          "fareBasis" : "XAVQA0BQ",
          "brandedFare" : "BASICECON",
          "class" : "E",
          "includedCheckedBags" : {
            "quantity" : 0
          }
        } ]
      } ]
    },
  
    {
      "type": "flight-offer",
      "id": "1",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2020-08-21",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT2H3M",
          "segments": [
            {
              "departure": {
                "iataCode": "ORD",
                "terminal": "1",
                "at": "2021-03-01T09:00:00"
              },
              "arrival": {
                "iataCode": "LGA",
                "terminal": "B",
                "at": "2021-03-01T12:03:00"
              },
              "carrierCode": "UA",
              "number": "2116",
              "aircraft": {
                "code": "320"
              },
              "operating": {
                "carrierCode": "UA"
              },
              "duration": "PT2H3M",
              "id": "1",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        },
        {
          "duration": "PT2H24M",
          "segments": [
            {
              "departure": {
                "iataCode": "LGA",
                "terminal": "B",
                "at": "2021-03-19T07:00:00"
              },
              "arrival": {
                "iataCode": "ORD",
                "terminal": "1",
                "at": "2021-03-19T08:24:00"
              },
              "carrierCode": "UA",
              "number": "1958",
              "aircraft": {
                "code": "319"
              },
              "operating": {
                "carrierCode": "UA"
              },
              "duration": "PT2H24M",
              "id": "2",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "217.10",
        "base": "200.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "217.10"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": false
      },
      "validatingAirlineCodes": [
        "UA"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "217.10",
            "base": "200.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "1",
              "cabin": "ECONOMY",
              "fareBasis": "KAA4PHDN",
              "brandedFare": "ECONOMY",
              "class": "K",
              "includedCheckedBags": {
                "quantity": 0
              }
            },
            {
              "segmentId": "2",
              "cabin": "ECONOMY",
              "fareBasis": "KAA4PHDN",
              "brandedFare": "ECONOMY",
              "class": "K",
              "includedCheckedBags": {
                "quantity": 0
              }
            }
          ]
        }
      ]
    } ],
    "dictionaries" : {
      "locations" : {
        "ORD" : {
          "cityCode" : "CHI",
          "countryCode" : "US"
        },
        "LGA" : {
          "cityCode" : "NYC",
          "countryCode" : "US"
        }
      },
      "aircraft" : {
        "221" : "AIRBUS A220-100",
        "319": "AIRBUS A319",
        "320": "AIRBUS A320"
      },
      "currencies" : {
        "EUR" : "EURO"
      },
      "carriers" : {
        "DL" : "DELTA AIR LINES",
        "UA": "UNITED AIRLINES"
      }
    }
  };

