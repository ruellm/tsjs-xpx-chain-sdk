"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright 2018 NEM
 *
<<<<<<< HEAD
 * Licensed under the Apache License, Version 2.0 (the \"License\");
=======
 * Licensed under the Apache License, Version 2.0 (the "License");
>>>>>>> jwt
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
<<<<<<< HEAD
 * distributed under the License is distributed on an \"AS IS\" BASIS,
=======
 * distributed under the License is distributed on an "AS IS" BASIS,
>>>>>>> jwt
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const chai_1 = require("chai");
const CryptoJS = require("crypto-js");
const js_sha3_1 = require("js-sha3");
const format_1 = require("../../src/core/format");
const Listener_1 = require("../../src/infrastructure/Listener");
const TransactionHttp_1 = require("../../src/infrastructure/TransactionHttp");
<<<<<<< HEAD
const RestrictionModificationType_1 = require("../../src/model/account/RestrictionModificationType");
const RestrictionType_1 = require("../../src/model/account/RestrictionType");
=======
const PropertyModificationType_1 = require("../../src/model/account/PropertyModificationType");
const PropertyType_1 = require("../../src/model/account/PropertyType");
>>>>>>> jwt
const Mosaic_1 = require("../../src/model/mosaic/Mosaic");
const MosaicId_1 = require("../../src/model/mosaic/MosaicId");
const MosaicNonce_1 = require("../../src/model/mosaic/MosaicNonce");
const MosaicProperties_1 = require("../../src/model/mosaic/MosaicProperties");
const MosaicSupplyType_1 = require("../../src/model/mosaic/MosaicSupplyType");
const AliasActionType_1 = require("../../src/model/namespace/AliasActionType");
<<<<<<< HEAD
const AccountRestrictionModification_1 = require("../../src/model/transaction/AccountRestrictionModification");
const AccountRestrictionTransaction_1 = require("../../src/model/transaction/AccountRestrictionTransaction");
const AggregateTransaction_1 = require("../../src/model/transaction/AggregateTransaction");
const CosignatureSignedTransaction_1 = require("../../src/model/transaction/CosignatureSignedTransaction");
const Deadline_1 = require("../../src/model/transaction/Deadline");
const HashLockTransaction_1 = require("../../src/model/transaction/HashLockTransaction");
const HashType_1 = require("../../src/model/transaction/HashType");
const LockFundsTransaction_1 = require("../../src/model/transaction/LockFundsTransaction");
=======
const AccountPropertyModification_1 = require("../../src/model/transaction/AccountPropertyModification");
const AccountPropertyTransaction_1 = require("../../src/model/transaction/AccountPropertyTransaction");
const AggregateTransaction_1 = require("../../src/model/transaction/AggregateTransaction");
const CosignatureSignedTransaction_1 = require("../../src/model/transaction/CosignatureSignedTransaction");
const Deadline_1 = require("../../src/model/transaction/Deadline");
const HashType_1 = require("../../src/model/transaction/HashType");
>>>>>>> jwt
const MosaicDefinitionTransaction_1 = require("../../src/model/transaction/MosaicDefinitionTransaction");
const MosaicSupplyChangeTransaction_1 = require("../../src/model/transaction/MosaicSupplyChangeTransaction");
const PlainMessage_1 = require("../../src/model/transaction/PlainMessage");
const RegisterNamespaceTransaction_1 = require("../../src/model/transaction/RegisterNamespaceTransaction");
const SecretLockTransaction_1 = require("../../src/model/transaction/SecretLockTransaction");
const SecretProofTransaction_1 = require("../../src/model/transaction/SecretProofTransaction");
<<<<<<< HEAD
=======
const SignedTransaction_1 = require("../../src/model/transaction/SignedTransaction");
>>>>>>> jwt
const TransactionType_1 = require("../../src/model/transaction/TransactionType");
const TransferTransaction_1 = require("../../src/model/transaction/TransferTransaction");
const UInt64_1 = require("../../src/model/UInt64");
const conf_spec_1 = require("../conf/conf.spec");
const model_1 = require("../../src/model/model");
const ModifyMetadataTransaction_1 = require("../../src/model/transaction/ModifyMetadataTransaction");
const assert_1 = require("assert");
const crypto_1 = require("crypto");
<<<<<<< HEAD
const utils_1 = require("../utils");
const utility_1 = require("../../src/core/utils/utility");
=======
>>>>>>> jwt
describe('TransactionHttp', () => {
    let transactionHttp;
    let accountHttp;
    let mosaicHttp;
    let namespaceName;
    let mosaicId;
    let listener;
    let generationHash;
    before(() => {
        transactionHttp = conf_spec_1.ConfTransactionHttp;
        accountHttp = conf_spec_1.ConfAccountHttp;
        mosaicHttp = conf_spec_1.ConfMosaicHttp;
        listener = new Listener_1.Listener(conf_spec_1.APIUrl);
        return listener.open().then(() => {
            return conf_spec_1.NemesisBlockInfo.getInstance().then(nemesisBlockInfo => {
                generationHash = nemesisBlockInfo.generationHash;
            });
        });
    });
    after(() => {
        listener.close();
    });
<<<<<<< HEAD
=======
    const validateTransactionAnnounceCorrectly = (address, done, hash) => {
        const status = listener.status(address).subscribe(error => {
            console.error(error);
            status.unsubscribe();
            sub.unsubscribe();
            return assert_1.fail("Status reported an error.");
        });
        const sub = listener.confirmed(address).subscribe((transaction) => {
            if (hash) {
                if (transaction && transaction.transactionInfo && transaction.transactionInfo.hash === hash) {
                    // console.log(transaction);
                    status.unsubscribe();
                    sub.unsubscribe();
                    return done();
                }
            }
            else {
                status.unsubscribe();
                sub.unsubscribe();
                return done();
            }
        });
    };
    const validatePartialTransactionAnnounceCorrectly = (address, done) => {
        const sub = listener.aggregateBondedAdded(address).subscribe((transaction) => {
            sub.unsubscribe();
            return done();
        });
    };
    const validateCosignaturePartialTransactionAnnounceCorrectly = (address, publicKey, done) => {
        const sub = listener.cosignatureAdded(address).subscribe((signature) => {
            if (signature.signer === publicKey) {
                sub.unsubscribe();
                return done();
            }
        });
    };
    const validatePartialTransactionNotPartialAnyMore = (address, hash, done) => {
        const sub = listener.aggregateBondedRemoved(address).subscribe(txhash => {
            if (txhash === hash) {
                sub.unsubscribe();
                return done();
            }
        });
    };
>>>>>>> jwt
    describe('announce', () => {
        describe('TransferTransaction', () => {
            const transferTransaction = TransferTransaction_1.TransferTransaction.create(Deadline_1.Deadline.create(), conf_spec_1.TestingRecipient.address, [new Mosaic_1.Mosaic(conf_spec_1.ConfNetworkMosaic, UInt64_1.UInt64.fromUint(10))], PlainMessage_1.PlainMessage.create('test-message'), conf_spec_1.ConfNetworkType);
            it('standalone', (done) => {
                const signedTransaction = transferTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
<<<<<<< HEAD
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedTransaction.hash)
                    .then(() => done()).catch((reason) => assert_1.fail(reason));
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, done);
>>>>>>> jwt
                transactionHttp.announce(signedTransaction);
            });
            it('aggregate', (done) => {
                const aggregateTransaction = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [transferTransaction.toAggregate(conf_spec_1.TestingAccount.publicAccount)], conf_spec_1.ConfNetworkType, []);
                const signedTransaction = aggregateTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
<<<<<<< HEAD
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedTransaction.hash)
                    .then(() => done()).catch((reason) => assert_1.fail(reason));
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, done);
>>>>>>> jwt
                transactionHttp.announce(signedTransaction);
            });
        });
    });
<<<<<<< HEAD
    describe('Multisig', () => {
        const transferTransaction = TransferTransaction_1.TransferTransaction.create(Deadline_1.Deadline.create(), conf_spec_1.TestingRecipient.address, [new Mosaic_1.Mosaic(conf_spec_1.ConfNetworkMosaic, UInt64_1.UInt64.fromUint(10))], PlainMessage_1.PlainMessage.create('test-message from multisig account as aggregate bonded'), conf_spec_1.ConfNetworkType);
        it('should send transfer tx as aggregate bonded', (done) => {
            const aggregateBondedTransaction = AggregateTransaction_1.AggregateTransaction.createBonded(Deadline_1.Deadline.create(), [transferTransaction.toAggregate(conf_spec_1.MultisigAccount.publicAccount)], conf_spec_1.ConfNetworkType);
            const signedAggregateBondedTransaction = aggregateBondedTransaction.signWith(conf_spec_1.CosignatoryAccount, generationHash);
            const hashLockTransaction = HashLockTransaction_1.HashLockTransaction.create(Deadline_1.Deadline.create(), new Mosaic_1.Mosaic(conf_spec_1.ConfNetworkMosaic, UInt64_1.UInt64.fromUint(10000000)), UInt64_1.UInt64.fromUint(1000), signedAggregateBondedTransaction, conf_spec_1.ConfNetworkType);
            const signedHashLockTransaction = hashLockTransaction.signWith(conf_spec_1.CosignatoryAccount, generationHash);
            utils_1.validateTransactionConfirmed(listener, conf_spec_1.CosignatoryAccount.address, signedHashLockTransaction.hash)
                .then(() => {
                utils_1.validatePartialTransactionAnnouncedCorrectly(listener, conf_spec_1.MultisigAccount.address, signedAggregateBondedTransaction.hash, (addedAggregateBondedTransaction) => {
                    const cosignatureTransaction = model_1.CosignatureTransaction.create(addedAggregateBondedTransaction);
                    const signedCosignatureTransaction = cosignatureTransaction.signWith(conf_spec_1.Cosignatory2Account);
                    utils_1.validatePartialTransactionNotPartialAnyMore(listener, conf_spec_1.MultisigAccount.address, signedAggregateBondedTransaction.hash, () => {
                        done();
                    });
                    transactionHttp.announceAggregateBondedCosignature(signedCosignatureTransaction);
                });
                transactionHttp.announceAggregateBonded(signedAggregateBondedTransaction);
            }).catch((reason) => assert_1.fail(reason));
            transactionHttp.announce(signedHashLockTransaction);
        });
        it('should send transfer tx as aggregate complete', (done) => {
            const transferTransaction = TransferTransaction_1.TransferTransaction.create(Deadline_1.Deadline.create(), conf_spec_1.TestingRecipient.address, [new Mosaic_1.Mosaic(conf_spec_1.ConfNetworkMosaic, UInt64_1.UInt64.fromUint(10))], PlainMessage_1.PlainMessage.create('test-message from multisig account as aggregate complete'), conf_spec_1.ConfNetworkType);
            const aggregateCompleteTransaction = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [transferTransaction.toAggregate(conf_spec_1.MultisigAccount.publicAccount)], conf_spec_1.ConfNetworkType, []);
            const signedAggregateCompleteTransaction = conf_spec_1.CosignatoryAccount.signTransactionWithCosignatories(aggregateCompleteTransaction, [conf_spec_1.Cosignatory2Account], generationHash);
            utils_1.validateTransactionConfirmed(listener, conf_spec_1.CosignatoryAccount.address, signedAggregateCompleteTransaction.hash)
                .then(() => done()).catch((reason) => assert_1.fail(reason));
            transactionHttp.announce(signedAggregateCompleteTransaction);
        });
    });
    describe('Multilevel Multisig', () => {
        const transferTransaction = TransferTransaction_1.TransferTransaction.create(Deadline_1.Deadline.create(), conf_spec_1.TestingRecipient.address, [new Mosaic_1.Mosaic(conf_spec_1.ConfNetworkMosaic, UInt64_1.UInt64.fromUint(10))], PlainMessage_1.PlainMessage.create('test-message from multilevel multisig account as aggregate bonded'), conf_spec_1.ConfNetworkType);
        it('should send transfer tx as aggregate bonded', (done) => {
            const aggregateBondedTransaction = AggregateTransaction_1.AggregateTransaction.createBonded(Deadline_1.Deadline.create(), [transferTransaction.toAggregate(conf_spec_1.MultilevelMultisigAccount.publicAccount)], conf_spec_1.ConfNetworkType);
            const signedAggregateBondedTransaction = aggregateBondedTransaction.signWith(conf_spec_1.Cosignatory4Account, generationHash);
            const hashLockTransaction = HashLockTransaction_1.HashLockTransaction.create(Deadline_1.Deadline.create(), new Mosaic_1.Mosaic(conf_spec_1.ConfNetworkMosaic, UInt64_1.UInt64.fromUint(10000000)), UInt64_1.UInt64.fromUint(1000), signedAggregateBondedTransaction, conf_spec_1.ConfNetworkType);
            const signedHashLockTransaction = hashLockTransaction.signWith(conf_spec_1.Cosignatory4Account, generationHash);
            utils_1.validateTransactionConfirmed(listener, conf_spec_1.Cosignatory4Account.address, signedHashLockTransaction.hash)
                .then(() => {
                utils_1.validatePartialTransactionAnnouncedCorrectly(listener, conf_spec_1.MultilevelMultisigAccount.address, signedAggregateBondedTransaction.hash, (addedAggregateBondedTransaction) => {
                    const cosignatureTransaction = model_1.CosignatureTransaction.create(addedAggregateBondedTransaction);
                    const signedCosignatureTransaction1 = cosignatureTransaction.signWith(conf_spec_1.Cosignatory2Account);
                    const signedCosignatureTransaction2 = cosignatureTransaction.signWith(conf_spec_1.Cosignatory3Account);
                    utils_1.validatePartialTransactionNotPartialAnyMore(listener, conf_spec_1.MultilevelMultisigAccount.address, signedAggregateBondedTransaction.hash, () => {
                        done();
                    });
                    transactionHttp.announceAggregateBondedCosignature(signedCosignatureTransaction1);
                    transactionHttp.announceAggregateBondedCosignature(signedCosignatureTransaction2);
                });
                transactionHttp.announceAggregateBonded(signedAggregateBondedTransaction);
            }).catch((reason) => assert_1.fail(reason));
            transactionHttp.announce(signedHashLockTransaction);
        });
        it('should send transfer tx as aggregate complete signed at once', (done) => {
            const transferTransaction = TransferTransaction_1.TransferTransaction.create(Deadline_1.Deadline.create(), conf_spec_1.TestingRecipient.address, [new Mosaic_1.Mosaic(conf_spec_1.ConfNetworkMosaic, UInt64_1.UInt64.fromUint(10))], PlainMessage_1.PlainMessage.create('test-message from multilevel multisig account as aggregate complete'), conf_spec_1.ConfNetworkType);
            const aggregateCompleteTransaction = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [transferTransaction.toAggregate(conf_spec_1.MultilevelMultisigAccount.publicAccount)], conf_spec_1.ConfNetworkType, []);
            const signedAggregateCompleteTransaction = conf_spec_1.Cosignatory4Account.signTransactionWithCosignatories(aggregateCompleteTransaction, [conf_spec_1.Cosignatory2Account, conf_spec_1.Cosignatory3Account], generationHash);
            utils_1.validateTransactionConfirmed(listener, conf_spec_1.Cosignatory4Account.address, signedAggregateCompleteTransaction.hash)
                .then(() => done()).catch((reason) => assert_1.fail(reason));
            transactionHttp.announce(signedAggregateCompleteTransaction);
        });
        it('should send transfer tx as aggregate complete not signed at once (offline)', (done) => {
            const transferTransaction = TransferTransaction_1.TransferTransaction.create(Deadline_1.Deadline.create(), conf_spec_1.TestingRecipient.address, [new Mosaic_1.Mosaic(conf_spec_1.ConfNetworkMosaic, UInt64_1.UInt64.fromUint(10))], PlainMessage_1.PlainMessage.create('test-message from multilevel multisig account as aggregate complete'), conf_spec_1.ConfNetworkType);
            // initiator, delivers this to other cosigners
            const aggregateCompleteTransaction = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [transferTransaction.toAggregate(conf_spec_1.MultilevelMultisigAccount.publicAccount)], conf_spec_1.ConfNetworkType, []);
            const signedAggregateCompleteTransaction = aggregateCompleteTransaction.signWith(conf_spec_1.Cosignatory4Account, generationHash);
            // second cosigner, cosign and send back to the initiator
            const cosignedTwo = model_1.CosignatureTransaction.signTransactionPayload(conf_spec_1.Cosignatory2Account, signedAggregateCompleteTransaction.payload, generationHash);
            // third cosigner, cosign and send back to the initiator
            const cosignedThree = model_1.CosignatureTransaction.signTransactionPayload(conf_spec_1.Cosignatory3Account, signedAggregateCompleteTransaction.payload, generationHash);
            // initiator combines all the signatures and the transaction into single signed transaction and announces
            const cosignatureSignedTransactions = [
                new CosignatureSignedTransaction_1.CosignatureSignedTransaction(cosignedTwo.parentHash, cosignedTwo.signature, cosignedTwo.signer),
                new CosignatureSignedTransaction_1.CosignatureSignedTransaction(cosignedThree.parentHash, cosignedThree.signature, cosignedThree.signer)
            ];
            const deserializedAggregateCompleteTransaction = utility_1.TransactionMapping.createFromPayload(signedAggregateCompleteTransaction.payload);
            const signedDeserializedAggregateCompleteTransaction = deserializedAggregateCompleteTransaction.signTransactionGivenSignatures(conf_spec_1.Cosignatory4Account, cosignatureSignedTransactions, generationHash);
            { // check that all the signatures are the same as if used the signTransactionWithCosignatories only
                const differentlySignedAggregateCompleteTransaction = conf_spec_1.Cosignatory4Account.signTransactionWithCosignatories(aggregateCompleteTransaction, [conf_spec_1.Cosignatory2Account, conf_spec_1.Cosignatory3Account], generationHash);
                chai_1.expect(differentlySignedAggregateCompleteTransaction.payload).to.be.equal(signedDeserializedAggregateCompleteTransaction.payload);
                chai_1.expect(differentlySignedAggregateCompleteTransaction.hash).to.be.equal(signedDeserializedAggregateCompleteTransaction.hash);
            }
            utils_1.validateTransactionConfirmed(listener, conf_spec_1.Cosignatory4Account.address, signedDeserializedAggregateCompleteTransaction.hash)
                .then(() => done()).catch((reason) => assert_1.fail(reason));
            transactionHttp.announce(signedDeserializedAggregateCompleteTransaction);
=======
    describe('AccountPropertyTransaction - EntityType', () => {
        it('standalone', (done) => {
            const entityTypePropertyFilter = AccountPropertyModification_1.AccountPropertyModification.createForEntityType(PropertyModificationType_1.PropertyModificationType.Add, TransactionType_1.TransactionType.LINK_ACCOUNT);
            const addressModification = AccountPropertyTransaction_1.AccountPropertyTransaction.createEntityTypePropertyModificationTransaction(Deadline_1.Deadline.create(), PropertyType_1.PropertyType.BlockTransaction, [entityTypePropertyFilter], conf_spec_1.ConfNetworkType);
            const signedTransaction = addressModification.signWith(conf_spec_1.TestingRecipient, generationHash);
            validateTransactionAnnounceCorrectly(conf_spec_1.TestingRecipient.address, done, signedTransaction.hash);
            transactionHttp.announce(signedTransaction);
        });
        it('aggregate', (done) => {
            const entityTypePropertyFilter = AccountPropertyModification_1.AccountPropertyModification.createForEntityType(PropertyModificationType_1.PropertyModificationType.Remove, TransactionType_1.TransactionType.LINK_ACCOUNT);
            const addressModification = AccountPropertyTransaction_1.AccountPropertyTransaction.createEntityTypePropertyModificationTransaction(Deadline_1.Deadline.create(), PropertyType_1.PropertyType.BlockTransaction, [entityTypePropertyFilter], conf_spec_1.ConfNetworkType);
            const aggregateTransaction = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [addressModification.toAggregate(conf_spec_1.TestingRecipient.publicAccount)], conf_spec_1.ConfNetworkType, []);
            const signedTransaction = aggregateTransaction.signWith(conf_spec_1.TestingRecipient, generationHash);
            validateTransactionAnnounceCorrectly(conf_spec_1.TestingRecipient.address, done, signedTransaction.hash);
            transactionHttp.announce(signedTransaction);
>>>>>>> jwt
        });
    });
    describe('AccountLinkTransaction', () => {
        describe('RegisterNamespaceTransaction', () => {
            it('standalone', (done) => {
                namespaceName = 'root-test-namespace-' + Math.floor(Math.random() * 10000);
                const registerNamespaceTransaction = RegisterNamespaceTransaction_1.RegisterNamespaceTransaction.createRootNamespace(Deadline_1.Deadline.create(), namespaceName, UInt64_1.UInt64.fromUint(1000), conf_spec_1.ConfNetworkType);
                const signedTransaction = registerNamespaceTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
<<<<<<< HEAD
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedTransaction.hash)
                    .then(() => done()).catch((reason) => assert_1.fail(reason));
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, done);
>>>>>>> jwt
                transactionHttp.announce(signedTransaction);
            });
            it('aggregate', (done) => {
                const registerNamespaceTransaction = RegisterNamespaceTransaction_1.RegisterNamespaceTransaction.createRootNamespace(Deadline_1.Deadline.create(), 'root-test-namespace-' + Math.floor(Math.random() * 10000), UInt64_1.UInt64.fromUint(1000), conf_spec_1.ConfNetworkType);
                const aggregateTransaction = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [registerNamespaceTransaction.toAggregate(conf_spec_1.TestingAccount.publicAccount)], conf_spec_1.ConfNetworkType, []);
                const signedTransaction = aggregateTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
<<<<<<< HEAD
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedTransaction.hash)
                    .then(() => done()).catch((reason) => assert_1.fail(reason));
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, done);
>>>>>>> jwt
                transactionHttp.announce(signedTransaction);
            });
        });
        describe('MosaicDefinitionTransaction', () => {
            it('standalone', (done) => {
                const nonce = MosaicNonce_1.MosaicNonce.createRandom();
                const mosaicId = MosaicId_1.MosaicId.createFromNonce(nonce, conf_spec_1.TestingAccount.publicAccount);
                const mosaicDefinitionTransaction = MosaicDefinitionTransaction_1.MosaicDefinitionTransaction.create(Deadline_1.Deadline.create(), nonce, mosaicId, MosaicProperties_1.MosaicProperties.create({
                    supplyMutable: true,
                    transferable: true,
                    divisibility: 3,
                    duration: UInt64_1.UInt64.fromUint(1000),
                }), conf_spec_1.ConfNetworkType);
                const signedTransaction = mosaicDefinitionTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
                console.log(mosaicId.toHex());
<<<<<<< HEAD
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedTransaction.hash).then(() => {
                    const modifyMetadataTransaction = ModifyMetadataTransaction_1.ModifyMetadataTransaction.createWithMosaicId(conf_spec_1.ConfNetworkType, Deadline_1.Deadline.create(), undefined, mosaicId, [new ModifyMetadataTransaction_1.MetadataModification(ModifyMetadataTransaction_1.MetadataModificationType.ADD, 'key2', 'some other value')]);
                    const signedTransaction = modifyMetadataTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
                    utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedTransaction.hash)
                        .then(() => done()).catch((reason) => assert_1.fail(reason));
                    transactionHttp.announce(signedTransaction);
                }).catch((reason) => assert_1.fail(reason));
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, () => {
                    const modifyMetadataTransaction = ModifyMetadataTransaction_1.ModifyMetadataTransaction.createWithMosaicId(conf_spec_1.ConfNetworkType, Deadline_1.Deadline.create(), undefined, mosaicId, [new ModifyMetadataTransaction_1.MetadataModification(ModifyMetadataTransaction_1.MetadataModificationType.ADD, "key2", "some other value")]);
                    const signedTransaction = modifyMetadataTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
                    validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, done);
                    transactionHttp.announce(signedTransaction);
                });
>>>>>>> jwt
                transactionHttp.announce(signedTransaction);
            });
            it('aggregate', (done) => {
                const nonce = MosaicNonce_1.MosaicNonce.createRandom();
                mosaicId = MosaicId_1.MosaicId.createFromNonce(nonce, conf_spec_1.TestingAccount.publicAccount);
                const mosaicDefinitionTransaction = MosaicDefinitionTransaction_1.MosaicDefinitionTransaction.create(Deadline_1.Deadline.create(), nonce, mosaicId, MosaicProperties_1.MosaicProperties.create({
                    supplyMutable: true,
                    transferable: true,
                    divisibility: 3,
                    duration: UInt64_1.UInt64.fromUint(1000),
                }), conf_spec_1.ConfNetworkType);
                const aggregateTransaction = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [mosaicDefinitionTransaction.toAggregate(conf_spec_1.TestingAccount.publicAccount)], conf_spec_1.ConfNetworkType, []);
                const signedTransaction = aggregateTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
<<<<<<< HEAD
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedTransaction.hash)
                    .then(() => done()).catch((reason) => assert_1.fail(reason));
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, done);
>>>>>>> jwt
                transactionHttp.announce(signedTransaction);
            });
        });
        describe('MosaicDefinitionTransaction with zero nonce', () => {
            it('standalone', (done) => {
                const nonce = MosaicNonce_1.MosaicNonce.createFromHex('00000000');
                const mosaicId = MosaicId_1.MosaicId.createFromNonce(nonce, conf_spec_1.TestingAccount.publicAccount);
                const mosaicDefinitionTransaction = MosaicDefinitionTransaction_1.MosaicDefinitionTransaction.create(Deadline_1.Deadline.create(), nonce, mosaicId, MosaicProperties_1.MosaicProperties.create({
                    supplyMutable: true,
                    transferable: true,
                    divisibility: 3,
                    duration: UInt64_1.UInt64.fromUint(60000),
                }), conf_spec_1.ConfNetworkType);
                const signedTransaction = mosaicDefinitionTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
<<<<<<< HEAD
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedTransaction.hash)
                    .then(() => done()).catch((reason) => assert_1.fail(reason));
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, done);
>>>>>>> jwt
                transactionHttp.announce(signedTransaction);
            });
            it('aggregate', (done) => {
                const nonce = MosaicNonce_1.MosaicNonce.createFromHex('00000000');
                const mosaicId = MosaicId_1.MosaicId.createFromNonce(nonce, conf_spec_1.TestingAccount.publicAccount);
                const mosaicDefinitionTransaction = MosaicDefinitionTransaction_1.MosaicDefinitionTransaction.create(Deadline_1.Deadline.create(), nonce, mosaicId, MosaicProperties_1.MosaicProperties.create({
                    supplyMutable: true,
                    transferable: true,
                    divisibility: 3,
                    duration: UInt64_1.UInt64.fromUint(1000),
                }), conf_spec_1.ConfNetworkType);
                const aggregateTransaction = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [mosaicDefinitionTransaction.toAggregate(conf_spec_1.TestingAccount.publicAccount)], conf_spec_1.ConfNetworkType, []);
                const signedTransaction = aggregateTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
<<<<<<< HEAD
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedTransaction.hash)
                    .then(() => done()).catch((reason) => assert_1.fail(reason));
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, done);
>>>>>>> jwt
                transactionHttp.announce(signedTransaction);
            });
        });
        describe('AccountAndMosaicAliasTransactions', () => {
            it('should create an alias to an account', (done) => {
                const addressAliasTransaction = model_1.AliasTransaction.createForAddress(Deadline_1.Deadline.create(), AliasActionType_1.AliasActionType.Link, conf_spec_1.ConfTestingNamespace, conf_spec_1.TestingAccount.address, conf_spec_1.ConfNetworkType);
                const signedTransaction = addressAliasTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
<<<<<<< HEAD
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedTransaction.hash)
                    .then(() => done()).catch((reason) => assert_1.fail(reason));
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, () => {
                    done();
                }, signedTransaction.hash);
>>>>>>> jwt
                transactionHttp.announce(signedTransaction);
            });
            it('should remove the alias from an account', (done) => {
                const addressAliasTransaction = model_1.AliasTransaction.createForAddress(Deadline_1.Deadline.create(), AliasActionType_1.AliasActionType.Unlink, conf_spec_1.ConfTestingNamespace, conf_spec_1.TestingAccount.address, conf_spec_1.ConfNetworkType);
                const signedTransaction = addressAliasTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
<<<<<<< HEAD
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedTransaction.hash)
                    .then(() => done()).catch((reason) => assert_1.fail(reason));
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, () => {
                    done();
                }, signedTransaction.hash);
>>>>>>> jwt
                transactionHttp.announce(signedTransaction);
            });
            it('should create an alias to a mosaic', (done) => {
                const mosaicAliasTransaction = model_1.AliasTransaction.createForMosaic(Deadline_1.Deadline.create(), AliasActionType_1.AliasActionType.Link, conf_spec_1.ConfTestingNamespace, conf_spec_1.ConfTestingMosaic, conf_spec_1.ConfNetworkType);
                console.log(mosaicAliasTransaction);
                const signedTransaction = mosaicAliasTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
<<<<<<< HEAD
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedTransaction.hash)
                    .then(() => done()).catch((reason) => assert_1.fail(reason));
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, () => {
                    done();
                }, signedTransaction.hash);
>>>>>>> jwt
                transactionHttp.announce(signedTransaction);
            });
            it('should remove an alias from a mosaic', (done) => {
                const mosaicAliasTransaction = model_1.AliasTransaction.createForMosaic(Deadline_1.Deadline.create(), AliasActionType_1.AliasActionType.Unlink, conf_spec_1.ConfTestingNamespace, conf_spec_1.ConfTestingMosaic, conf_spec_1.ConfNetworkType);
                const signedTransaction = mosaicAliasTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
<<<<<<< HEAD
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedTransaction.hash)
                    .then(() => done()).catch((reason) => assert_1.fail(reason));
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, () => {
                    done();
                }, signedTransaction.hash);
>>>>>>> jwt
                transactionHttp.announce(signedTransaction);
            });
        });
        describe('MosaicSupplyChangeTransaction', () => {
            it('standalone', (done) => {
                const mosaicSupplyChangeTransaction = MosaicSupplyChangeTransaction_1.MosaicSupplyChangeTransaction.create(Deadline_1.Deadline.create(), mosaicId, // depends on mosaicId created randomly in the previous test
                MosaicSupplyType_1.MosaicSupplyType.Increase, UInt64_1.UInt64.fromUint(10), conf_spec_1.ConfNetworkType);
                const signedTransaction = mosaicSupplyChangeTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
<<<<<<< HEAD
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedTransaction.hash)
                    .then(() => done()).catch((reason) => assert_1.fail(reason));
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, done);
>>>>>>> jwt
                transactionHttp.announce(signedTransaction);
            });
            it('aggregate', (done) => {
                const mosaicSupplyChangeTransaction = MosaicSupplyChangeTransaction_1.MosaicSupplyChangeTransaction.create(Deadline_1.Deadline.create(), mosaicId, // depends on mosaicId created randomly in the previous test
                MosaicSupplyType_1.MosaicSupplyType.Increase, UInt64_1.UInt64.fromUint(10), conf_spec_1.ConfNetworkType);
                const aggregateTransaction = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [mosaicSupplyChangeTransaction.toAggregate(conf_spec_1.TestingAccount.publicAccount)], conf_spec_1.ConfNetworkType, []);
                const signedTransaction = aggregateTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
<<<<<<< HEAD
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedTransaction.hash)
                    .then(() => done()).catch((reason) => assert_1.fail(reason));
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, done);
>>>>>>> jwt
                transactionHttp.announce(signedTransaction);
            });
        });
    });
<<<<<<< HEAD
    describe('AccountRestrictionTransaction - Address', () => {
        it('standalone', (done) => {
            const addressRestrictionFilter = AccountRestrictionModification_1.AccountRestrictionModification.createForAddress(RestrictionModificationType_1.RestrictionModificationType.Add, conf_spec_1.Customer1Account.address);
            const addressModification = AccountRestrictionTransaction_1.AccountRestrictionTransaction.createAddressRestrictionModificationTransaction(Deadline_1.Deadline.create(), RestrictionType_1.RestrictionType.BlockAddress, [addressRestrictionFilter], conf_spec_1.ConfNetworkType);
            const signedTransaction = addressModification.signWith(conf_spec_1.TestingAccount, generationHash);
            utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedTransaction.hash)
                .then(() => done()).catch((reason) => assert_1.fail(reason));
            transactionHttp.announce(signedTransaction);
        });
        it('aggregate', (done) => {
            const addressRestrictionFilter = AccountRestrictionModification_1.AccountRestrictionModification.createForAddress(RestrictionModificationType_1.RestrictionModificationType.Remove, conf_spec_1.Customer1Account.address);
            const addressModification = AccountRestrictionTransaction_1.AccountRestrictionTransaction.createAddressRestrictionModificationTransaction(Deadline_1.Deadline.create(), RestrictionType_1.RestrictionType.BlockAddress, [addressRestrictionFilter], conf_spec_1.ConfNetworkType);
            const aggregateTransaction = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [addressModification.toAggregate(conf_spec_1.TestingAccount.publicAccount)], conf_spec_1.ConfNetworkType, []);
            const signedTransaction = aggregateTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
            utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedTransaction.hash)
                .then(() => done()).catch((reason) => assert_1.fail(reason));
            transactionHttp.announce(signedTransaction);
        });
    });
    describe('AccountRestrictionTransaction - Mosaic', () => {
        it('standalone', (done) => {
            const mosaicRestrictionFilter = AccountRestrictionModification_1.AccountRestrictionModification.createForMosaic(RestrictionModificationType_1.RestrictionModificationType.Add, mosaicId);
            const addressModification = AccountRestrictionTransaction_1.AccountRestrictionTransaction.createMosaicRestrictionModificationTransaction(Deadline_1.Deadline.create(), RestrictionType_1.RestrictionType.BlockMosaic, [mosaicRestrictionFilter], conf_spec_1.ConfNetworkType);
            const signedTransaction = addressModification.signWith(conf_spec_1.TestingAccount, generationHash);
            utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedTransaction.hash)
                .then(() => done()).catch((reason) => assert_1.fail(reason));
            transactionHttp.announce(signedTransaction);
        });
        it('aggregate', (done) => {
            const mosaicRestrictionFilter = AccountRestrictionModification_1.AccountRestrictionModification.createForMosaic(RestrictionModificationType_1.RestrictionModificationType.Remove, mosaicId);
            const addressModification = AccountRestrictionTransaction_1.AccountRestrictionTransaction.createMosaicRestrictionModificationTransaction(Deadline_1.Deadline.create(), RestrictionType_1.RestrictionType.BlockMosaic, [mosaicRestrictionFilter], conf_spec_1.ConfNetworkType);
            const aggregateTransaction = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [addressModification.toAggregate(conf_spec_1.TestingAccount.publicAccount)], conf_spec_1.ConfNetworkType, []);
            const signedTransaction = aggregateTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
            utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedTransaction.hash)
                .then(() => done()).catch((reason) => assert_1.fail(reason));
            transactionHttp.announce(signedTransaction);
        });
    });
    describe('AccountRestrictionTransaction - Operation', () => {
        it('standalone', (done) => {
            const operationRestrictionFilter = AccountRestrictionModification_1.AccountRestrictionModification.createForOperation(RestrictionModificationType_1.RestrictionModificationType.Add, TransactionType_1.TransactionType.LINK_ACCOUNT);
            const addressModification = AccountRestrictionTransaction_1.AccountRestrictionTransaction.createOperationRestrictionModificationTransaction(Deadline_1.Deadline.create(), RestrictionType_1.RestrictionType.BlockTransaction, [operationRestrictionFilter], conf_spec_1.ConfNetworkType);
            const signedTransaction = addressModification.signWith(conf_spec_1.Cosignatory2Account, generationHash);
            utils_1.validateTransactionConfirmed(listener, conf_spec_1.Cosignatory2Account.address, signedTransaction.hash)
                .then(() => done()).catch((reason) => assert_1.fail(reason));
            transactionHttp.announce(signedTransaction);
        });
        it('aggregate', (done) => {
            const operationRestrictionFilter = AccountRestrictionModification_1.AccountRestrictionModification.createForOperation(RestrictionModificationType_1.RestrictionModificationType.Remove, TransactionType_1.TransactionType.LINK_ACCOUNT);
            const addressModification = AccountRestrictionTransaction_1.AccountRestrictionTransaction.createOperationRestrictionModificationTransaction(Deadline_1.Deadline.create(), RestrictionType_1.RestrictionType.BlockTransaction, [operationRestrictionFilter], conf_spec_1.ConfNetworkType);
            const aggregateTransaction = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [addressModification.toAggregate(conf_spec_1.Cosignatory2Account.publicAccount)], conf_spec_1.ConfNetworkType, []);
            const signedTransaction = aggregateTransaction.signWith(conf_spec_1.Cosignatory2Account, generationHash);
            utils_1.validateTransactionConfirmed(listener, conf_spec_1.Cosignatory2Account.address, signedTransaction.hash)
                .then(() => done()).catch((reason) => assert_1.fail(reason));
            transactionHttp.announce(signedTransaction);
        });
    });
    /*
    describe('HashLockTransaction - MosaicAlias', () => {
        it('standalone', (done) => {
            const aggregateTransaction = AggregateTransaction.createBonded(
                Deadline.create(),
                [],
                ConfNetworkType,
                [],
            );
            const signedTransaction = TestingAccount.sign(aggregateTransaction, generationHash);
            const hashLockTransaction = HashLockTransaction.create(Deadline.create(),
                new Mosaic(new NamespaceId('cat.currency'), UInt64.fromUint(10 * Math.pow(10, NetworkCurrencyMosaic.DIVISIBILITY))),
                UInt64.fromUint(10000),
                signedTransaction,
                ConfNetworkType);

            const signedHashLockTransaction = hashLockTransaction.signWith(TestingAccount, generationHash);
            validateTransactionAnnounceCorrectly(TestingAccount.address, done, signedHashLockTransaction.hash);
            transactionHttp.announce(signedHashLockTransaction);
        });
    });

    describe('MosaicAliasTransaction', () => {
        it('aggregate', (done) => {
            const mosaicAliasTransaction = MosaicAliasTransaction.create(
                Deadline.create(),
                AliasActionType.Unlink,
                namespaceId,
                mosaicId,
                ConfNetworkType,
            );
            const aggregateTransaction = AggregateTransaction.createComplete(Deadline.create(),
                [mosaicAliasTransaction.toAggregate(TestingAccount.publicAccount)],
                ConfNetworkType,
                [],
            );
            const signedTransaction = aggregateTransaction.signWith(TestingAccount, generationHash);
            validateTransactionAnnounceCorrectly(TestingAccount.address, done, signedTransaction.hash);
            transactionHttp.announce(signedTransaction);
        });
    });
*/
    describe('LockFundsTransaction', () => {
        it('standalone', (done) => {
            const aggregateTransaction = AggregateTransaction_1.AggregateTransaction.createBonded(Deadline_1.Deadline.create(), [], conf_spec_1.ConfNetworkType, []);
            const signedTransaction = conf_spec_1.TestingAccount.sign(aggregateTransaction, generationHash);
            const lockFundsTransaction = LockFundsTransaction_1.LockFundsTransaction.create(Deadline_1.Deadline.create(), new Mosaic_1.Mosaic(conf_spec_1.ConfNetworkMosaic, UInt64_1.UInt64.fromUint(10 * Math.pow(10, conf_spec_1.ConfNetworkMosaicDivisibility))), UInt64_1.UInt64.fromUint(10000), signedTransaction, conf_spec_1.ConfNetworkType);
            const signedLockFundsTransaction = lockFundsTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
            utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedLockFundsTransaction.hash)
                .then(() => done()).catch((reason) => assert_1.fail(reason));
            transactionHttp.announce(signedLockFundsTransaction);
        });
        it('aggregate', (done) => {
            const aggregateTransaction = AggregateTransaction_1.AggregateTransaction.createBonded(Deadline_1.Deadline.create(), [], conf_spec_1.ConfNetworkType, []);
            const signedTransaction = conf_spec_1.TestingAccount.sign(aggregateTransaction, generationHash);
            const lockFundsTransaction = LockFundsTransaction_1.LockFundsTransaction.create(Deadline_1.Deadline.create(), new Mosaic_1.Mosaic(conf_spec_1.ConfNetworkMosaic, UInt64_1.UInt64.fromUint(10 * Math.pow(10, conf_spec_1.ConfNetworkMosaicDivisibility))), UInt64_1.UInt64.fromUint(10), signedTransaction, conf_spec_1.ConfNetworkType);
            const aggregateLockFundsTransaction = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [lockFundsTransaction.toAggregate(conf_spec_1.TestingAccount.publicAccount)], conf_spec_1.ConfNetworkType, []);
            const signedAggregateLockFundsTransaction = aggregateLockFundsTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
            utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedAggregateLockFundsTransaction.hash)
                .then(() => done()).catch((reason) => assert_1.fail(reason));
            transactionHttp.announce(signedAggregateLockFundsTransaction);
        });
    });
    describe('Aggregate Complete Transaction', () => {
        it('should announce aggregated complete transaction', (done) => {
            const transaction = TransferTransaction_1.TransferTransaction.create(Deadline_1.Deadline.create(), conf_spec_1.TestingRecipient.address, [], PlainMessage_1.PlainMessage.create('Hi'), conf_spec_1.ConfNetworkType);
            const aggregateTransaction = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [
                transaction.toAggregate(conf_spec_1.TestingAccount.publicAccount),
            ], conf_spec_1.ConfNetworkType, []);
            const signedTransaction = conf_spec_1.TestingAccount.sign(aggregateTransaction, generationHash);
            utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedTransaction.hash)
                .then(() => done()).catch((reason) => assert_1.fail(reason));
            transactionHttp.announce(signedTransaction);
        });
    });
=======
    /*
        describe('HashLockTransaction - MosaicAlias', () => {
            it('standalone', (done) => {
                const aggregateTransaction = AggregateTransaction.createBonded(
                    Deadline.create(),
                    [],
                    ConfNetworkType,
                    [],
                );
                const signedTransaction = TestingAccount.sign(aggregateTransaction, generationHash);
                const hashLockTransaction = HashLockTransaction.create(Deadline.create(),
                    new Mosaic(new NamespaceId('cat.currency'), UInt64.fromUint(10 * Math.pow(10, NetworkCurrencyMosaic.DIVISIBILITY))),
                    UInt64.fromUint(10000),
                    signedTransaction,
                    ConfNetworkType);
    
                const signedHashLockTransaction = hashLockTransaction.signWith(TestingAccount, generationHash);
                validateTransactionAnnounceCorrectly(TestingAccount.address, done, signedHashLockTransaction.hash);
                transactionHttp.announce(signedHashLockTransaction);
            });
        });
    
        describe('MosaicAliasTransaction', () => {
            it('aggregate', (done) => {
                const mosaicAliasTransaction = MosaicAliasTransaction.create(
                    Deadline.create(),
                    AliasActionType.Unlink,
                    namespaceId,
                    mosaicId,
                    ConfNetworkType,
                );
                const aggregateTransaction = AggregateTransaction.createComplete(Deadline.create(),
                    [mosaicAliasTransaction.toAggregate(TestingAccount.publicAccount)],
                    ConfNetworkType,
                    [],
                );
                const signedTransaction = aggregateTransaction.signWith(TestingAccount, generationHash);
                validateTransactionAnnounceCorrectly(TestingAccount.address, done, signedTransaction.hash);
                transactionHttp.announce(signedTransaction);
            });
        });
    
        describe('LockFundsTransaction', () => {
            let listener: Listener;
            before (() => {
                listener = new Listener(APIUrl);
                return listener.open();
            });
            after(() => {
                return listener.close();
            });
            it('standalone', (done) => {
                const aggregateTransaction = AggregateTransaction.createBonded(
                    Deadline.create(),
                    [],
                    ConfNetworkType,
                    [],
                );
                const signedTransaction = account.sign(aggregateTransaction, generationHash);
                const lockFundsTransaction = LockFundsTransaction.create(Deadline.create(),
                    new Mosaic(networkCurrencyMosaicId, UInt64.fromUint(10 * Math.pow(10, NetworkCurrencyMosaic.DIVISIBILITY))),
                    UInt64.fromUint(10000),
                    signedTransaction,
                    ConfNetworkType);
    
                listener.confirmed(account.address).subscribe((transaction: Transaction) => {
                    done();
                });
                listener.status(account.address).subscribe((error) => {
                    console.log('Error:', error);
                    assert(false);
                    done();
                });
                transactionHttp.announce(lockFundsTransaction.signWith(account, generationHash));
            });
        });
        describe('LockFundsTransaction', () => {
            let listener: Listener;
            before (() => {
                listener = new Listener(APIUrl);
                return listener.open();
            });
            after(() => {
                return listener.close();
            });
            it('aggregate', (done) => {
                const aggregateTransaction = AggregateTransaction.createBonded(
                    Deadline.create(),
                    [],
                    ConfNetworkType,
                    [],
                );
                const signedTransaction = account.sign(aggregateTransaction, generationHash);
                const lockFundsTransaction = LockFundsTransaction.create(Deadline.create(),
                    new Mosaic(networkCurrencyMosaicId, UInt64.fromUint(10 * Math.pow(10, NetworkCurrencyMosaic.DIVISIBILITY))),
                    UInt64.fromUint(10),
                    signedTransaction,
                    ConfNetworkType);
                const aggregateLockFundsTransaction = AggregateTransaction.createComplete(Deadline.create(),
                    [lockFundsTransaction.toAggregate(account.publicAccount)],
                    ConfNetworkType,
                    []);
                listener.confirmed(account.address).subscribe((transaction: Transaction) => {
                    done();
                });
                listener.status(account.address).subscribe((error) => {
                    console.log('Error:', error);
                    assert(false);
                    done();
                });
                transactionHttp.announce(aggregateLockFundsTransaction.signWith(account, generationHash));
            });
        });
    
        describe('Aggregate Complete Transaction', () => {
            let listener: Listener;
            before (() => {
                listener = new Listener(APIUrl);
                return listener.open();
            });
            after(() => {
                return listener.close();
            });
            it('should announce aggregated complete transaction', (done) => {
                const tx = TransferTransaction.create(
                    Deadline.create(),
                    account2.address,
                    [],
                    PlainMessage.create('Hi'),
                    ConfNetworkType,
                );
                const aggTx = AggregateTransaction.createComplete(
                    Deadline.create(),
                    [
                        tx.toAggregate(account.publicAccount),
                    ],
                    ConfNetworkType,
                    [],
                );
                const signedTx = account.sign(aggTx, generationHash);
                listener.confirmed(account.address).subscribe((transaction: Transaction) => {
                    done();
                });
                listener.status(account.address).subscribe((error) => {
                    console.log('Error:', error);
                    assert(false);
                    done();
                });
                transactionHttp.announce(signedTx);
            });
        });
    
        describe('SecretLockTransaction', () => {
            let listener: Listener;
            before (() => {
                listener = new Listener(APIUrl);
                return listener.open();
            });
            after(() => {
                return listener.close();
            });
            it('standalone', (done) => {
                const secretLockTransaction = SecretLockTransaction.create(
                    Deadline.create(),
                    NetworkCurrencyMosaic.createAbsolute(10),
                    UInt64.fromUint(100),
                    HashType.Op_Sha3_256,
                    sha3_256.create().update(Crypto.randomBytes(20)).hex(),
                    account2.address,
                    ConfNetworkType,
                );
                listener.confirmed(account.address).subscribe((transaction: SecretLockTransaction) => {
                    expect(transaction.mosaic, 'Mosaic').not.to.be.undefined;
                    expect(transaction.duration, 'Duration').not.to.be.undefined;
                    expect(transaction.hashType, 'HashType').not.to.be.undefined;
                    expect(transaction.secret, 'Secret').not.to.be.undefined;
                    expect(transaction.recipient, 'Recipient').not.to.be.undefined;
                    done();
                });
                listener.status(account.address).subscribe((error) => {
                    console.log('Error:', error);
                    assert(false);
                    done();
                });
                transactionHttp.announce(secretLockTransaction.signWith(account, generationHash));
            });
        });
        describe('HashType: Op_Sha3_256', () => {
            let listener: Listener;
            before (() => {
                listener = new Listener(APIUrl);
                return listener.open();
            });
            after(() => {
                return listener.close();
            });
    
            it('aggregate', (done) => {
                const secretLockTransaction = SecretLockTransaction.create(
                    Deadline.create(),
                    NetworkCurrencyMosaic.createAbsolute(10),
                    UInt64.fromUint(100),
                    HashType.Op_Sha3_256,
                    sha3_256.create().update(Crypto.randomBytes(20)).hex(),
                    account2.address,
                    ConfNetworkType,
                );
                const aggregateSecretLockTransaction = AggregateTransaction.createComplete(Deadline.create(),
                    [secretLockTransaction.toAggregate(account.publicAccount)],
                    ConfNetworkType,
                    []);
                listener.confirmed(account.address).subscribe((transaction: Transaction) => {
                    done();
                });
                listener.status(account.address).subscribe((error) => {
                    console.log('Error:', error);
                    assert(false);
                    done();
                });
                transactionHttp.announce(aggregateSecretLockTransaction.signWith(account, generationHash));
            });
        });
        describe('HashType: Keccak_256', () => {
            let listener: Listener;
            before (() => {
                listener = new Listener(APIUrl);
                return listener.open();
            });
            after(() => {
                return listener.close();
            });
            it('standalone', (done) => {
                const secretLockTransaction = SecretLockTransaction.create(
                    Deadline.create(),
                    NetworkCurrencyMosaic.createAbsolute(10),
                    UInt64.fromUint(100),
                    HashType.Op_Keccak_256,
                    sha3_256.create().update(Crypto.randomBytes(20)).hex(),
                    account2.address,
                    ConfNetworkType,
                );
                listener.confirmed(account.address).subscribe((transaction: Transaction) => {
                    done();
                });
                listener.status(account.address).subscribe((error) => {
                    console.log('Error:', error);
                    assert(false);
                    done();
                });
                transactionHttp.announce(secretLockTransaction.signWith(account, generationHash));
            });
        });
        describe('HashType: Keccak_256', () => {
            let listener: Listener;
            before (() => {
                listener = new Listener(APIUrl);
                return listener.open();
            });
            after(() => {
                return listener.close();
            });
            it('aggregate', (done) => {
                const secretLockTransaction = SecretLockTransaction.create(
                    Deadline.create(),
                    NetworkCurrencyMosaic.createAbsolute(10),
                    UInt64.fromUint(100),
                    HashType.Op_Keccak_256,
                    sha3_256.create().update(Crypto.randomBytes(20)).hex(),
                    account2.address,
                    ConfNetworkType,
                );
                const aggregateSecretLockTransaction = AggregateTransaction.createComplete(Deadline.create(),
                    [secretLockTransaction.toAggregate(account.publicAccount)],
                    ConfNetworkType,
                    []);
                listener.confirmed(account.address).subscribe((transaction: Transaction) => {
                    done();
                });
                listener.status(account.address).subscribe((error) => {
                    console.log('Error:', error);
                    assert(false);
                    done();
                });
                transactionHttp.announce(aggregateSecretLockTransaction.signWith(account, generationHash));
            });
        });
        describe('HashType: Op_Hash_160', () => {
            let listener: Listener;
            before (() => {
                listener = new Listener(APIUrl);
                return listener.open();
            });
            after(() => {
                return listener.close();
            });
            it('standalone', (done) => {
                const secretSeed = String.fromCharCode.apply(null, Crypto.randomBytes(20));
                const secret = CryptoJS.RIPEMD160(CryptoJS.SHA256(secretSeed).toString(CryptoJS.enc.Hex)).toString(CryptoJS.enc.Hex);
                const secretLockTransaction = SecretLockTransaction.create(
                    Deadline.create(),
                    NetworkCurrencyMosaic.createAbsolute(10),
                    UInt64.fromUint(100),
                    HashType.Op_Hash_160,
                    secret,
                    account2.address,
                    ConfNetworkType,
                );
                listener.confirmed(account.address).subscribe((transaction: Transaction) => {
                    done();
                });
                listener.status(account.address).subscribe((error) => {
                    console.log('Error:', error);
                    assert(false);
                    done();
                });
                transactionHttp.announce(secretLockTransaction.signWith(account, generationHash));
            });
        });
        describe('HashType: Op_Hash_160', () => {
            let listener: Listener;
            before (() => {
                listener = new Listener(APIUrl);
                return listener.open();
            });
            after(() => {
                return listener.close();
            });
            it('aggregate', (done) => {
                const secretSeed = String.fromCharCode.apply(null, Crypto.randomBytes(20));
                const secret = CryptoJS.RIPEMD160(CryptoJS.SHA256(secretSeed).toString(CryptoJS.enc.Hex)).toString(CryptoJS.enc.Hex);
                const secretLockTransaction = SecretLockTransaction.create(
                    Deadline.create(),
                    NetworkCurrencyMosaic.createAbsolute(10),
                    UInt64.fromUint(100),
                    HashType.Op_Hash_160,
                    secret,
                    account2.address,
                    ConfNetworkType,
                );
                const aggregateSecretLockTransaction = AggregateTransaction.createComplete(Deadline.create(),
                    [secretLockTransaction.toAggregate(account.publicAccount)],
                    ConfNetworkType,
                    []);
                listener.confirmed(account.address).subscribe((transaction: Transaction) => {
                    done();
                });
                listener.status(account.address).subscribe((error) => {
                    console.log('Error:', error);
                    assert(false);
                    done();
                });
                transactionHttp.announce(aggregateSecretLockTransaction.signWith(account, generationHash));
            });
        });
        describe('HashType: Op_Hash_256', () => {
            let listener: Listener;
            before (() => {
                listener = new Listener(APIUrl);
                return listener.open();
            });
            after(() => {
                return listener.close();
            });
            it('standalone', (done) => {
                const secretLockTransaction = SecretLockTransaction.create(
                    Deadline.create(),
                    NetworkCurrencyMosaic.createAbsolute(10),
                    UInt64.fromUint(100),
                    HashType.Op_Hash_256,
                    sha3_256.create().update(Crypto.randomBytes(20)).hex(),
                    account2.address,
                    ConfNetworkType,
                );
                listener.confirmed(account.address).subscribe((transaction: Transaction) => {
                    done();
                });
                listener.status(account.address).subscribe((error) => {
                    console.log('Error:', error);
                    assert(false);
                    done();
                });
                transactionHttp.announce(secretLockTransaction.signWith(account, generationHash));
            });
        });
        describe('HashType: Op_Hash_256', () => {
            let listener: Listener;
            before (() => {
                listener = new Listener(APIUrl);
                return listener.open();
            });
            after(() => {
                return listener.close();
            });
            it('aggregate', (done) => {
                const secretLockTransaction = SecretLockTransaction.create(
                    Deadline.create(),
                    0,
                    0,
                    [new MultisigCosignatoryModification(
                        MultisigCosignatoryModificationType.Add,
                        TestingAccount.publicAccount,
                    )],
                    ConfNetworkType,
                    );
                const aggregateTransaction = AggregateTransaction.createBonded(Deadline.create(20, ChronoUnit.MINUTES),
                    [modifyMultisigAccountTransaction.toAggregate(MultisigAccount.publicAccount)],
                    ConfNetworkType,
                    []);
    
                const signedTransaction = CosignatoryAccount.signTransactionWithCosignatories(
                    aggregateTransaction,
                    [Cosignatory2Account],
                    generationHash
                );
    
                const lockFundsTransaction = LockFundsTransaction.create(Deadline.create(),
                    new Mosaic(ConfNetworkMosaic, UInt64.fromUint(10*1000000)),
                    UInt64.fromUint(10000),
                    signedTransaction,
                    ConfNetworkType);
    
                setTimeout(() => {
                    transactionHttp.announce(lockFundsTransaction.signWith(CosignatoryAccount, generationHash));
                }, 1000);
    
                validateTransactionAnnounceCorrectly(CosignatoryAccount.address, () => {
                    validatePartialTransactionAnnounceCorrectly(CosignatoryAccount.address, done);
                    setTimeout(() => {
                        transactionHttp.announceAggregateBonded(signedTransaction);
                    }, 1000);
                });
                transactionHttp.announce(aggregateSecretLockTransaction.signWith(account, generationHash));
            });
        });
        describe('SecretProofTransaction - HashType: Op_Sha3_256', () => {
            it('CosignatureTransaction', (done) => {
                const transferTransaction = TransferTransaction.create(
                    Deadline.create(),
                    TestingRecipient.address,
                    [new Mosaic(ConfNetworkMosaic, UInt64.fromUint(1))],
                    PlainMessage.create('test-message'),
                    ConfNetworkType,
                );
                const aggregateTransaction = AggregateTransaction.createBonded(
                    Deadline.create(2, ChronoUnit.MINUTES),
                    [transferTransaction.toAggregate(MultisigAccount.publicAccount)],
                    ConfNetworkType,
                    []);
    
                const signedTransaction = aggregateTransaction.signWith(
                    CosignatoryAccount, generationHash
                );
    
                const lockFundsTransaction = LockFundsTransaction.create(Deadline.create(),
                    new Mosaic(ConfNetworkMosaic, UInt64.fromUint(10 * 1000000)),
                    UInt64.fromUint(10000),
                    signedTransaction,
                    ConfNetworkType);
    
                setTimeout(() => {
                    transactionHttp.announce(lockFundsTransaction.signWith(CosignatoryAccount, generationHash));
                }, 1000);
    
                validateTransactionAnnounceCorrectly(CosignatoryAccount.address, () => {
                    setTimeout(() => {
                        transactionHttp.announceAggregateBonded(signedTransaction);
                    }, 1000);
    
                    validateCosignaturePartialTransactionAnnounceCorrectly(CosignatoryAccount.address, Cosignatory2Account.publicKey, done);
                    validatePartialTransactionNotPartialAnyMore(CosignatoryAccount.address, signedTransaction.hash, done);
                    validatePartialTransactionAnnounceCorrectly(CosignatoryAccount.address, () => {
                        accountHttp.aggregateBondedTransactions(CosignatoryAccount.publicAccount).subscribe((transactions) => {
                            const partialTransaction = transactions[0];
                            const cosignatureTransaction = CosignatureTransaction.create(partialTransaction);
                            const cosignatureSignedTransaction = Cosignatory2Account.signCosignatureTransaction(cosignatureTransaction);
                            transactionHttp.announceAggregateBondedCosignature(cosignatureSignedTransaction);
                        });
                    });
                    const secretProofTransaction = SecretProofTransaction.create(
                        Deadline.create(),
                        [],
                        ConfNetworkType,
                        [],
                    );
                    const signedTransaction = TestingAccount.sign(aggregateTransaction, generationHash);
    
                    const lockFundsTransaction = LockFundsTransaction.create(Deadline.create(),
                    new Mosaic(ConfNetworkMosaic, UInt64.fromUint(10 * 1000000)),
                    UInt64.fromUint(10000),
                        signedTransaction,
                        ConfNetworkType);
    
                    validateTransactionAnnounceCorrectly(TestingAccount.address, done);
                    transactionHttp.announce(lockFundsTransaction.signWith(TestingAccount, generationHash));
                });
                listener.status(account2.address).subscribe((error) => {
                    console.log('Error:', error);
                    assert(false);
                    done();
                });
                const signedSecretLockTx = secretLockTransaction.signWith(account, generationHash);
                transactionHttp.announce(signedSecretLockTx);
            });
        });
    
        describe('SecretProofTransaction - HashType: Op_Sha3_256', () => {
            let listener: Listener;
            before (() => {
                listener = new Listener(APIUrl);
                return listener.open();
            });
            after(() => {
                return listener.close();
            });
            it('aggregate', (done) => {
                const secretSeed = Crypto.randomBytes(20);
                const secret = sha3_256.create().update(secretSeed).hex();
                const proof = convert.uint8ToHex(secretSeed);
                const secretLockTransaction = SecretLockTransaction.create(
                    Deadline.create(),
                    NetworkCurrencyMosaic.createAbsolute(10),
                    UInt64.fromUint(100),
                    HashType.Op_Sha3_256,
                    secret,
                    account2.address,
                    ConfNetworkType,
                );
                listener.confirmed(account.address).subscribe((transaction: Transaction) => {
                    listener.confirmed(account2.address).subscribe((transaction: Transaction) => {
                        done();
                    });
                    const secretProofTransaction = SecretProofTransaction.create(
                        Deadline.create(),
                        [],
                        ConfNetworkType,
                        [],
                    );
                    const signedTransaction = TestingAccount.sign(aggregateTransaction, generationHash);
                    const lockFundsTransaction = LockFundsTransaction.create(Deadline.create(),
                        new Mosaic(ConfNetworkMosaic, UInt64.fromUint(10 * 1000000)),
                        UInt64.fromUint(10),
                        signedTransaction,
                        ConfNetworkType);
                    const aggregateLockFundsTransaction = AggregateTransaction.createComplete(Deadline.create(),
                        [lockFundsTransaction.toAggregate(TestingAccount.publicAccount)],
                        ConfNetworkType,
                        []);
                    validateTransactionAnnounceCorrectly(TestingAccount.address, done);
                    transactionHttp.announce(aggregateLockFundsTransaction.signWith(TestingAccount, generationHash));
                });
            });
        });
    */
>>>>>>> jwt
    describe('SecretLockTransaction', () => {
        describe('HashType: Op_Sha3_256', () => {
            it('standalone', (done) => {
                const secretLockTransaction = SecretLockTransaction_1.SecretLockTransaction.create(Deadline_1.Deadline.create(), new Mosaic_1.Mosaic(conf_spec_1.ConfNetworkMosaic, UInt64_1.UInt64.fromUint(10 * 1000000)), UInt64_1.UInt64.fromUint(100), HashType_1.HashType.Op_Sha3_256, js_sha3_1.sha3_256.create().update(crypto_1.randomBytes(20)).hex(), conf_spec_1.TestingRecipient.address, conf_spec_1.ConfNetworkType);
<<<<<<< HEAD
                const signedTransaction = secretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedTransaction.hash)
                    .then(() => done()).catch((reason) => assert_1.fail(reason));
                transactionHttp.announce(signedTransaction);
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, done);
                transactionHttp.announce(secretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash));
>>>>>>> jwt
            });
            it('aggregate', (done) => {
                const secretLockTransaction = SecretLockTransaction_1.SecretLockTransaction.create(Deadline_1.Deadline.create(), new Mosaic_1.Mosaic(conf_spec_1.ConfNetworkMosaic, UInt64_1.UInt64.fromUint(10 * 1000000)), UInt64_1.UInt64.fromUint(100), HashType_1.HashType.Op_Sha3_256, js_sha3_1.sha3_256.create().update(crypto_1.randomBytes(20)).hex(), conf_spec_1.TestingRecipient.address, conf_spec_1.ConfNetworkType);
                const aggregateSecretLockTransaction = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [secretLockTransaction.toAggregate(conf_spec_1.TestingAccount.publicAccount)], conf_spec_1.ConfNetworkType, []);
<<<<<<< HEAD
                const signedTransaction = aggregateSecretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedTransaction.hash)
                    .then(() => done()).catch((reason) => assert_1.fail(reason));
                transactionHttp.announce(signedTransaction);
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, done);
                transactionHttp.announce(aggregateSecretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash));
>>>>>>> jwt
            });
        });
        describe('HashType: Keccak_256', () => {
            it('standalone', (done) => {
                const secretLockTransaction = SecretLockTransaction_1.SecretLockTransaction.create(Deadline_1.Deadline.create(), new Mosaic_1.Mosaic(conf_spec_1.ConfNetworkMosaic, UInt64_1.UInt64.fromUint(10 * 1000000)), UInt64_1.UInt64.fromUint(100), HashType_1.HashType.Op_Keccak_256, js_sha3_1.sha3_256.create().update(crypto_1.randomBytes(20)).hex(), conf_spec_1.TestingRecipient.address, conf_spec_1.ConfNetworkType);
<<<<<<< HEAD
                const signedTransaction = secretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedTransaction.hash)
                    .then(() => done()).catch((reason) => assert_1.fail(reason));
                transactionHttp.announce(signedTransaction);
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, done);
                transactionHttp.announce(secretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash));
>>>>>>> jwt
            });
            it('aggregate', (done) => {
                const secretLockTransaction = SecretLockTransaction_1.SecretLockTransaction.create(Deadline_1.Deadline.create(), new Mosaic_1.Mosaic(conf_spec_1.ConfNetworkMosaic, UInt64_1.UInt64.fromUint(10 * 1000000)), UInt64_1.UInt64.fromUint(100), HashType_1.HashType.Op_Keccak_256, js_sha3_1.sha3_256.create().update(crypto_1.randomBytes(20)).hex(), conf_spec_1.TestingRecipient.address, conf_spec_1.ConfNetworkType);
                const aggregateSecretLockTransaction = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [secretLockTransaction.toAggregate(conf_spec_1.TestingAccount.publicAccount)], conf_spec_1.ConfNetworkType, []);
<<<<<<< HEAD
                const signedTransaction = aggregateSecretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedTransaction.hash)
                    .then(() => done()).catch((reason) => assert_1.fail(reason));
                transactionHttp.announce(signedTransaction);
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, done);
                transactionHttp.announce(aggregateSecretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash));
>>>>>>> jwt
            });
        });
        describe('HashType: Op_Hash_160', () => {
            it('standalone', (done) => {
                const secretLockTransaction = SecretLockTransaction_1.SecretLockTransaction.create(Deadline_1.Deadline.create(), new Mosaic_1.Mosaic(conf_spec_1.ConfNetworkMosaic, UInt64_1.UInt64.fromUint(10 * 1000000)), UInt64_1.UInt64.fromUint(100), HashType_1.HashType.Op_Hash_160, js_sha3_1.sha3_256.create().update(crypto_1.randomBytes(20)).hex().substr(0, 40), conf_spec_1.TestingRecipient.address, conf_spec_1.ConfNetworkType);
<<<<<<< HEAD
                const signedTransaction = secretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedTransaction.hash)
                    .then(() => done()).catch((reason) => assert_1.fail(reason));
                transactionHttp.announce(signedTransaction);
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, done);
                transactionHttp.announce(secretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash));
>>>>>>> jwt
            });
            it('aggregate', (done) => {
                const secretLockTransaction = SecretLockTransaction_1.SecretLockTransaction.create(Deadline_1.Deadline.create(), new Mosaic_1.Mosaic(conf_spec_1.ConfNetworkMosaic, UInt64_1.UInt64.fromUint(10 * 1000000)), UInt64_1.UInt64.fromUint(100), HashType_1.HashType.Op_Hash_160, js_sha3_1.sha3_256.create().update(crypto_1.randomBytes(20)).hex().substr(0, 40), conf_spec_1.TestingRecipient.address, conf_spec_1.ConfNetworkType);
                const aggregateSecretLockTransaction = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [secretLockTransaction.toAggregate(conf_spec_1.TestingAccount.publicAccount)], conf_spec_1.ConfNetworkType, []);
<<<<<<< HEAD
                const signedTransaction = aggregateSecretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedTransaction.hash)
                    .then(() => done()).catch((reason) => assert_1.fail(reason));
                transactionHttp.announce(signedTransaction);
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, done);
                transactionHttp.announce(aggregateSecretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash));
>>>>>>> jwt
            });
        });
        describe('HashType: Op_Hash_256', () => {
            it('standalone', (done) => {
                const secretLockTransaction = SecretLockTransaction_1.SecretLockTransaction.create(Deadline_1.Deadline.create(), new Mosaic_1.Mosaic(conf_spec_1.ConfNetworkMosaic, UInt64_1.UInt64.fromUint(10 * 1000000)), UInt64_1.UInt64.fromUint(100), HashType_1.HashType.Op_Hash_256, js_sha3_1.sha3_256.create().update(crypto_1.randomBytes(20)).hex(), conf_spec_1.TestingRecipient.address, conf_spec_1.ConfNetworkType);
<<<<<<< HEAD
                const signedTransaction = secretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedTransaction.hash)
                    .then(() => done()).catch((reason) => assert_1.fail(reason));
                transactionHttp.announce(signedTransaction);
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, done);
                transactionHttp.announce(secretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash));
>>>>>>> jwt
            });
            it('aggregate', (done) => {
                const secretLockTransaction = SecretLockTransaction_1.SecretLockTransaction.create(Deadline_1.Deadline.create(), new Mosaic_1.Mosaic(conf_spec_1.ConfNetworkMosaic, UInt64_1.UInt64.fromUint(10 * 1000000)), UInt64_1.UInt64.fromUint(100), HashType_1.HashType.Op_Hash_256, js_sha3_1.sha3_256.create().update(crypto_1.randomBytes(20)).hex(), conf_spec_1.TestingRecipient.address, conf_spec_1.ConfNetworkType);
                const aggregateSecretLockTransaction = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [secretLockTransaction.toAggregate(conf_spec_1.TestingAccount.publicAccount)], conf_spec_1.ConfNetworkType, []);
<<<<<<< HEAD
                const signedTransaction = aggregateSecretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedTransaction.hash)
                    .then(() => done()).catch((reason) => assert_1.fail(reason));
                transactionHttp.announce(signedTransaction);
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, done);
                transactionHttp.announce(aggregateSecretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash));
>>>>>>> jwt
            });
        });
    });
    describe('SecretProofTransaction', () => {
        describe('HashType: Op_Sha3_256', () => {
            it('standalone', (done) => {
                const secretSeed = crypto_1.randomBytes(20);
                const secret = js_sha3_1.sha3_256.create().update(secretSeed).hex();
                const proof = format_1.Convert.uint8ToHex(secretSeed);
                const secretLockTransaction = SecretLockTransaction_1.SecretLockTransaction.create(Deadline_1.Deadline.create(), new Mosaic_1.Mosaic(conf_spec_1.ConfNetworkMosaic, UInt64_1.UInt64.fromUint(10 * 1000000)), UInt64_1.UInt64.fromUint(100), HashType_1.HashType.Op_Sha3_256, secret, conf_spec_1.TestingRecipient.address, conf_spec_1.ConfNetworkType);
<<<<<<< HEAD
                const signedSecretLockTransaction = secretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedSecretLockTransaction.hash)
                    .then(() => {
                    const secretProofTransaction = SecretProofTransaction_1.SecretProofTransaction.create(Deadline_1.Deadline.create(), HashType_1.HashType.Op_Sha3_256, secret, conf_spec_1.TestingRecipient.address, proof, conf_spec_1.ConfNetworkType);
                    const signedSecretProofTransaction = secretProofTransaction.signWith(conf_spec_1.TestingRecipient, generationHash);
                    utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingRecipient.address, signedSecretProofTransaction.hash)
                        .then(() => {
                        done();
                    }, (reason) => {
                        assert_1.fail(reason);
                    });
                    transactionHttp.announce(signedSecretProofTransaction);
                }, (reason) => {
                    assert_1.fail(reason);
                });
                transactionHttp.announce(signedSecretLockTransaction);
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, () => {
                    const secretProofTransaction = SecretProofTransaction_1.SecretProofTransaction.create(Deadline_1.Deadline.create(), HashType_1.HashType.Op_Sha3_256, secret, conf_spec_1.TestingRecipient.address, proof, conf_spec_1.ConfNetworkType);
                    validateTransactionAnnounceCorrectly(conf_spec_1.TestingRecipient.address, done);
                    transactionHttp.announce(secretProofTransaction.signWith(conf_spec_1.TestingRecipient, generationHash));
                });
                transactionHttp.announce(secretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash));
>>>>>>> jwt
            });
            it('aggregate', (done) => {
                const secretSeed = crypto_1.randomBytes(20);
                const secret = js_sha3_1.sha3_256.create().update(secretSeed).hex();
                const proof = format_1.Convert.uint8ToHex(secretSeed);
                const secretLockTransaction = SecretLockTransaction_1.SecretLockTransaction.create(Deadline_1.Deadline.create(), new Mosaic_1.Mosaic(conf_spec_1.ConfNetworkMosaic, UInt64_1.UInt64.fromUint(10 * 1000000)), UInt64_1.UInt64.fromUint(100), HashType_1.HashType.Op_Sha3_256, secret, conf_spec_1.TestingRecipient.address, conf_spec_1.ConfNetworkType);
<<<<<<< HEAD
                const signedSecretLockTransaction = secretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedSecretLockTransaction.hash)
                    .then(() => {
                    const secretProofTransaction = SecretProofTransaction_1.SecretProofTransaction.create(Deadline_1.Deadline.create(), HashType_1.HashType.Op_Sha3_256, secret, conf_spec_1.TestingRecipient.address, proof, conf_spec_1.ConfNetworkType);
                    const aggregateSecretProofTransaction = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [secretProofTransaction.toAggregate(conf_spec_1.TestingRecipient.publicAccount)], conf_spec_1.ConfNetworkType, []);
                    const signedAggregateSecretProofTransaction = aggregateSecretProofTransaction.signWith(conf_spec_1.TestingRecipient, generationHash);
                    utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingRecipient.address, signedAggregateSecretProofTransaction.hash)
                        .then(() => {
                        done();
                    }, (reason) => {
                        assert_1.fail(reason);
                    });
                    transactionHttp.announce(signedAggregateSecretProofTransaction);
                }, (reason) => {
                    assert_1.fail(reason);
                });
                transactionHttp.announce(signedSecretLockTransaction);
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, () => {
                    const secretProofTransaction = SecretProofTransaction_1.SecretProofTransaction.create(Deadline_1.Deadline.create(), HashType_1.HashType.Op_Sha3_256, secret, conf_spec_1.TestingRecipient.address, proof, conf_spec_1.ConfNetworkType);
                    const aggregateSecretProofTransaction = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [secretProofTransaction.toAggregate(conf_spec_1.TestingRecipient.publicAccount)], conf_spec_1.ConfNetworkType, []);
                    validateTransactionAnnounceCorrectly(conf_spec_1.TestingRecipient.address, done);
                    transactionHttp.announce(aggregateSecretProofTransaction.signWith(conf_spec_1.TestingRecipient, generationHash));
                });
                transactionHttp.announce(secretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash));
>>>>>>> jwt
            });
        });
        describe('HashType: Op_Keccak_256', () => {
            it('standalone', (done) => {
                const secretSeed = crypto_1.randomBytes(20);
                const secret = js_sha3_1.keccak_256.create().update(secretSeed).hex();
                const proof = format_1.Convert.uint8ToHex(secretSeed);
                const secretLockTransaction = SecretLockTransaction_1.SecretLockTransaction.create(Deadline_1.Deadline.create(), new Mosaic_1.Mosaic(conf_spec_1.ConfNetworkMosaic, UInt64_1.UInt64.fromUint(10 * 1000000)), UInt64_1.UInt64.fromUint(100), HashType_1.HashType.Op_Keccak_256, secret, conf_spec_1.TestingRecipient.address, conf_spec_1.ConfNetworkType);
<<<<<<< HEAD
                const signedSecretLockTransaction = secretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedSecretLockTransaction.hash)
                    .then(() => {
                    const secretProofTransaction = SecretProofTransaction_1.SecretProofTransaction.create(Deadline_1.Deadline.create(), HashType_1.HashType.Op_Keccak_256, secret, conf_spec_1.TestingRecipient.address, proof, conf_spec_1.ConfNetworkType);
                    const signedSecretProofTransaction = secretProofTransaction.signWith(conf_spec_1.TestingRecipient, generationHash);
                    utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingRecipient.address, signedSecretProofTransaction.hash)
                        .then(() => {
                        done();
                    }, (reason) => {
                        assert_1.fail(reason);
                    });
                    transactionHttp.announce(signedSecretProofTransaction);
                }, (reason) => {
                    assert_1.fail(reason);
                });
                transactionHttp.announce(signedSecretLockTransaction);
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, () => {
                    const secretProofTransaction = SecretProofTransaction_1.SecretProofTransaction.create(Deadline_1.Deadline.create(), HashType_1.HashType.Op_Keccak_256, secret, conf_spec_1.TestingRecipient.address, proof, conf_spec_1.ConfNetworkType);
                    validateTransactionAnnounceCorrectly(conf_spec_1.TestingRecipient.address, done);
                    transactionHttp.announce(secretProofTransaction.signWith(conf_spec_1.TestingRecipient, generationHash));
                });
                transactionHttp.announce(secretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash));
>>>>>>> jwt
            });
            it('aggregate', (done) => {
                const secretSeed = crypto_1.randomBytes(20);
                const secret = js_sha3_1.keccak_256.create().update(secretSeed).hex();
                const proof = format_1.Convert.uint8ToHex(secretSeed);
                const secretLockTransaction = SecretLockTransaction_1.SecretLockTransaction.create(Deadline_1.Deadline.create(), new Mosaic_1.Mosaic(conf_spec_1.ConfNetworkMosaic, UInt64_1.UInt64.fromUint(10 * 1000000)), UInt64_1.UInt64.fromUint(100), HashType_1.HashType.Op_Keccak_256, secret, conf_spec_1.TestingRecipient.address, conf_spec_1.ConfNetworkType);
<<<<<<< HEAD
                const signedSecretLockTransaction = secretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedSecretLockTransaction.hash)
                    .then(() => {
                    const secretProofTransaction = SecretProofTransaction_1.SecretProofTransaction.create(Deadline_1.Deadline.create(), HashType_1.HashType.Op_Keccak_256, secret, conf_spec_1.TestingRecipient.address, proof, conf_spec_1.ConfNetworkType);
                    const aggregateSecretProofTransaction = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [secretProofTransaction.toAggregate(conf_spec_1.TestingRecipient.publicAccount)], conf_spec_1.ConfNetworkType, []);
                    const signedAggregateSecretProofTransaction = aggregateSecretProofTransaction.signWith(conf_spec_1.TestingRecipient, generationHash);
                    utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingRecipient.address, signedAggregateSecretProofTransaction.hash)
                        .then(() => {
                        done();
                    }, (reason) => {
                        assert_1.fail(reason);
                    });
                    transactionHttp.announce(signedAggregateSecretProofTransaction);
                }, (reason) => {
                    assert_1.fail(reason);
                });
                transactionHttp.announce(signedSecretLockTransaction);
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, () => {
                    const secretProofTransaction = SecretProofTransaction_1.SecretProofTransaction.create(Deadline_1.Deadline.create(), HashType_1.HashType.Op_Keccak_256, secret, conf_spec_1.TestingRecipient.address, proof, conf_spec_1.ConfNetworkType);
                    const aggregateSecretProofTransaction = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [secretProofTransaction.toAggregate(conf_spec_1.TestingRecipient.publicAccount)], conf_spec_1.ConfNetworkType, []);
                    validateTransactionAnnounceCorrectly(conf_spec_1.TestingRecipient.address, done);
                    transactionHttp.announce(aggregateSecretProofTransaction.signWith(conf_spec_1.TestingRecipient, generationHash));
                });
                transactionHttp.announce(secretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash));
>>>>>>> jwt
            });
        });
        describe('HashType: Op_Hash_160', () => {
            it('standalone', (done) => {
                const secretSeed = crypto_1.randomBytes(20);
                const proof = format_1.Convert.uint8ToHex(secretSeed);
                const secret = CryptoJS.RIPEMD160(CryptoJS.enc.Hex.parse(CryptoJS.SHA256(CryptoJS.enc.Hex.parse(proof)).toString(CryptoJS.enc.Hex))).toString(CryptoJS.enc.Hex);
                const secretLockTransaction = SecretLockTransaction_1.SecretLockTransaction.create(Deadline_1.Deadline.create(), new Mosaic_1.Mosaic(conf_spec_1.ConfNetworkMosaic, UInt64_1.UInt64.fromUint(10 * 1000000)), UInt64_1.UInt64.fromUint(100), HashType_1.HashType.Op_Hash_160, secret, conf_spec_1.TestingRecipient.address, conf_spec_1.ConfNetworkType);
<<<<<<< HEAD
                const signedSecretLockTransaction = secretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedSecretLockTransaction.hash)
                    .then(() => {
                    const secretProofTransaction = SecretProofTransaction_1.SecretProofTransaction.create(Deadline_1.Deadline.create(), HashType_1.HashType.Op_Hash_160, secret, conf_spec_1.TestingRecipient.address, proof, conf_spec_1.ConfNetworkType);
                    const signedSecretProofTransaction = secretProofTransaction.signWith(conf_spec_1.TestingRecipient, generationHash);
                    utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingRecipient.address, signedSecretProofTransaction.hash)
                        .then(() => {
                        done();
                    }, (reason) => {
                        assert_1.fail(reason);
                    });
                    transactionHttp.announce(signedSecretProofTransaction);
                }, (reason) => {
                    assert_1.fail(reason);
                });
                transactionHttp.announce(signedSecretLockTransaction);
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, () => {
                    const secretProofTransaction = SecretProofTransaction_1.SecretProofTransaction.create(Deadline_1.Deadline.create(), HashType_1.HashType.Op_Hash_160, secret, conf_spec_1.TestingRecipient.address, proof, conf_spec_1.ConfNetworkType);
                    validateTransactionAnnounceCorrectly(conf_spec_1.TestingRecipient.address, done);
                    transactionHttp.announce(secretProofTransaction.signWith(conf_spec_1.TestingRecipient, generationHash));
                });
                transactionHttp.announce(secretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash));
>>>>>>> jwt
            });
            it('aggregate', (done) => {
                const secretSeed = crypto_1.randomBytes(20);
                const proof = format_1.Convert.uint8ToHex(secretSeed);
                const secret = CryptoJS.RIPEMD160(CryptoJS.enc.Hex.parse(CryptoJS.SHA256(CryptoJS.enc.Hex.parse(proof)).toString(CryptoJS.enc.Hex))).toString(CryptoJS.enc.Hex);
                const secretLockTransaction = SecretLockTransaction_1.SecretLockTransaction.create(Deadline_1.Deadline.create(), new Mosaic_1.Mosaic(conf_spec_1.ConfNetworkMosaic, UInt64_1.UInt64.fromUint(10 * 1000000)), UInt64_1.UInt64.fromUint(100), HashType_1.HashType.Op_Hash_160, secret, conf_spec_1.TestingRecipient.address, conf_spec_1.ConfNetworkType);
<<<<<<< HEAD
                const signedSecretLockTransaction = secretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedSecretLockTransaction.hash)
                    .then(() => {
                    const secretProofTransaction = SecretProofTransaction_1.SecretProofTransaction.create(Deadline_1.Deadline.create(), HashType_1.HashType.Op_Hash_160, secret, conf_spec_1.TestingRecipient.address, proof, conf_spec_1.ConfNetworkType);
                    const aggregateSecretProofTransaction = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [secretProofTransaction.toAggregate(conf_spec_1.TestingRecipient.publicAccount)], conf_spec_1.ConfNetworkType, []);
                    const signedAggregateSecretProofTransaction = aggregateSecretProofTransaction.signWith(conf_spec_1.TestingRecipient, generationHash);
                    utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingRecipient.address, signedAggregateSecretProofTransaction.hash)
                        .then(() => {
                        done();
                    }, (reason) => {
                        assert_1.fail(reason);
                    });
                    transactionHttp.announce(signedAggregateSecretProofTransaction);
                }, (reason) => {
                    assert_1.fail(reason);
                });
                transactionHttp.announce(signedSecretLockTransaction);
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, () => {
                    const secretProofTransaction = SecretProofTransaction_1.SecretProofTransaction.create(Deadline_1.Deadline.create(), HashType_1.HashType.Op_Hash_160, secret, conf_spec_1.TestingRecipient.address, proof, conf_spec_1.ConfNetworkType);
                    const aggregateSecretProofTransaction = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [secretProofTransaction.toAggregate(conf_spec_1.TestingRecipient.publicAccount)], conf_spec_1.ConfNetworkType, []);
                    validateTransactionAnnounceCorrectly(conf_spec_1.TestingRecipient.address, done);
                    transactionHttp.announce(aggregateSecretProofTransaction.signWith(conf_spec_1.TestingRecipient, generationHash));
                });
                transactionHttp.announce(secretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash));
>>>>>>> jwt
            });
        });
        describe('HashType: Op_Hash_256', () => {
            it('standalone', (done) => {
                const secretSeed = crypto_1.randomBytes(20);
                const proof = format_1.Convert.uint8ToHex(secretSeed);
                const secret = CryptoJS.SHA256(CryptoJS.enc.Hex.parse(CryptoJS.SHA256(CryptoJS.enc.Hex.parse(proof)).toString(CryptoJS.enc.Hex))).toString(CryptoJS.enc.Hex);
                const secretLockTransaction = SecretLockTransaction_1.SecretLockTransaction.create(Deadline_1.Deadline.create(), new Mosaic_1.Mosaic(conf_spec_1.ConfNetworkMosaic, UInt64_1.UInt64.fromUint(10 * 1000000)), UInt64_1.UInt64.fromUint(100), HashType_1.HashType.Op_Hash_256, secret, conf_spec_1.TestingRecipient.address, conf_spec_1.ConfNetworkType);
<<<<<<< HEAD
                const signedSecretLockTransaction = secretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedSecretLockTransaction.hash)
                    .then(() => {
                    const secretProofTransaction = SecretProofTransaction_1.SecretProofTransaction.create(Deadline_1.Deadline.create(), HashType_1.HashType.Op_Hash_256, secret, conf_spec_1.TestingRecipient.address, proof, conf_spec_1.ConfNetworkType);
                    const signedSecretProofTransaction = secretProofTransaction.signWith(conf_spec_1.TestingRecipient, generationHash);
                    utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingRecipient.address, signedSecretProofTransaction.hash)
                        .then(() => {
                        done();
                    }, (reason) => {
                        assert_1.fail(reason);
                    });
                    transactionHttp.announce(signedSecretProofTransaction);
                }, (reason) => {
                    assert_1.fail(reason);
                });
                transactionHttp.announce(signedSecretLockTransaction);
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, () => {
                    const secretProofTransaction = SecretProofTransaction_1.SecretProofTransaction.create(Deadline_1.Deadline.create(), HashType_1.HashType.Op_Hash_256, secret, conf_spec_1.TestingRecipient.address, proof, conf_spec_1.ConfNetworkType);
                    validateTransactionAnnounceCorrectly(conf_spec_1.TestingRecipient.address, done);
                    transactionHttp.announce(secretProofTransaction.signWith(conf_spec_1.TestingRecipient, generationHash));
                });
                transactionHttp.announce(secretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash));
>>>>>>> jwt
            });
            it('aggregate', (done) => {
                const secretSeed = crypto_1.randomBytes(20);
                const proof = format_1.Convert.uint8ToHex(secretSeed);
                const secret = CryptoJS.SHA256(CryptoJS.enc.Hex.parse(CryptoJS.SHA256(CryptoJS.enc.Hex.parse(proof)).toString(CryptoJS.enc.Hex))).toString(CryptoJS.enc.Hex);
                const secretLockTransaction = SecretLockTransaction_1.SecretLockTransaction.create(Deadline_1.Deadline.create(), new Mosaic_1.Mosaic(conf_spec_1.ConfNetworkMosaic, UInt64_1.UInt64.fromUint(10 * 1000000)), UInt64_1.UInt64.fromUint(100), HashType_1.HashType.Op_Hash_256, secret, conf_spec_1.TestingRecipient.address, conf_spec_1.ConfNetworkType);
<<<<<<< HEAD
                const signedSecretLockTransaction = secretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
                utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedSecretLockTransaction.hash)
                    .then(() => {
                    const secretProofTransaction = SecretProofTransaction_1.SecretProofTransaction.create(Deadline_1.Deadline.create(), HashType_1.HashType.Op_Hash_256, secret, conf_spec_1.TestingRecipient.address, proof, conf_spec_1.ConfNetworkType);
                    const aggregateSecretProofTransaction = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [secretProofTransaction.toAggregate(conf_spec_1.TestingRecipient.publicAccount)], conf_spec_1.ConfNetworkType, []);
                    const signedAggregateSecretProofTransaction = aggregateSecretProofTransaction.signWith(conf_spec_1.TestingRecipient, generationHash);
                    utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingRecipient.address, signedAggregateSecretProofTransaction.hash)
                        .then(() => {
                        done();
                    }, (reason) => {
                        assert_1.fail(reason);
                    });
                    transactionHttp.announce(signedAggregateSecretProofTransaction);
                }, (reason) => {
                    assert_1.fail(reason);
                });
                transactionHttp.announce(signedSecretLockTransaction);
            });
        });
    });
    describe('announce', () => {
        describe('ChainConfigTransaction', () => {
            ((conf_spec_1.NemesisAccount.privateKey !== "0".repeat(64)) ? it : it.skip)('standalone', (done) => {
                conf_spec_1.GetNemesisBlockDataPromise().then(nemesisBlockInfo => {
                    const chainConfigTransaction = model_1.ChainConfigTransaction.create(Deadline_1.Deadline.create(), UInt64_1.UInt64.fromUint(10), nemesisBlockInfo.config.blockChainConfig, nemesisBlockInfo.config.supportedEntityVersions, conf_spec_1.ConfNetworkType);
                    const signedTransaction = chainConfigTransaction.signWith(conf_spec_1.NemesisAccount, generationHash);
                    utils_1.validateTransactionConfirmed(listener, conf_spec_1.NemesisAccount.address, signedTransaction.hash)
                        .then(() => done()).catch((reason) => assert_1.fail(reason));
                    transactionHttp.announce(signedTransaction);
                });
            });
        });
        describe('ChainUpgradeTransaction', () => {
            ((conf_spec_1.NemesisAccount.privateKey !== "0".repeat(64)) ? it : it.skip)('standalone', (done) => {
                conf_spec_1.GetNemesisBlockDataPromise().then(nemesisBlockInfo => {
                    const chainUpgradeTransaction = model_1.ChainUpgradeTransaction.create(Deadline_1.Deadline.create(), UInt64_1.UInt64.fromUint(100000), UInt64_1.UInt64.fromHex('0001000200030004'), conf_spec_1.ConfNetworkType);
                    const signedTransaction = chainUpgradeTransaction.signWith(conf_spec_1.NemesisAccount, generationHash);
                    utils_1.validateTransactionConfirmed(listener, conf_spec_1.NemesisAccount.address, signedTransaction.hash)
                        .then(() => done()).catch((reason) => assert_1.fail(reason));
                    transactionHttp.announce(signedTransaction);
                });
=======
                validateTransactionAnnounceCorrectly(conf_spec_1.TestingAccount.address, () => {
                    const secretProofTransaction = SecretProofTransaction_1.SecretProofTransaction.create(Deadline_1.Deadline.create(), HashType_1.HashType.Op_Hash_256, secret, conf_spec_1.TestingRecipient.address, proof, conf_spec_1.ConfNetworkType);
                    const aggregateSecretProofTransaction = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [secretProofTransaction.toAggregate(conf_spec_1.TestingRecipient.publicAccount)], conf_spec_1.ConfNetworkType, []);
                    validateTransactionAnnounceCorrectly(conf_spec_1.TestingRecipient.address, done);
                    transactionHttp.announce(aggregateSecretProofTransaction.signWith(conf_spec_1.TestingRecipient, generationHash));
                });
                transactionHttp.announce(secretLockTransaction.signWith(conf_spec_1.TestingAccount, generationHash));
>>>>>>> jwt
            });
        });
    });
    describe('getTransaction', () => {
        it('should return transaction info given transactionHash', (done) => {
            conf_spec_1.GetNemesisBlockDataPromise().then((data) => {
                transactionHttp.getTransaction(data.testTxHash)
                    .subscribe((transaction) => {
                    chai_1.expect(transaction.transactionInfo.hash).to.be.equal(data.testTxHash);
                    chai_1.expect(transaction.transactionInfo.id).to.be.equal(data.testTxId);
                    done();
                });
            });
        });
        it('should return transaction info given transactionId', (done) => {
            conf_spec_1.GetNemesisBlockDataPromise().then((data) => {
                transactionHttp.getTransaction(data.testTxId)
                    .subscribe((transaction) => {
                    chai_1.expect(transaction.transactionInfo.hash).to.be.equal(data.testTxHash);
                    chai_1.expect(transaction.transactionInfo.id).to.be.equal(data.testTxId);
                    done();
                });
            });
        });
    });
    describe('getTransactions', () => {
        it('should return transaction info given array of transactionHash', (done) => {
            conf_spec_1.GetNemesisBlockDataPromise().then((data) => {
                transactionHttp.getTransactions([data.testTxHash])
                    .subscribe((transactions) => {
                    chai_1.expect(transactions[0].transactionInfo.hash).to.be.equal(data.testTxHash);
                    chai_1.expect(transactions[0].transactionInfo.id).to.be.equal(data.testTxId);
                    done();
                });
            });
        });
        it('should return transaction info given array of transactionId', (done) => {
            conf_spec_1.GetNemesisBlockDataPromise().then((data) => {
                transactionHttp.getTransactions([data.testTxId])
                    .subscribe((transactions) => {
                    chai_1.expect(transactions[0].transactionInfo.hash).to.be.equal(data.testTxHash);
                    chai_1.expect(transactions[0].transactionInfo.id).to.be.equal(data.testTxId);
                    done();
                });
            });
        });
    });
    describe('getTransactionStatus', () => {
        it('should return transaction status given array transactionHash', (done) => {
            conf_spec_1.GetNemesisBlockDataPromise().then((data) => {
                transactionHttp.getTransactionStatus(data.testTxHash)
                    .subscribe((transactionStatus) => {
                    chai_1.expect(transactionStatus.group).to.be.equal('confirmed');
                    chai_1.expect(transactionStatus.height.lower).to.be.greaterThan(0);
                    chai_1.expect(transactionStatus.height.higher).to.be.equal(0);
                    done();
                });
            });
        });
    });
    describe('getTransactionsStatuses', () => {
        it('should return transaction status given array of transactionHash', (done) => {
            conf_spec_1.GetNemesisBlockDataPromise().then((data) => {
                transactionHttp.getTransactionsStatuses([data.testTxHash])
                    .subscribe((transactionStatuses) => {
                    chai_1.expect(transactionStatuses[0].group).to.be.equal('confirmed');
                    chai_1.expect(transactionStatuses[0].height.lower).to.be.greaterThan(0);
                    chai_1.expect(transactionStatuses[0].height.higher).to.be.equal(0);
                    done();
                });
            });
        });
    });
    describe('announce', () => {
        it('should return success when announce', (done) => {
<<<<<<< HEAD
            const payload = new model_1.SignedTransaction('', '0'.repeat(64), '', TransactionType_1.TransactionType.TRANSFER, conf_spec_1.ConfNetworkType);
=======
            const payload = new SignedTransaction_1.SignedTransaction('', '0'.repeat(64), '', TransactionType_1.TransactionType.TRANSFER, conf_spec_1.ConfNetworkType);
>>>>>>> jwt
            transactionHttp.announce(payload)
                .subscribe((transactionAnnounceResponse) => {
                chai_1.expect(transactionAnnounceResponse.message)
                    .to.be.equal('packet 9 was pushed to the network via /transaction');
                done();
            });
        });
    });
    describe('announceAggregateBonded', () => {
        it('should return success when announceAggregateBonded', (done) => {
<<<<<<< HEAD
            const payload = new model_1.SignedTransaction('', '0'.repeat(64), '', TransactionType_1.TransactionType.AGGREGATE_BONDED, conf_spec_1.ConfNetworkType);
=======
            const payload = new SignedTransaction_1.SignedTransaction('', '0'.repeat(64), '', TransactionType_1.TransactionType.AGGREGATE_BONDED, conf_spec_1.ConfNetworkType);
>>>>>>> jwt
            transactionHttp.announceAggregateBonded(payload)
                .subscribe((transactionAnnounceResponse) => {
                chai_1.expect(transactionAnnounceResponse.message)
                    .to.be.equal('packet 500 was pushed to the network via /transaction/partial');
                done();
            });
        });
        it('should return an error when a non aggregate transaction bonded is announced via announceAggregateBonded method', () => {
            const tx = TransferTransaction_1.TransferTransaction.create(Deadline_1.Deadline.create(), conf_spec_1.TestingAccount.address, [], PlainMessage_1.PlainMessage.create('Hi'), conf_spec_1.ConfNetworkType);
            const aggTx = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [
                tx.toAggregate(conf_spec_1.TestingAccount.publicAccount),
            ], conf_spec_1.ConfNetworkType, []);
            const signedTx = conf_spec_1.TestingAccount.sign(aggTx, generationHash);
            return transactionHttp.announceAggregateBonded(signedTx).subscribe(resp => {
                throw new Error('Shouldn\'t be called');
            }, error => {
                chai_1.expect(error).to.be.equal('Only Transaction Type 0x4241 is allowed for announce aggregate bonded');
            });
        });
    });
    describe('announceAggregateBondedCosignature', () => {
        it('should return success when announceAggregateBondedCosignature', (done) => {
            const payload = new CosignatureSignedTransaction_1.CosignatureSignedTransaction('', '', '');
            transactionHttp.announceAggregateBondedCosignature(payload)
                .subscribe((transactionAnnounceResponse) => {
                chai_1.expect(transactionAnnounceResponse.message)
                    .to.be.equal('packet 501 was pushed to the network via /transaction/cosignature');
                done();
            });
        });
    });
<<<<<<< HEAD
=======
    describe('aggregate complete tx', () => {
        it('should work', () => {
            const tx = TransferTransaction_1.TransferTransaction.create(Deadline_1.Deadline.create(), conf_spec_1.TestingRecipient.address, [], PlainMessage_1.PlainMessage.create('Hi'), conf_spec_1.ConfNetworkType);
            const aggTx = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [
                tx.toAggregate(conf_spec_1.TestingAccount.publicAccount),
            ], conf_spec_1.ConfNetworkType, []);
            const signedTx = conf_spec_1.TestingAccount.sign(aggTx, generationHash);
            const trnsHttp = new TransactionHttp_1.TransactionHttp(conf_spec_1.APIUrl);
            trnsHttp.announce(signedTx)
                .subscribe((res) => {
                console.log('res', res);
            });
        });
    });
>>>>>>> jwt
    describe('announceSync', () => {
        it('should return insufficient balance error', (done) => {
            const signerAccount = conf_spec_1.TestingAccount;
            const tx = TransferTransaction_1.TransferTransaction.create(Deadline_1.Deadline.create(), conf_spec_1.TestingRecipient.address, [new Mosaic_1.Mosaic(conf_spec_1.ConfNetworkMosaic, UInt64_1.UInt64.fromUint(1000000 * 1000000))], PlainMessage_1.EmptyMessage, conf_spec_1.ConfNetworkType);
            const signedTx = signerAccount.sign(tx, generationHash);
            const trnsHttp = new TransactionHttp_1.TransactionHttp(conf_spec_1.APIUrl);
            trnsHttp
                .announceSync(signedTx)
                .subscribe((shouldNotBeCalled) => {
                throw new Error('should not be called');
            }, (err) => {
                chai_1.expect(err).to.satisfy((err) => {
                    return (err === 'non sync server' || err.status === 'Failure_Core_Insufficient_Balance');
                });
                done();
            });
        });
    });
    describe('getTransactionEffectiveFee', () => {
        it('should return effective paid fee given transactionHash', (done) => {
            conf_spec_1.GetNemesisBlockDataPromise().then((data) => {
                transactionHttp.getTransactionEffectiveFee(data.testTxHash)
                    .subscribe((effectiveFee) => {
                    chai_1.expect(effectiveFee).to.not.be.undefined;
                    chai_1.expect(effectiveFee).to.be.equal(0);
                    done();
                });
            });
        });
    });
<<<<<<< HEAD
    describe('announceSync', () => {
        it('should return insufficient balance error', (done) => {
            const aggregateTransaction = AggregateTransaction_1.AggregateTransaction.createBonded(Deadline_1.Deadline.create(), [], conf_spec_1.ConfNetworkType, []);
            const signedTransaction = conf_spec_1.TestingAccount.sign(aggregateTransaction, generationHash);
            const lockFundsTransaction = LockFundsTransaction_1.LockFundsTransaction.create(Deadline_1.Deadline.create(), new Mosaic_1.Mosaic(conf_spec_1.ConfNetworkMosaic, UInt64_1.UInt64.fromUint(0)), UInt64_1.UInt64.fromUint(10000), signedTransaction, conf_spec_1.ConfNetworkType);
            const signedLockFundsTransactions = lockFundsTransaction.signWith(conf_spec_1.TestingAccount, generationHash);
            utils_1.validateTransactionConfirmed(listener, conf_spec_1.TestingAccount.address, signedLockFundsTransactions.hash)
                .then(() => {
                assert_1.fail('should not be called');
            }).catch((reason) => {
                chai_1.expect(reason.status).to.be.equal('Failure_LockHash_Invalid_Mosaic_Amount');
                done();
            });
            transactionHttp.announce(signedLockFundsTransactions);
        });
    });
=======
    // describe('announceSync', () => {
    //     it('should return insufficient balance error', (done) => {
    //         const aggregateTransaction = AggregateTransaction.createBonded(
    //                         Deadline.create(),
    //                         [],
    //                         ConfNetworkType,
    //                         [],
    //                     );
    //         const signedTransaction = account.sign(aggregateTransaction);
    //         const lockFundsTransaction = LockFundsTransaction.create(Deadline.create(),
    //             NetworkCurrencyMosaic.createAbsolute(0),
    //             UInt64.fromUint(10000),
    //             signedTransaction,
    //             ConfNetworkType);
    //         transactionHttp
    //             .announceSync(lockFundsTransaction.signWith(account, generationHash))
    //             .subscribe((shouldNotBeCalled) => {
    //                 throw new Error('should not be called');
    //             }, (err) => {
    //                 console.log(err);
    //                 expect(err.status).to.be.equal('Failure_LockHash_Invalid_Mosaic_Amount');
    //                 done();
    //             });
    //     });
    // });
>>>>>>> jwt
});
//# sourceMappingURL=TransactionHttp.spec.js.map