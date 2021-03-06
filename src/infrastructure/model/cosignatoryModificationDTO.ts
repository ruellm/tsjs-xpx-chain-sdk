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
import { MultisigModificationTypeEnum } from './multisigModificationTypeEnum';

export class CosignatoryModificationDTO {
    'modificationType': MultisigModificationTypeEnum;
    /**
    * The public key of the cosignatory account.
    */
    'cosignatoryPublicKey': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "modificationType",
            "baseName": "modificationType",
            "type": "MultisigModificationTypeEnum"
        },
        {
            "name": "cosignatoryPublicKey",
            "baseName": "cosignatoryPublicKey",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CosignatoryModificationDTO.attributeTypeMap;
    }
}

