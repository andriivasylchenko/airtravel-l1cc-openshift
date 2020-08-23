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
 * an object containing references to the source of the error
 */
export interface IssueSource { 
    /**
     * a JSON Pointer [RFC6901] to the associated entity in the request document
     */
    pointer?: string;
    /**
     * a string indicating which URI query parameter caused the issue
     */
    parameter?: string;
    /**
     * a string indicating an example of the right value
     */
    example?: string;
}
