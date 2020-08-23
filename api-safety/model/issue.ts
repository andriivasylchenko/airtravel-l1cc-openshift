/**
 * Safe Place and Authorization
 *  This API incorporates Auth flow to obtain access token. For more details visit **[Authorization Guide](https://developers.amadeus.com/self-service/apis-docs/guides/authorization)**.     Please also be aware that our test environment is based on a subset of the production, this API in test only returns a few selected cities. You can find the list in our **[data collection](https://github.com/amadeus4dev/data-collection)**.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { IssueSource } from './issueSource';


export interface Issue { 
    /**
     * the HTTP status code applicable to this error
     */
    status?: number;
    /**
     * an application-specific error code
     */
    code?: number;
    /**
     * a short summary of the error
     */
    title?: string;
    /**
     * explanation of the error
     */
    detail?: string;
    source?: IssueSource;
}
