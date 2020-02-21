/**
 * Catapult REST API Reference
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.15
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

export class PaymentsDTO {
    'receiver': string;
    'amount': Array<number>;
    'height': Array<number>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "receiver",
            "baseName": "receiver",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Array<number>"
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "Array<number>"
        }    ];

    static getAttributeTypeMap() {
        return PaymentsDTO.attributeTypeMap;
    }
}
