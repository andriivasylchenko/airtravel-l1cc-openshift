/**
 * Airport & City Search
 *  Before using this API, we recommend you read our **[Authorization Guide](https://developers.amadeus.com/self-service/apis-docs/guides/authorization)** for more information on how to generate an access token.   Please also be aware that our test environment is based on a subset of the production, in test this API only contains data from the United States, Spain, United Kingdom, Germany and India. 
 *
 * OpenAPI spec version: 1.2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface Distance { 
    /**
     * great-circle distance between two locations. This distance thus do not take into account traffic conditions; international boundaries; mountains; water; or other elements that might make the a nearby location hard to reach.
     */
    value?: number;
    /**
     * unit of the distance
     */
    unit?: Distance.UnitEnum;
}
export namespace Distance {
    export type UnitEnum = 'KM' | 'MI';
    export const UnitEnum = {
        KM: 'KM' as UnitEnum,
        MI: 'MI' as UnitEnum
    };
}