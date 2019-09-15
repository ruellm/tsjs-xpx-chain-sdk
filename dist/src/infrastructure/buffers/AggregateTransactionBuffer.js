"use strict";
/*
 * Copyright 2018 NEM
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
Object.defineProperty(exports, "__esModule", { value: true });
// automatically generated by the FlatBuffers compiler, do not modify
/**
 * @const
 * @namespace
 */
var Catapult = Catapult || {};
/**
 * @const
 * @namespace
 */
Catapult.Buffers = Catapult.Buffers || {};
/**
 * @constructor
 */
Catapult.Buffers.AggregateTransactionBuffer = function () {
    /**
     * @type {flatbuffers.ByteBuffer}
     */
    this.bb = null;
    /**
     * @type {number}
     */
    this.bb_pos = 0;
};
/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Catapult.Buffers.AggregateTransactionBuffer}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.__init = function (i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
};
/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Catapult.Buffers.AggregateTransactionBuffer=} obj
 * @returns {Catapult.Buffers.AggregateTransactionBuffer}
 */
Catapult.Buffers.AggregateTransactionBuffer.getRootAsAggregateTransactionBuffer = function (bb, obj) {
    return (obj || new Catapult.Buffers.AggregateTransactionBuffer).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};
/**
 * @returns {number}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.size = function () {
    var offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
};
/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.signature = function (index) {
    var offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};
/**
 * @returns {number}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.signatureLength = function () {
    var offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};
/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.signatureArray = function () {
    var offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};
/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.signer = function (index) {
    var offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};
/**
 * @returns {number}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.signerLength = function () {
    var offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};
/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.signerArray = function () {
    var offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};
/**
 * @returns {number}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.version = function () {
    var offset = this.bb.__offset(this.bb_pos, 10);
<<<<<<< HEAD
    return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
=======
    return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
>>>>>>> jwt
};
/**
 * @returns {number}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.type = function () {
    var offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
};
/**
 * @param {number} index
 * @returns {number}
 */
<<<<<<< HEAD
Catapult.Buffers.AggregateTransactionBuffer.prototype.maxFee = function (index) {
=======
Catapult.Buffers.AggregateTransactionBuffer.prototype.fee = function (index) {
>>>>>>> jwt
    var offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};
/**
 * @returns {number}
 */
<<<<<<< HEAD
Catapult.Buffers.AggregateTransactionBuffer.prototype.maxFeeLength = function () {
=======
Catapult.Buffers.AggregateTransactionBuffer.prototype.feeLength = function () {
>>>>>>> jwt
    var offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};
/**
 * @returns {Uint32Array}
 */
<<<<<<< HEAD
Catapult.Buffers.AggregateTransactionBuffer.prototype.maxFeeArray = function () {
=======
Catapult.Buffers.AggregateTransactionBuffer.prototype.feeArray = function () {
>>>>>>> jwt
    var offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};
/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.deadline = function (index) {
    var offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};
/**
 * @returns {number}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.deadlineLength = function () {
    var offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};
/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.deadlineArray = function () {
    var offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};
/**
 * @returns {number}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.transactionsSize = function () {
    var offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
};
/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.transactions = function (index) {
    var offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};
/**
 * @returns {number}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.transactionsLength = function () {
    var offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};
/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.transactionsArray = function () {
    var offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};
/**
 * @param {flatbuffers.Builder} builder
 */
Catapult.Buffers.AggregateTransactionBuffer.startAggregateTransactionBuffer = function (builder) {
    builder.startObject(9);
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {number} size
 */
Catapult.Buffers.AggregateTransactionBuffer.addSize = function (builder, size) {
    builder.addFieldInt32(0, size, 0);
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} signatureOffset
 */
Catapult.Buffers.AggregateTransactionBuffer.addSignature = function (builder, signatureOffset) {
    builder.addFieldOffset(1, signatureOffset, 0);
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AggregateTransactionBuffer.createSignatureVector = function (builder, data) {
    builder.startVector(1, data.length, 1);
    for (var i = data.length - 1; i >= 0; i--) {
        builder.addInt8(data[i]);
    }
    return builder.endVector();
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.AggregateTransactionBuffer.startSignatureVector = function (builder, numElems) {
    builder.startVector(1, numElems, 1);
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} signerOffset
 */
Catapult.Buffers.AggregateTransactionBuffer.addSigner = function (builder, signerOffset) {
    builder.addFieldOffset(2, signerOffset, 0);
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AggregateTransactionBuffer.createSignerVector = function (builder, data) {
    builder.startVector(1, data.length, 1);
    for (var i = data.length - 1; i >= 0; i--) {
        builder.addInt8(data[i]);
    }
    return builder.endVector();
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.AggregateTransactionBuffer.startSignerVector = function (builder, numElems) {
    builder.startVector(1, numElems, 1);
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {number} version
 */
Catapult.Buffers.AggregateTransactionBuffer.addVersion = function (builder, version) {
<<<<<<< HEAD
    builder.addFieldInt32(3, version, 0);
=======
    builder.addFieldInt16(3, version, 0);
>>>>>>> jwt
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {number} type
 */
Catapult.Buffers.AggregateTransactionBuffer.addType = function (builder, type) {
    builder.addFieldInt16(4, type, 0);
};
/**
 * @param {flatbuffers.Builder} builder
<<<<<<< HEAD
 * @param {flatbuffers.Offset} maxFeeOffset
 */
Catapult.Buffers.AggregateTransactionBuffer.addMaxFee = function (builder, maxFeeOffset) {
    builder.addFieldOffset(5, maxFeeOffset, 0);
=======
 * @param {flatbuffers.Offset} feeOffset
 */
Catapult.Buffers.AggregateTransactionBuffer.addFee = function (builder, feeOffset) {
    builder.addFieldOffset(5, feeOffset, 0);
>>>>>>> jwt
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
<<<<<<< HEAD
Catapult.Buffers.AggregateTransactionBuffer.createMaxFeeVector = function (builder, data) {
=======
Catapult.Buffers.AggregateTransactionBuffer.createFeeVector = function (builder, data) {
>>>>>>> jwt
    builder.startVector(4, data.length, 4);
    for (var i = data.length - 1; i >= 0; i--) {
        builder.addInt32(data[i]);
    }
    return builder.endVector();
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
<<<<<<< HEAD
Catapult.Buffers.AggregateTransactionBuffer.startMaxFeeVector = function (builder, numElems) {
=======
Catapult.Buffers.AggregateTransactionBuffer.startFeeVector = function (builder, numElems) {
>>>>>>> jwt
    builder.startVector(4, numElems, 4);
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} deadlineOffset
 */
Catapult.Buffers.AggregateTransactionBuffer.addDeadline = function (builder, deadlineOffset) {
    builder.addFieldOffset(6, deadlineOffset, 0);
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AggregateTransactionBuffer.createDeadlineVector = function (builder, data) {
    builder.startVector(4, data.length, 4);
    for (var i = data.length - 1; i >= 0; i--) {
        builder.addInt32(data[i]);
    }
    return builder.endVector();
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.AggregateTransactionBuffer.startDeadlineVector = function (builder, numElems) {
    builder.startVector(4, numElems, 4);
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {number} transactionsSize
 */
Catapult.Buffers.AggregateTransactionBuffer.addTransactionsSize = function (builder, transactionsSize) {
    builder.addFieldInt32(7, transactionsSize, 0);
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} transactionsOffset
 */
Catapult.Buffers.AggregateTransactionBuffer.addTransactions = function (builder, transactionsOffset) {
    builder.addFieldOffset(8, transactionsOffset, 0);
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AggregateTransactionBuffer.createTransactionsVector = function (builder, data) {
    builder.startVector(1, data.length, 1);
    for (var i = data.length - 1; i >= 0; i--) {
        builder.addInt8(data[i]);
    }
    return builder.endVector();
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.AggregateTransactionBuffer.startTransactionsVector = function (builder, numElems) {
    builder.startVector(1, numElems, 1);
};
/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AggregateTransactionBuffer.endAggregateTransactionBuffer = function (builder) {
    var offset = builder.endObject();
    return offset;
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
Catapult.Buffers.AggregateTransactionBuffer.finishAggregateTransactionBufferBuffer = function (builder, offset) {
    builder.finish(offset);
};
<<<<<<< HEAD
/**
 * @param {flatbuffers.Builder} builder
 * @param {number} size
 * @param {flatbuffers.Offset} signatureOffset
 * @param {flatbuffers.Offset} signerOffset
 * @param {number} version
 * @param {number} type
 * @param {flatbuffers.Offset} maxFeeOffset
 * @param {flatbuffers.Offset} deadlineOffset
 * @param {number} transactionsSize
 * @param {flatbuffers.Offset} transactionsOffset
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AggregateTransactionBuffer.createAggregateTransactionBuffer = function (builder, size, signatureOffset, signerOffset, version, type, maxFeeOffset, deadlineOffset, transactionsSize, transactionsOffset) {
    Catapult.Buffers.AggregateTransactionBuffer.startAggregateTransactionBuffer(builder);
    Catapult.Buffers.AggregateTransactionBuffer.addSize(builder, size);
    Catapult.Buffers.AggregateTransactionBuffer.addSignature(builder, signatureOffset);
    Catapult.Buffers.AggregateTransactionBuffer.addSigner(builder, signerOffset);
    Catapult.Buffers.AggregateTransactionBuffer.addVersion(builder, version);
    Catapult.Buffers.AggregateTransactionBuffer.addType(builder, type);
    Catapult.Buffers.AggregateTransactionBuffer.addMaxFee(builder, maxFeeOffset);
    Catapult.Buffers.AggregateTransactionBuffer.addDeadline(builder, deadlineOffset);
    Catapult.Buffers.AggregateTransactionBuffer.addTransactionsSize(builder, transactionsSize);
    Catapult.Buffers.AggregateTransactionBuffer.addTransactions(builder, transactionsOffset);
    return Catapult.Buffers.AggregateTransactionBuffer.endAggregateTransactionBuffer(builder);
};
=======
>>>>>>> jwt
// Exports for Node.js and RequireJS
exports.default = Catapult;
//# sourceMappingURL=AggregateTransactionBuffer.js.map