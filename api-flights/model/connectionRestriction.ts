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
 * Restriction towards number of connections.
 */
export interface ConnectionRestriction { 
    /**
     * The maximal number of connections for each itinerary. Value can be 0, 1 or 2.
     */
    maxNumberOfConnections?: number;
    /**
     * Allow to change airport during connection
     */
    airportChangeAllowed?: boolean;
    /**
     * This option allows the single segment to have one or more intermediate stops (technical stops).
     */
    technicalStopsAllowed?: boolean;
}