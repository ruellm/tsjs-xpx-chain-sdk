/**
<<<<<<< HEAD
 * Catapult REST Endpoints
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.16
=======
 * Catapult REST API Reference
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.15
>>>>>>> jwt
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { RolesTypeEnum } from './rolesTypeEnum';
export declare class NodeInfoDTO {
    /**
    * The public key used to identify the node.
    */
    'publicKey': string;
    /**
    * The port used for the communication.
    */
    'port': number;
    'networkIdentifier': number;
    /**
    * The version of the application.
    */
    'version': number;
    'roles': RolesTypeEnum;
    /**
    * The IP address of the endpoint.
    */
    'host': string;
    /**
    * The name of the node.
    */
    'friendlyName': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
