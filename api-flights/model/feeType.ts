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
 * type of fee
 */
export type FeeType = 'TICKETING' | 'FORM_OF_PAYMENT' | 'SUPPLIER';

export const FeeType = {
    TICKETING: 'TICKETING' as FeeType,
    FORMOFPAYMENT: 'FORM_OF_PAYMENT' as FeeType,
    SUPPLIER: 'SUPPLIER' as FeeType
};
