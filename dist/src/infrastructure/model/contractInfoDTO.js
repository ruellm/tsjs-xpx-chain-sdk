"use strict";
// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
class ContractInfoDTO {
    static getAttributeTypeMap() {
        return ContractInfoDTO.attributeTypeMap;
    }
}
ContractInfoDTO.discriminator = undefined;
ContractInfoDTO.attributeTypeMap = [
    {
        "name": "contract",
        "baseName": "contract",
        "type": "ContractDTO"
    }
];
exports.ContractInfoDTO = ContractInfoDTO;
//# sourceMappingURL=contractInfoDTO.js.map