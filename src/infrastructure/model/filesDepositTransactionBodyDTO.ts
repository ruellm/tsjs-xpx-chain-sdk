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
import { EntityTypeEnum } from './entityTypeEnum';
import { FileDepositDTO } from './fileDepositDTO';
import { TransactionDTO } from './transactionDTO';

export class FilesDepositTransactionBodyDTO extends TransactionDTO {
    'driveKey': string;
    'filesCount': number;
    'files': Array<FileDepositDTO>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "driveKey",
            "baseName": "driveKey",
            "type": "string"
        },
        {
            "name": "filesCount",
            "baseName": "filesCount",
            "type": "number"
        },
        {
            "name": "files",
            "baseName": "files",
            "type": "Array<FileDepositDTO>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FilesDepositTransactionBodyDTO.attributeTypeMap);
    }
}

