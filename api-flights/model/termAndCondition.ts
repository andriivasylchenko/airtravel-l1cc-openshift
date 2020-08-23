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
import { Description } from './description';


export interface TermAndCondition { 
    /**
     * This defines what type of modification is concerned in this rule.
     */
    category?: TermAndCondition.CategoryEnum;
    circumstances?: string;
    notApplicable?: boolean;
    maxPenaltyAmount?: string;
    descriptions?: Array<Description>;
}
export namespace TermAndCondition {
    export type CategoryEnum = 'REFUND' | 'EXCHANGE' | 'REVALIDATION' | 'REISSUE' | 'REBOOK' | 'CANCELLATION';
    export const CategoryEnum = {
        REFUND: 'REFUND' as CategoryEnum,
        EXCHANGE: 'EXCHANGE' as CategoryEnum,
        REVALIDATION: 'REVALIDATION' as CategoryEnum,
        REISSUE: 'REISSUE' as CategoryEnum,
        REBOOK: 'REBOOK' as CategoryEnum,
        CANCELLATION: 'CANCELLATION' as CategoryEnum
    };
}
