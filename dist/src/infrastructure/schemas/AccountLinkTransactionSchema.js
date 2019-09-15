"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright 2019 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Schema_1 = require("./Schema");
/**
 * @module schema/AccountLinkTransaction
 */
/**
 * Account Link schema
 * @const {module:schema/Schema}
 */
const schema = new Schema_1.Schema([
    Schema_1.uint('size'),
    Schema_1.array('signature'),
    Schema_1.array('signer'),
<<<<<<< HEAD
    Schema_1.uint('version'),
=======
    Schema_1.ushort('version'),
>>>>>>> jwt
    Schema_1.ushort('type'),
    Schema_1.array('fee', Schema_1.TypeSize.INT),
    Schema_1.array('deadline', Schema_1.TypeSize.INT),
    Schema_1.array('remoteAccountKey'),
    Schema_1.ubyte('linkAction')
]);
exports.default = schema;
//# sourceMappingURL=AccountLinkTransactionSchema.js.map