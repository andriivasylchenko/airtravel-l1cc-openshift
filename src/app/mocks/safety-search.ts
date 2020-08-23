// mock of safety score search using Amadeus APIs

export const safetyLocationSearchMock = {
    "data":[
       {
          "type":"safety-rated-location",
          "id":"Q930206666",
          "self":{
             "type":"https://test.api.amadeus.com/v1/safety/safety-rated-locations/Q930206666",
             "methods":[
                "GET"
             ]
          },
          "subType":"CITY",
          "name":"New York",
          "geoCode":{
             "latitude":40.755653,
             "longitude":-73.985303
          },
          "safetyScores":{
             "lgbtq":35,
             "medical":73,
             "overall":39,
             "physicalHarm":30,
             "politicalFreedom":40,
             "theft":27,
             "women":26
          }
       }
    ],
    "meta":{
       "count":79,
       "links":{
          "self":"https://test.api.amadeus.com/v1/safety/safety-rated-locations?latitude=40.71417\u0026longitude=-74.00583\u0026page%5Blimit%5D=1\u0026radius=20",
          "next":"https://test.api.amadeus.com/v1/safety/safety-rated-locations?latitude=40.71417\u0026longitude=-74.00583\u0026page%5Blimit%5D=1\u0026page%5Boffset%5D=1\u0026radius=20",
          "last":"https://test.api.amadeus.com/v1/safety/safety-rated-locations?latitude=40.71417\u0026longitude=-74.00583\u0026page%5Blimit%5D=1\u0026page%5Boffset%5D=79\u0026radius=20",
          "first":"https://test.api.amadeus.com/v1/safety/safety-rated-locations?latitude=40.71417\u0026longitude=-74.00583\u0026page%5Blimit%5D=1\u0026page%5Boffset%5D=0\u0026radius=20"
       }
    }
 }