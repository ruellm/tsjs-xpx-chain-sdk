"use strict";
// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
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
class NamespaceMetadataDTOAllOf {
    static getAttributeTypeMap() {
        return NamespaceMetadataDTOAllOf.attributeTypeMap;
    }
}
NamespaceMetadataDTOAllOf.discriminator = undefined;
NamespaceMetadataDTOAllOf.attributeTypeMap = [
    {
        "name": "metadataType",
        "baseName": "metadataType",
        "type": "number"
    },
    {
        "name": "metadataId",
        "baseName": "metadataId",
        "type": "Array<number>"
    }
];
exports.NamespaceMetadataDTOAllOf = NamespaceMetadataDTOAllOf;
//# sourceMappingURL=namespaceMetadataDTOAllOf.js.map