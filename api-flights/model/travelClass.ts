/**
 * Flight Offers Search
 *  Before using this API, we recommend you read our **[Authorization Guide](https://developers.amadeus.com/self-service/apis-docs/guides/authorization)** for more information on how to generate an access token.   Please also be aware that our test environment is based on a subset of the production, if you are not returning any results try with big cities/airports like LON (London) or NYC (New-York).
 *
 * OpenAPI spec version: 2.3.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/**
 * quality of service offered in the cabin where the seat is located in this flight. Economy, premium economy, business or first class
 */
export type TravelClass = 'ECONOMY' | 'PREMIUM_ECONOMY' | 'BUSINESS' | 'FIRST';

export const TravelClass = {
    ECONOMY: 'ECONOMY' as TravelClass,
    PREMIUMECONOMY: 'PREMIUM_ECONOMY' as TravelClass,
    BUSINESS: 'BUSINESS' as TravelClass,
    FIRST: 'FIRST' as TravelClass
};
